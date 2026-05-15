import axios from 'axios';

// Obtenemos las variables de entorno o usamos valores por defecto (útil si se olvida el .env)
const API_URL = import.meta.env.VITE_API_URL || 'https://barroco-api.onrender.com';
const API_USER = import.meta.env.VITE_API_USER || 'frozono';
const API_PASS = import.meta.env.VITE_API_PASS || 'trabatrix2';

// Codificamos las credenciales en Base64 nativamente en el navegador
const basicAuthToken = btoa(`${API_USER}:${API_PASS}`);

export const api = axios.create({
  baseURL: `${API_URL}/barroco`,
  timeout: 10000, // 10 segundos de timeout
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${basicAuthToken}`
  }
});

// Interceptor de respuestas para manejo global de errores y lógica de reintentos
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;

    // Inicializar el contador de reintentos si no existe
    if (!config || config.retry === undefined) {
      config.retry = 0;
    }

    const isNetworkError = !error.response;
    const isServerError = error.response && error.response.status >= 500;

    // Si es un error de red o de servidor (5xx), intentamos 1 vez más
    if ((isNetworkError || isServerError) && config.retry < 1) {
      config.retry += 1;
      console.warn(`[Axios] Reintentando petición a ${config.url}...`);
      return api(config); // Re-ejecuta la petición
    }

    // Interceptar el 401 Unauthorized
    if (error.response?.status === 401) {
      console.error('[Axios] Error 401: Credenciales inválidas o no autorizadas por el servidor.');
    }

    return Promise.reject(error);
  }
);