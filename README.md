# 🏺 Barroco — Ecommerce de Cerámica Artesanal

![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Quality Score](https://img.shields.io/badge/Quality%20Score-88%2F100-1f883d?style=flat-square&logo=checkmark&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-Jest%2FVitest-15847d?style=flat-square&logo=jest&logoColor=white)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088ff?style=flat-square&logo=github&logoColor=white)

> **Plataforma de comercio electrónico** para cerámica artesanal con **aseguramiento de calidad basado en el Modelo de McCall y ciclo PDCA**. Proyecto de evaluación para la asignatura *Aseguramiento de Calidad del Software* (ESPE, 2026).

---

## 📋 Tabla de Contenidos

- [🚀 Demo en Producción](#-demo-en-producción)
- [📊 Calidad del Proyecto (Modelo de McCall)](#-calidad-del-proyecto-modelo-de-mccall)
- [🔄 Metodología: PDCA + McCall](#-metodología-pdca--mccall)
- [✨ Características](#-características)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📦 Instalación Local](#-instalación-local)
- [🧪 Pruebas y CI/CD](#-pruebas-y-cicd)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [👥 Equipo](#-equipo)
- [📚 Referencias](#-referencias)

---

## 🚀 Demo en Producción

| Componente | URL | Estado |
|---|---|---|
| **Frontend** | [barroco-app-dwrs.onrender.com](https://barroco-app-dwrs.onrender.com) | 🟢 Activo |
| **Backend API** | [barroco-api.onrender.com](https://barroco-api.onrender.com) | 🟢 Activo |
| **Quality Score** | `/api/quality/score` | 🟢 88/100 |
| **Catálogo** | 2,417 productos de cerámica | ✅ Cargados |

---

## 📊 Calidad del Proyecto (Modelo de McCall)

### Resumen General

El proyecto utiliza el **Modelo de Calidad de McCall** (McCall et al., 1977) para medir la calidad del software en 4 factores clave:

| Factor | Peso | Score | Contribución | Estado |
|---|---|---|---|---|
| **Correctness** *(Corrección)* | 30% | 90/100 | +27.0 pts | ✅ Excelente |
| **Testability** *(Capacidad de Prueba)* | 30% | 82/100 | +24.6 pts | 🟡 Bueno |
| **Maintainability** *(Mantenibilidad)* | 20% | 84/100 | +16.8 pts | 🟡 Bueno |
| **Integrity** *(Integridad/Seguridad)* | 20% | 100/100 | +20.0 pts | ✅ Perfecto |
| **TOTAL** | **100%** | **88/100** | **88.4 pts** | **🟢 BUENO** |

### Fórmula de Cálculo
```
Quality Score = (Correctness × 0.30) + (Testability × 0.30) + (Maintainability × 0.20) + (Integrity × 0.20)
Quality Score = (90 × 0.30) + (82 × 0.30) + (84 × 0.20) + (100 × 0.20)
Quality Score = 27.0 + 24.6 + 16.8 + 20.0 = 88.4 ≈ 88/100
```

### Mapeo a Factores de McCall

- **Correctness (30%)**: Tests unitarios pasando + validación de reglas de negocio
  - Backend cobertura: 82% (Jest)
  - Frontend cobertura: 70% (Vitest)
  
- **Testability (30%)**: Suite de pruebas accesible + pruebas de carga (k6)
  - 35+ test suites en Backend
  - 18+ test suites en Frontend
  - Pruebas de carga: load, stress, spike, hard

- **Maintainability (20%)**: Código limpio, bajo acoplamiento, componentes reutilizables
  - ESLint configurado (0 violations)
  - Componentes modularizados con shadcn/ui
  - Servicios separados de lógica

- **Integrity (20%)**: Autenticación BasicAuth + validación de inputs + CORS estricto
  - BasicAuth en todos los endpoints
  - Validación de schemas con Mongoose
  - CORS configurado para producción

### 🔗 Consultar Score en Tiempo Real

```bash
curl -u frozono:trabatrix2 https://barroco-api.onrender.com/api/quality/score | jq .
```

Respuesta esperada:
```json
{
  "success": true,
  "data": {
    "overallScore": 88,
    "breakdown": {
      "correctness": {"score": 90, "weight": 0.3, "contribution": 27},
      "testability": {"score": 82, "weight": 0.3, "contribution": 24.6},
      "maintainability": {"score": 84, "weight": 0.2, "contribution": 16.8},
      "integrity": {"score": 100, "weight": 0.2, "contribution": 20}
    }
  },
  "message": "🟢 Calidad del proyecto: BUENO"
}
```

---

## 🔄 Metodología: PDCA + McCall

Este proyecto implementa el **ciclo PDCA** (Deming) para mejora continua, combinado con el **Modelo de McCall** para medición de calidad:

### **Plan** 📋
- Definición de factores de calidad (Correctness, Testability, Maintainability, Integrity)
- Establecimiento de pesos y umbrales (target: ≥85/100)
- Configuración de pipeline CI/CD en GitHub Actions

### **Do** 🔨
- Implementación del QualityScoringEngine (Backend/services/QualityScoringEngine.js)
- Suite de tests unitarios (Jest + Vitest)
- Pruebas de carga con k6
- Despliegue continuo a Render

### **Check** ✅
- Ejecución automática de tests en cada push
- Cálculo del Quality Score en cada deploy
- Generación de artifact `quality-score-report.json` en GitHub Actions
- Análisis de logs y métricas en console del workflow

### **Act** 🎯
- Recomendaciones generadas automáticamente por el QualityScoringEngine
- Iteración sobre el código para mejorar cobertura de tests
- Refactorización de código con alto acoplamiento
- Implementación de nuevas validaciones de seguridad

**Flujo en el proyecto:**
```
Push a main 
  → GitHub Actions CI: Tests Backend + Frontend
    → CD: Deploy a Render + Calcula Quality Score
      → Genera artifact con reporte
        → Team actúa sobre recomendaciones
          → Siguiente iteración
```

---

## ✨ Características

## ✨ Características

### 🛍️ Para Clientes
- ✅ **Catálogo interactivo**: Búsqueda en tiempo real, filtrado por categorías
- ✅ **2,417 productos** de cerámica artesanal con imágenes y descripciones
- ✅ **Carrito de compras**: Sincronización bidireccional Backend-Frontend
- ✅ **Wishlist**: Guardado de favoritos con persistencia en BD
- ✅ **Checkout simulado**: Validación de direcciones y cálculo de impuestos
- ✅ **Perfil de usuario**: Gestión de datos personales e historial de órdenes

### 🛠️ Para Administradores
- ✅ **Panel CRUD completo**: Usuarios, Productos, Categorías, Órdenes
- ✅ **Gestión de stock**: Actualización en tiempo real
- ✅ **Visualización de órdenes**: Estado de entrega y pagos

### 🔒 Calidad y Seguridad
- ✅ **API RESTful** con autenticación BasicAuth
- ✅ **CORS configurado** para producción
- ✅ **Validación de inputs** con Mongoose schemas
- ✅ **Pruebas unitarias**: 82% Backend, 70% Frontend
- ✅ **Pipeline CI/CD automático** en GitHub Actions → Render
- ✅ **QualityScoringEngine**: Cálculo matemático de calidad en tiempo real
- ✅ **Artifact de evidencia**: `quality-score-report.json` en cada deploy
- ✅ **Pruebas de rendimiento**: k6 (load, stress, spike, hard)

---

## 🛠️ Stack Tecnológico

### Backend
| Tecnología | Versión | Propósito |
|---|---|---|
| Node.js | 20.x (LTS) | Runtime JavaScript |
| Express | 5.x | Framework HTTP |
| MongoDB Atlas | — | Base de datos cloud |
| Mongoose | 8.x | ODM y schemas |
| Jest | 30.x | Pruebas unitarias |
| Supertest | 7.x | Pruebas de endpoints |
| k6 | 0.50+ | Pruebas de rendimiento |
| ESLint | 9.x | Linting estático |

### Frontend
| Tecnología | Versión | Propósito |
|---|---|---|
| React | 18.x | UI Library |
| TypeScript | 5.x | Tipado estático |
| Vite | 5.x | Bundler y dev server |
| Tailwind CSS | 3.x | Estilos utilitarios |
| shadcn/ui | — | Componentes accesibles |
| React Router | 6.x | Enrutamiento SPA |
| Axios | 1.x | Cliente HTTP con retry |
| Vitest | 4.x | Pruebas unitarias |
| React Testing Library | 16.x | Pruebas de componentes |

---

## 📦 Instalación Local

### ✅ Requisitos Previos
- **Node.js** v20.x ([descargar](https://nodejs.org/))
- **npm** v10.x (incluido con Node.js)
- Cuenta en **MongoDB Atlas** con cluster configurado
- (Opcional) **k6** para pruebas de carga ([instalar](https://k6.io/docs/get-started/installation/))

### 1️⃣ Clonar Repositorio

```bash
git clone https://github.com/CesarLoor/Ecommerce_Ceramica.git
cd Ecommerce_Ceramica
```

### 2️⃣ Configurar Backend

```bash
cd Backend
cp .env.example .env   # Editar con credenciales MongoDB + BasicAuth
npm install
npm run dev            # Servidor en http://localhost:3000
```

**Variables de entorno** (`Backend/.env`):
```env
PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/Barroco
BASIC_USER=frozono
BASIC_PASS=trabatrix2
FRONTEND_URL=http://localhost:5173  # Para CORS en desarrollo
```

### 3️⃣ Configurar Frontend

```bash
cd Frontend
cp .env.example .env   # Editar con URL de API
npm install
npm run dev            # App en http://localhost:5173
```

**Variables de entorno** (`Frontend/.env`):
```env
VITE_API_URL=http://localhost:3000
VITE_API_USER=frozono
VITE_API_PASS=trabatrix2
```

---

## 🧪 Pruebas y CI/CD

### Tests Locales

**Backend:**
```bash
cd Backend
npm test              # Pruebas unitarias e integración
npm run test:coverage # Con reporte de cobertura (target: ≥80%)
npm run test:watch    # Modo observador
```

**Frontend:**
```bash
cd Frontend
npm test              # Pruebas con Vitest
npm run test:coverage # Con reporte (target: ≥70%)
```

### Pruebas de Carga (k6)

```bash
cd Backend
k6 run k6/load-test.js    # Test de carga normal
k6 run k6/stress-test.js  # Test de estrés
k6 run k6/spike-test.js   # Test de picos
k6 run k6/hard-test.js    # Test exhaustivo
```

### Pipeline CI/CD

**GitHub Actions Workflows:**

| Workflow | Trigger | Acciones |
|---|---|---|
| `ci.yml` | Push a cualquier rama + PR | Lint → Tests Backend → Tests Frontend |
| `cd.yml` | Push a `main` | Tests → Build → Deploy a Render → Quality Report |

**Secrets requeridos en GitHub:**
- `BASIC_USER`: Usuario para BasicAuth
- `BASIC_PASS`: Contraseña para BasicAuth
- `RENDER_BACKEND_HOOK`: Deploy hook del backend
- `RENDER_FRONTEND_HOOK`: Deploy hook del frontend

**Diagrama del Pipeline:**
```
Push a main
  ↓
GitHub Actions: ci.yml
  ├─ Lint Backend (ESLint)
  ├─ Tests Backend (Jest + cobertura)
  ├─ Lint Frontend (ESLint)
  └─ Tests Frontend (Vitest + cobertura)
  ↓
cd.yml: Deploy & Quality Report
  ├─ Construye credenciales BasicAuth
  ├─ Consulta /api/quality/score
  ├─ Valida respuesta HTTP 200 + JSON válido
  ├─ Genera artifact quality-score-report.json
  └─ Deploy hooks a Render (Backend + Frontend)
```

---

## 📁 Estructura del Proyecto

```
Ecommerce_Ceramica/
├── .github/workflows/
│   ├── ci.yml                  # Pipeline CI: tests en cada push
│   └── cd.yml                  # Pipeline CD: deploy automático
│
├── Backend/                    # API REST (Node.js/Express/MongoDB)
│   ├── config/
│   │   └── db.js               # Conexión a MongoDB Atlas
│   ├── controllers/            # Lógica de endpoints
│   │   ├── categoryController.js
│   │   ├── customerController.js
│   │   ├── productController.js
│   │   └── shoppingCartController.js
│   ├── middlewares/
│   │   ├── basicAuth.js        # Autenticación BasicAuth
│   │   └── errorHandler.js     # Manejo centralizado de errores
│   ├── models/                 # Schemas Mongoose
│   │   ├── category.js
│   │   ├── customer.js
│   │   ├── product.js
│   │   └── shoppingCart.js
│   ├── routes/
│   │   ├── categoryRoutes.js
│   │   ├── customerRoutes.js
│   │   ├── productRoutes.js
│   │   ├── shoppingCartRoutes.js
│   │   └── quality.routes.js   # Endpoint /api/quality/score
│   ├── services/
│   │   ├── categoryService.js
│   │   ├── customerService.js
│   │   ├── productService.js
│   │   ├── shoppingCartService.js
│   │   └── QualityScoringEngine.js  # 🔑 Cálculo de Quality Score
│   ├── k6/                     # Pruebas de rendimiento
│   │   ├── load-test.js
│   │   ├── stress-test.js
│   │   ├── spike-test.js
│   │   └── hard-test.js
│   ├── test/                   # Tests unitarios e integración
│   │   ├── category.test.js
│   │   ├── customer.test.js
│   │   ├── product.test.js
│   │   ├── shoppingCart.test.js
│   │   └── ... (más tests)
│   ├── coverage/               # Reportes de cobertura
│   ├── app.js                  # Aplicación Express
│   ├── index.js                # Entry point
│   ├── jest.config.js          # Configuración Jest
│   ├── package.json
│   └── .env.example
│
├── Frontend/                   # SPA (React/TypeScript/Vite)
│   ├── src/
│   │   ├── components/         # Componentes reutilizables (shadcn/ui)
│   │   ├── pages/              # Vistas de la aplicación
│   │   ├── hooks/              # Custom hooks
│   │   ├── lib/
│   │   │   └── api.ts          # Configuración centralizada de Axios
│   │   ├── services/           # Lógica de negocio frontend
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── eslint.config.js
│   ├── package.json
│   └── .env.example
│
├── README.md                   # Este archivo
└── LICENSE
```

---

## 👥 Equipo del Proyecto

| Nombre | Rol | Responsabilidades |
|---|---|---|
| **Kleber Chavez** | Líder Técnico / Security | Autenticación, validación de inputs, integridad |
| **Cesar Loor** | Backend / DevOps | API REST, CI/CD, QualityScoringEngine |
| **Carlos Ñato** | Testing / QA | Pruebas unitarias, reglas de negocio, cobertura |
| **Dennison Chalacan** | Frontend / UX | Componentes React, diseño responsive, experiencia de usuario |

---

## 📚 Referencias

### Modelo de Calidad
- McCall, J. A., Richards, P. K., & Walters, G. F. (1977). "Factors in Software Quality". *TRW Defense and Space Systems*. — Modelo matemático de 11 factores de calidad agrupados en 3 perspectivas.

### Mejora Continua
- Deming, W. E. (1993). "The New Economics for Industry, Government, Education". *MIT Center for Advanced Engineering Study*. — Ciclo PDCA de mejora continua.

### Guías del Proyecto
- ESPE (2026). "Guía de Proyecto Final - Aseguramiento de Calidad del Software". — Proyecto académico de evaluación del aseguramiento de calidad en full-stack applications.

### Documentación Técnica
- [Node.js Documentation](https://nodejs.org/docs/)
- [Express API Reference](https://expressjs.com/api.html)
- [MongoDB Atlas Documentation](https://docs.mongodb.com/atlas/)
- [React Documentation](https://react.dev/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## 📄 Licencia

Distribuido bajo los términos de la licencia incluida en [LICENSE](./LICENSE).

---

**Última actualización**: Mayo 2026  
**Estado del Proyecto**: ✅ En Producción  
**Quality Score**: 🟢 88/100 (BUENO)