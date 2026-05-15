#  Ecommerce Cerámica — Barroco

![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)

Plataforma de comercio electrónico para la tienda de cerámica artesanal **Barroco**. Construida con una arquitectura full-stack moderna: API REST con Node.js/Express en el backend y una SPA con React/TypeScript/Vite en el frontend.

---

##  Tabla de contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Requisitos previos](#-requisitos-previos)
- [Instalación y ejecución local](#-instalación-y-ejecución-local)
- [Variables de entorno](#-variables-de-entorno)
- [Scripts disponibles](#-scripts-disponibles)
- [Pruebas](#-pruebas)
- [CI/CD](#-cicd)
- [Contribución](#-contribución)

---

##  Características

###  Para Clientes
- **Catálogo interactivo:** Búsqueda en tiempo real, filtrado por categorías y ordenamiento por precio o nombre.
- **Carrito de compras inteligente:** Sincronización en tiempo real con el servidor, cálculo automático de impuestos y envíos gratuitos por umbral de compra.
- **Favoritos (Wishlist):** Guardado de piezas que más te gustan.
- **Checkout simulado:** Flujo de validación de direcciones de envío/facturación y pasarela de pago visual.
- **Perfil de usuario:** Gestión de datos personales e historial.

###  Para Administradores
- **Panel de Control (CRUD):** 
  - **Usuarios:** Creación, edición, eliminación y gestión de roles.
  - **Catálogo:** Registro de nuevos productos de cerámica, subida de imágenes y descripciones.
  - **Stock:** Actualización rápida de inventario.
  - **Pedidos:** Visualización y modificación del estado de entrega de las órdenes.
  - **Pagos:** Visualización del historial de transacciones procesadas.

###  Arquitectura y DevOps
- **API RESTful** segura y documentada.
- **Pruebas integrales:** Unitarias (Vitest/Jest), Componentes (RTL) y Rendimiento (k6).
- **Pipeline CI/CD** automatizado con GitHub Actions y despliegue continuo en Render.

---

##  Tecnologías

### Backend
| Tecnología | Versión | Rol |
|---|---|---|
| Node.js | 20.x | Runtime |
| Express | 5.x | Framework HTTP |
| Mongoose | 8.x | ODM para MongoDB |
| MongoDB Atlas | — | Base de datos |
| Jest | 30.x | Pruebas unitarias / integración |
| Supertest | 7.x | Pruebas de endpoints HTTP |
| k6 | — | Pruebas de carga y rendimiento |
| ESLint | 9.x | Linting de código |

### Frontend
| Tecnología | Versión | Rol |
|---|---|---|
| React | 18.x | UI Library |
| TypeScript | 5.x | Tipado estático |
| Vite | 5.x | Bundler y servidor de desarrollo |
| Tailwind CSS | 3.x | Estilos utilitarios |
| shadcn/ui | — | Componentes accesibles |
| React Router | 6.x | Enrutamiento SPA |
| Axios | 1.x | Cliente HTTP |
| Vitest | 4.x | Pruebas unitarias frontend |
| React Testing Library | 16.x | Pruebas de componentes |

---

##  Estructura del proyecto

```
Ecommerce_Ceramica/
├── .github/
│   └── workflows/
│       ├── ci.yml          # Pipeline CI: pruebas y cobertura en cada push
│       └── cd.yml          # Pipeline CD: despliegue a Render en main
│
├── Backend/                # API REST (Node.js / Express / MongoDB)
│   ├── config/             # Configuración de base de datos y app
│   ├── controllers/        # Lógica de controladores
│   ├── middlewares/        # Autenticación, manejo de errores
│   ├── models/             # Esquemas Mongoose
│   ├── routes/             # Definición de rutas
│   ├── services/           # Capa de servicios / lógica de negocio
│   ├── k6/                 # Scripts de pruebas de rendimiento
│   │   ├── load-test.js
│   │   ├── stress-test.js
│   │   ├── spike-test.js
│   │   └── hard-test.js
│   ├── test/               # Pruebas unitarias e integración
│   ├── app.js
│   └── index.js
│
├── Frontend/               # SPA (React / TypeScript / Vite)
│   ├── public/
│   └── src/
│       ├── components/     # Componentes reutilizables (shadcn/ui)
│       ├── pages/          # Vistas / rutas
│       ├── hooks/          # Custom hooks
│       └── lib/            # Utilidades y configuración de axios
│
└── README.md
```

---

## ✅ Requisitos previos

- **Node.js** v20.x ([descargar](https://nodejs.org/))
- **npm** v10.x (incluido con Node.js)
- Cuenta en **MongoDB Atlas** con cluster configurado
- (Opcional) **k6** para pruebas de carga ([instalar](https://k6.io/docs/get-started/installation/))

---

## 🚀 Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone https://github.com/<tu-usuario>/Ecommerce_Ceramica.git
cd Ecommerce_Ceramica
```

### 2. Configurar el Backend

```bash
cd Backend
cp .env.example .env   # Editar con tus credenciales
npm install
npm run dev            # Servidor en http://localhost:3000
```

### 3. Configurar el Frontend

```bash
cd Frontend
cp .env.example .env   # Editar con tus credenciales
npm install
npm run dev            # App en http://localhost:5173
```

---

##  Variables de entorno

### Backend — `Backend/.env`

```env
PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/Barroco
BASIC_USER=<usuario_api>
BASIC_PASS=<contraseña_api>
```

### Frontend — `Frontend/.env`

```env
VITE_API_URL=http://localhost:3000/barroco
VITE_API_USER=<usuario_api>
VITE_API_PASS=<contraseña_api>
```

>  **Nunca subir los archivos `.env` al repositorio.** Están incluidos en `.gitignore`.

---

##  Scripts disponibles

### Backend

| Comando | Descripción |
|---|---|
| `npm start` | Inicia el servidor en producción |
| `npm run dev` | Inicia con auto-reload (modo desarrollo) |
| `npm test` | Ejecuta las pruebas con Jest |
| `npm run test:coverage` | Pruebas con informe de cobertura |
| `npm run test:watch` | Pruebas en modo observador |
| `npm run lint` | Análisis estático con ESLint |

### Frontend

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo Vite |
| `npm run build` | Genera bundle de producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm test` | Ejecuta pruebas con Vitest |
| `npm run test:coverage` | Pruebas con informe de cobertura |
| `npm run lint` | Análisis estático con ESLint |

### Pruebas de carga (k6)

```bash
# Desde la carpeta Backend/
k6 run k6/load-test.js
k6 run k6/stress-test.js
k6 run k6/spike-test.js
k6 run k6/hard-test.js
```

---

## 🧪 Pruebas

El proyecto cuenta con una suite de pruebas en múltiples niveles:

| Nivel | Herramienta | Cobertura objetivo |
|---|---|---|
| Unitarias Backend | Jest + Supertest | ≥ 80 % |
| Unitarias Frontend | Vitest + RTL | ≥ 70 % |
| Carga / Rendimiento | k6 | SLO definidos por escenario |

Los reportes de cobertura se generan automáticamente en cada run de CI y se archivan como **GitHub Actions Artifacts** por 30 días.

---

##  CI/CD

### Pipeline CI (`ci.yml`)
Se activa en **cada push** a cualquier rama y en **pull requests** a `main`/`develop`.

```
Push / PR → Lint Backend → Pruebas Backend (cobertura) → Pruebas Frontend (cobertura)
```

### Pipeline CD (`cd.yml`)
Se activa únicamente en push a **`main`**.

```
Push a main → Pruebas Backend → Deploy a Render (webhook)
```

Los secretos requeridos en GitHub Actions son:

| Secret | Descripción |
|---|---|
| `MONGODB_URI` | Cadena de conexión MongoDB Atlas |
| `BASIC_USER` | Usuario de la API |
| `BASIC_PASS` | Contraseña de la API |
| `RENDER_DEPLOY_HOOK` | URL del deploy hook de Render |

---

##  Contribución

1. Crea una rama desde `develop`: `git checkout -b feature/mi-feature`
2. Realiza tus cambios y asegúrate de que las pruebas pasen: `npm test`
3. Abre un **Pull Request** hacia `develop` describiendo los cambios

---

##  Licencia

Distribuido bajo los términos de la licencia incluida en [LICENSE](./LICENSE).