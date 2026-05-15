# 🧪 K6 Performance Tests - Guía de Uso

Esta carpeta contiene 4 tests de rendimiento mejorados usando **k6** para evaluar el rendimiento de la API Barroco bajo diferentes escenarios de carga.

## 📊 Resumen de Tests

| Test | Archivo | Tipo | VUs Máx | Duración | Propósito |
|---|---|---|---|---|---|
| **Load** | `load-test-v2.js` | Carga gradual | 50 | ~3m 30s | Medir performance bajo carga normal |
| **Stress** | `stress-test-v2.js` | Estrés progresivo | 150 | ~4m | Encontrar punto de ruptura |
| **Spike** | `spike-test-v2.js` | Picos repentinos | 200 | ~1m 50s | Simular picos de tráfico |
| **Hard** | `hard-test-v2.js` | Resistencia | 200 | ~7m 30s | Prueba exhaustiva a largo plazo |

## 🚀 Instalación de k6

### Windows (PowerShell)
```powershell
# Descargar e instalar
choco install k6

# Verificar instalación
k6 version
```

### macOS
```bash
brew install k6
k6 version
```

### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install k6
k6 version
```

### Docker
```bash
docker pull grafana/k6:latest
docker run -i grafana/k6 run - < load-test-v2.js
```

## 🔧 Ejecución Local

### 1. Load Test (Recomendado para empezar)
```bash
cd Backend
k6 run k6/load-test-v2.js
```

**Qué hace:**
- Ramp-up desde 0 a 50 VUs en 3 fases
- Mantiene 50 VUs durante 1 minuto
- Ramp-down gradual
- Objetivo: ~3.5 minutos

### 2. Stress Test
```bash
cd Backend
k6 run k6/stress-test-v2.js
```

**Qué hace:**
- Aumenta progresivamente hasta 150 VUs
- Busca encontrar dónde empieza a fallar
- Objetivo: ~4 minutos

### 3. Spike Test
```bash
cd Backend
k6 run k6/spike-test-v2.js
```

**Qué hace:**
- Baseline bajo (5 VUs)
- **SPIKE REPENTINO**: 5 → 200 VUs en 10 segundos
- Recuperación rápida
- Objetivo: Medir resiliencia ante picos

### 4. Hard Test (⚠️ Más demandante)
```bash
cd Backend
k6 run k6/hard-test-v2.js
```

**Qué hace:**
- Carga máxima (200 VUs) durante **3 minutos**
- Prueba de resistencia a largo plazo
- Detecta memory leaks
- Objetivo: ~7.5 minutos

## 🌍 Ejecución en Producción (Render)

Reemplaza `BASE_URL`:

```bash
# Load test contra producción
k6 run -e BASE_URL=https://barroco-api.onrender.com Backend/k6/load-test-v2.js

# Stress test contra producción
k6 run -e BASE_URL=https://barroco-api.onrender.com Backend/k6/stress-test-v2.js

# Spike test contra producción
k6 run -e BASE_URL=https://barroco-api.onrender.com Backend/k6/spike-test-v2.js

# Hard test contra producción (⚠️ Cuidado con throttling)
k6 run -e BASE_URL=https://barroco-api.onrender.com Backend/k6/hard-test-v2.js
```

## 🔐 Variables de Entorno

Todos los tests incluyen credenciales por defecto:
- `BASIC_USER=frozono`
- `BASIC_PASS=trabatrix2`

Puedes sobrescribirlas:

```bash
k6 run \
  -e BASE_URL=http://localhost:3000 \
  -e BASIC_USER=myuser \
  -e BASIC_PASS=mypass \
  Backend/k6/load-test-v2.js
