import http from "k6/http";
import { check, group, sleep } from "k6";
import encoding from 'k6/encoding';
import { Rate, Trend, Counter } from "k6/metrics";

// --- CONFIGURACIÓN DEL ENTORNO ---
const BASE_URL = __ENV.BASE_URL || "http://localhost:3000";
const BASIC_USER = __ENV.BASIC_USER || "frozono";
const BASIC_PASS = __ENV.BASIC_PASS || "trabatrix2";
const AUTH_HEADER = `Basic ${encoding.b64encode(`${BASIC_USER}:${BASIC_PASS}`)}`;

// --- MÉTRICAS PERSONALIZADAS ---
const failRate = new Rate("failed_requests");
const productsTrend = new Trend("products_duration", true);
const imageTrend = new Trend("image_download_duration", true); // Métrica para el cuello de botella
const categoriesTrend = new Trend("categories_duration", true);
const totalRequests = new Counter("total_requests");

// --- CONFIGURACIÓN DE LA PRUEBA (Fase DO) ---
export const options = {
  stages: [
    { duration: "30s", target: 10 }, // Ramp-up: 10 usuarios
    { duration: "1m", target: 25 },  // Carga constante: 25 usuarios
    { duration: "30s", target: 50 }, // Pico: 50 usuarios [cite: 214]
  ],
  thresholds: {
    // Meta del proyecto: < 3 segundos para el catálogo 
    "http_req_duration": ["p(95)<3000"], 
    "image_download_duration": ["p(95)<2500"], 
    "http_req_failed": ["rate<0.05"], // Menos del 5% de error
  },
};

const headers = {
  Authorization: AUTH_HEADER,
  "Content-Type": "application/json",
};

// --- FUNCIONES DE SOPORTE ---

function getCatalogWithImages() {
  const res = http.get(`${BASE_URL}/barroco/products`, { headers, tags: { endpoint: "GET_products" } });
  
  const success = check(res, {
    "GET /products status 200": (r) => r.status === 200,
    "GET /products has body": (r) => r.json().length > 0,
  });

  if (success) {
    productsTrend.add(res.timings.duration);
    const products = res.json();
    
    // Simulación del "Hallazgo Crítico": Descarga de la imagen real 
    // Usamos el primer producto como muestra de carga del catálogo
    const imageUrl = products[0].imageUrl || products[0].image; 
    
    if (imageUrl) {
      const imgRes = http.get(imageUrl, { tags: { endpoint: "GET_product_image" } });
      imageTrend.add(imgRes.timings.duration);
      
      check(imgRes, {
        "Image download status 200": (r) => r.status === 200,
        "Image size detection": (r) => r.body.length > 0,
      });
    }
  }
  
  totalRequests.add(1);
  failRate.add(!success);
}

// --- FLUJO PRINCIPAL (Iteración) ---
export default function () {
  group("Health Check", () => {
    const res = http.get(`${BASE_URL}/`, { headers });
    check(res, { "API is alive": (r) => r.status === 200 });
  });

  group("Catálogo - Lectura y Carga de Imágenes", () => {
    getCatalogWithImages();
    sleep(1); // Simula tiempo de navegación del usuario
  });

  group("Categorías - Operaciones", () => {
    const res = http.get(`${BASE_URL}/barroco/categories`, { headers });
    categoriesTrend.add(res.timings.duration);
    check(res, { "GET /categories status 200": (r) => r.status === 200 });
    sleep(0.5);
  });

  group("Carrito - Consulta", () => {
    const res = http.get(`${BASE_URL}/barroco/shoppingCart`, { headers });
    check(res, { "GET /shoppingCart status 200": (r) => r.status === 200 });
  });

  sleep(1);
}

// --- REPORTE FINAL ---
export function handleSummary(data) {
  const now = new Date().toISOString().replace(/[:.]/g, "-");
  const metrics = data.metrics;
  const fmt = (v) => (v ? `${v.toFixed(2)}ms` : "N/A");
  const pct = (v) => (v ? `${(v * 100).toFixed(2)}%` : "0%");

  let report = `
============================================================
       REPORTE DE QA - BARROCO CERAMICS (PDCA)
       Fecha: ${new Date().toLocaleString()}
============================================================

RESUMEN DE CARGA:
  Total Peticiones:  ${metrics.http_reqs ? metrics.http_reqs.values.count : 0}
  Tasa de Fallos:    ${pct(metrics.http_req_failed.values.rate)}
  Iteraciones Totales: ${metrics.iterations.values.count}

DESGLOSE DE RENDIMIENTO (Percentil 95):
  Catálogo (API):    ${fmt(metrics.products_duration.values["p(95)"])}
  IMÁGENES (Storage): ${fmt(metrics.image_download_duration.values["p(95)"])}  <-- FOCO DEL PROBLEMA 
  General HTTP:      ${fmt(metrics.http_req_duration.values["p(95)"])}

ESTADO DE META (< 3000ms):
  ¿Cumple objetivo?: ${metrics.http_req_duration.values["p(95)"] < 3000 ? "SÍ (PASSED)" : "NO (FAILED)"} 

------------------------------------------------------------
`;

  console.log(report);

  return {
    [`results/barroco-report-${now}.json`]: JSON.stringify(data, null, 2),
    stdout: report,
  };
}