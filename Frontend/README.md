# 🏺 Barroco — Frontend

SPA del ecommerce de cerámica artesanal Barroco, construida con **React 18 + TypeScript + Vite**, usando componentes accesibles de **shadcn/ui** y estilos con **Tailwind CSS**.

> Para información completa del proyecto (arquitectura, CI/CD, despliegue) consulta el [README raíz](../README.md).

---

## 🚀 Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env   # editar con la URL del backend

# 3. Levantar servidor de desarrollo
npm run dev
# → http://localhost:5173
```

---

## 🔐 Variables de entorno

Crea un archivo `.env` en esta carpeta:

```env
VITE_API_URL=http://localhost:3000/barroco
VITE_API_USER=<usuario_api>
VITE_API_PASS=<contraseña_api>
```

---

## 📜 Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Bundle de producción en `dist/` |
| `npm run preview` | Previsualiza el build de producción |
| `npm test` | Pruebas unitarias con Vitest |
| `npm run test:coverage` | Pruebas + informe de cobertura |
| `npm run lint` | Análisis estático con ESLint |

---

## 🛠 Tecnologías principales

- **React 18** — UI declarativa con hooks
- **TypeScript 5** — Tipado estático
- **Vite 5** — Build tool ultrarrápido con HMR
- **Tailwind CSS 3** — Utilidades CSS
- **shadcn/ui** — Componentes accesibles basados en Radix UI
- **React Router 6** — Enrutamiento en el cliente
- **Axios** — Llamadas HTTP al backend
- **React Query (TanStack)** — Gestión del estado del servidor
- **React Hook Form + Zod** — Formularios con validación
- **Vitest + React Testing Library** — Suite de pruebas