```

## 📊 Interpretación de Resultados

### Métricas Clave

- **http_req_duration**: Tiempo de respuesta en milisegundos
  - `med`: Mediana (50%)
  - `p(95)`: Percentil 95 (95% de requests más rápidos que esto)
  - `p(99)`: Percentil 99

- **http_req_failed**: Porcentaje de requests con status >= 400
- **failed_requests**: Métrica personalizada (rate)
- **successful_requests**: Métrica personalizada (rate)

### Thresholds por Test

#### Load Test ✅
```
http_req_duration p(95)<500ms    → Target de performance normal
http_req_failed rate<10%         → Aceptar < 10% fallos
products_duration p(95)<300ms    → GET /products debe ser rápido
```

#### Stress Test 💥
```
http_req_duration p(95)<3000ms   → Más tolerante bajo estrés
http_req_failed rate<20%         → Aceptar hasta 20% fallos
```

#### Spike Test ⚡
```
http_req_duration p(95)<15000ms  → Muy tolerante durante spike
http_req_failed rate<25%         → Aceptar hasta 25% fallos
response time < 5s               → Check individual
```

#### Hard Test 🔥
```
http_req_duration p(95)<5000ms   → Mantener bajo carga sostenida
http_req_failed rate<30%         → Aceptar hasta 30% fallos
successful_requests rate>70%     → Al menos 70% éxito
```

## 📁 Resultados

Los resultados se guardan en:
- Carpeta: `Backend/k6/results/`
- Archivo: `{test-name}-{timestamp}.json`
- Reporte consola: Se imprime en stdout

## 🔍 Problemas Comunes

### ❌ "Connection refused"
```
Error: Failed to make request
```
**Solución:** Asegurate que el backend esté corriendo:
```bash
cd Backend
npm start
```

### ❌ "Authentication failed (401)"
```
FAIL - GET /customers status 200 or 401
```
**Solución:** Verifica las credenciales:
```bash
k6 run -e BASIC_USER=frozono -e BASIC_PASS=trabatrix2 Backend/k6/load-test-v2.js
```

### ❌ "Too many requests from this IP"
```
429 Too Many Requests
```
**Solución:** Render tiene rate limiting. Reduce VUs:
```bash
k6 run --vus 50 --duration 30s Backend/k6/load-test-v2.js
```

### ❌ "Timeout"
```
Error: Request timeout
```
**Solución:** Aumenta el timeout en el cliente (ya incluido en los tests):
- Load test: timeout p(95)<500ms
- Stress test: timeout p(95)<3000ms

## 📈 Recomendaciones

### Para Desarrollo Local
1. **Primero**: `load-test-v2.js` (para validar que funciona)
2. **Luego**: `stress-test-v2.js` (para encontrar límites)
3. **Después**: `spike-test-v2.js` (para resilencia)
4. **Finalmente**: `hard-test-v2.js` (para resistencia)

### Para Producción (Render)
⚠️ **ADVERTENCIA**: Los tests pueden consumir créditos rápidamente.

```bash
# Load test seguro (corto)
k6 run -e BASE_URL=https://barroco-api.onrender.com \
  --duration 1m Backend/k6/load-test-v2.js

# NO hacer stress/spike/hard en producción sin estar seguro
```

## 🎯 Casos de Uso

### ¿Usar Load Test si...?
- Quieres validar que la API responde bajo carga normal
- Mides baseline de performance
- Tienes recursos limitados

### ¿Usar Stress Test si...?
- Quieres encontrar el punto de ruptura
- Necesitas saber máxima capacidad
- Tienes 4-5 minutos disponibles

### ¿Usar Spike Test si...?
- Tienes tráfico impredecible
- Quieres saber cómo maneja picos
- Necesitas validar recuperación rápida

### ¿Usar Hard Test si...?
- Necesitas probar resistencia a largo plazo
- Buscas detectar memory leaks
- Tienes tiempo (7.5 minutos)

## 📊 Output Esperado

Cada test genera:

1. **Console Report** (en stdout)
```
════════════════════════════════════════════════════════════════
                  📊 LOAD TEST REPORT - K6
                    May 15, 2026 10:30:45 AM
════════════════════════════════════════════════════════════════

📋 CONFIGURACIÓN
   Stages: 30s→10 | 1m→25 | 30s→50 | 1m→50 | 30s→0 VUs
   Duración total: ~3m 30s

📊 MÉTRICAS GENERALES HTTP
   Total requests:     1,245
   Failed requests:    2.3%
   Req duration (med): 45.23ms
   Req duration (p95): 180.45ms
   ...
```

2. **JSON Results** (en `Backend/k6/results/`)
```
results/load-test-2026-05-15-10-30-45.json
```

## 🚀 Próximos Pasos

1. Ejecuta `load-test-v2.js` localmente
2. Revisa los resultados en `Backend/k6/results/`
3. Si todo funciona, prueba `stress-test-v2.js`
4. Documenta los thresholds basados en tus resultados
5. Integra en CI/CD (opcional)

## 📚 Referencias

- [k6 Documentation](https://k6.io/docs/)
- [k6 HTTP API](https://k6.io/docs/javascript-api/k6-http/)
- [k6 Metrics](https://k6.io/docs/javascript-api/k6-metrics/)
- [k6 Checks](https://k6.io/docs/javascript-api/k6/#check-val-sets-tags-name-string-boolean)

---

**Última actualización:** Mayo 2026  
**Versión de k6:** 0.50+  
**Status:** ✅ Listo para usar
