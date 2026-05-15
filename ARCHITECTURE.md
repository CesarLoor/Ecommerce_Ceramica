# 🏗️ Arquitectura del Proyecto - Barroco Ecommerce

## Diagrama General de Arquitectura

```mermaid
graph TB
    subgraph Cliente["🖥️ Frontend (Cliente)"]
        Browser["Navegador del Usuario"]
        UI["React App 18<br/>Vite + TypeScript<br/>Tailwind + shadcn/ui"]
        AxiosClient["Axios Client<br/>interceptores + retry"]
        LocalStorage["LocalStorage<br/>carrito + auth"]
    end

    subgraph API["⚙️ Backend (API REST)"]
        ExpressServer["Express Server<br/>Node.js 20"]
        AuthMW["BasicAuth<br/>Middleware"]
        Controllers["Controllers<br/>CRUD Logic"]
        Services["Services Layer<br/>Business Logic"]
        Models["Mongoose Models<br/>Schemas + Validation"]
        QEngine["🔍 QualityScoringEngine<br/>McCall Factors"]
    end

    subgraph Database["💾 Base de Datos"]
        MongoDB["MongoDB Atlas<br/>Collections:<br/>- users<br/>- products<br/>- categories<br/>- shopping_carts"]
    end

    subgraph Testing["🧪 Pruebas"]
        Jest["Jest + Supertest<br/>Backend Tests<br/>cobertura 82%"]
        Vitest["Vitest + RTL<br/>Frontend Tests<br/>cobertura 70%"]
        k6["k6 Performance<br/>Load/Stress/Spike<br/>Tests"]
    end

    subgraph CICD["🔄 CI/CD Pipeline"]
        GHActions["GitHub Actions"]
        CIWorkflow["ci.yml<br/>- Lint<br/>- Tests<br/>- Coverage"]
        CDWorkflow["cd.yml<br/>- Build<br/>- Deploy<br/>- Quality Report"]
    end

    subgraph Cloud["☁️ Infraestructura (Render)"]
        FrontendRender["Static Site<br/>barroco-app-dwrs<br/>onrender.com"]
        BackendRender["Web Service<br/>barroco-api<br/>onrender.com"]
        Artifact["Quality Report<br/>Artifact (GitHub)"]
    end

    %% Flujos Frontend
    Browser -->|accede| UI
    UI -->|localStorage| LocalStorage
    UI -->|HTTP + BasicAuth| AxiosClient

    %% Flujos Cliente a API
    AxiosClient -->|GET/POST/PUT/DELETE<br/>JSON| ExpressServer
    ExpressServer -->|valida credenciales| AuthMW
    AuthMW -->|OK| Controllers
    
    %% Flujos Backend
    Controllers -->|ejecuta| Services
    Services -->|query| Models
    Models -->|read/write| MongoDB
    
    %% Quality Score
    Services -->|calcula factores| QEngine
    QEngine -->|Correctness<br/>Testability<br/>Maintainability<br/>Integrity| ExpressServer

    %% Respuestas a Cliente
    ExpressServer -->|JSON Response| AxiosClient
    AxiosClient -->|datos| UI
    UI -->|renderiza| Browser

    %% Testing
    CIWorkflow -->|ejecuta| Jest
    CIWorkflow -->|ejecuta| Vitest
    Services -->|testeado por| k6

    %% CI/CD Pipeline
    GHActions -->|push main| CDWorkflow
    CIWorkflow -->|checks| CDWorkflow
    CDWorkflow -->|calcula| QEngine
    QEngine -->|genera| Artifact

    %% Despliegue
    CDWorkflow -->|deploy hook| BackendRender
    CDWorkflow -->|deploy hook| FrontendRender
    BackendRender -->|API funcional| ExpressServer
    FrontendRender -->|UI funcional| UI

    %% Quality Report
    CDWorkflow -->|guarda artifact| Artifact
    Artifact -->|evidencia para| Cloud

    style Cliente fill:#e1f5ff
    style API fill:#fff3e0
    style Database fill:#f3e5f5
    style Testing fill:#e8f5e9
    style CICD fill:#fce4ec
    style Cloud fill:#e0f2f1
```

---

## Diagrama de Capas Detallado (Backend)

```mermaid
graph TD
    Request["📨 HTTP Request<br/>(con BasicAuth)"]
    
    subgraph Layer1["1️⃣ Entrada (Express)"]
        Routes["Routes<br/>GET/POST/PUT/DELETE"]
    end

    subgraph Layer2["2️⃣ Autenticación"]
        BasicAuth["BasicAuth Middleware<br/>Valida credenciales"]
        CORS["CORS Middleware<br/>Control de origen"]
    end

    subgraph Layer3["3️⃣ Controladores"]
        UserCtrl["UserController"]
        ProductCtrl["ProductController"]
        CartCtrl["CartController"]
        QualityCtrl["QualityController"]
    end

    subgraph Layer4["4️⃣ Servicios"]
        UserSrv["UserService<br/>Lógica CRUD usuarios"]
        ProductSrv["ProductService<br/>Catálogo + stock"]
        CartSrv["CartService<br/>Sincronización"]
        QualitySrv["QualityScoringEngine<br/>Cálculo de métricas"]
    end

    subgraph Layer5["5️⃣ Modelos & Validación"]
        UserModel["User Schema<br/>Mongoose + validations"]
        ProductModel["Product Schema<br/>Índices + queries"]
        CartModel["Cart Schema<br/>Virtual fields"]
    end

    subgraph Layer6["6️⃣ Persistencia"]
        Database["MongoDB Atlas<br/>Collections indexadas"]
    end

    subgraph Layer7["7️⃣ Respuesta"]
        Response["JSON Response<br/>+ HTTP Status"]
    end

    Request --> Routes
    Routes --> BasicAuth
    BasicAuth --> CORS
    CORS --> UserCtrl
    CORS --> ProductCtrl
    CORS --> CartCtrl
    CORS --> QualityCtrl

    UserCtrl --> UserSrv
    ProductCtrl --> ProductSrv
    CartCtrl --> CartSrv
    QualityCtrl --> QualitySrv

    UserSrv --> UserModel
    ProductSrv --> ProductModel
    CartSrv --> CartModel
    QualitySrv -.->|lee métricas| UserModel
    QualitySrv -.->|lee métricas| ProductModel

    UserModel --> Database
    ProductModel --> Database
    CartModel --> Database

    Database --> Response
    Response -->|🟢 200 OK| Request

    style Layer1 fill:#fff3cd
    style Layer2 fill:#cfe2ff
    style Layer3 fill:#f8d7da
    style Layer4 fill:#d1e7dd
    style Layer5 fill:#e2e3e5
    style Layer6 fill:#d3d3d3
    style Layer7 fill:#c3e6cb
```

---

## Diagrama de Flujo CI/CD

```mermaid
graph LR
    Developer["👨‍💻 Developer"]
    GithubRepo["📦 GitHub Repo<br/>main/develop"]
    
    subgraph CI["🔄 CI Pipeline (ci.yml)"]
        Trigger1["Push/PR Trigger"]
        LintBackend["ESLint Backend"]
        TestBackend["Jest Tests<br/>+ Coverage"]
        LintFrontend["ESLint Frontend"]
        TestFrontend["Vitest Tests<br/>+ Coverage"]
        Success1["✅ All Checks Pass"]
    end

    subgraph CD["🚀 CD Pipeline (cd.yml)"]
        Trigger2["Push to main"]
        CheckQuality["Calcula Quality Score<br/>McCall Factors"]
        BuildArtifacts["Build Artifacts<br/>Backend + Frontend"]
        QualityReport["Genera Report<br/>quality-score-report.json"]
        DeployHooks["Deploy Hooks<br/>Render API + UI"]
        Success2["✅ Deployment Complete"]
    end

    subgraph Render["☁️ Render Hosting"]
        BackendProd["Backend API<br/>barroco-api.onrender.com"]
        FrontendProd["Frontend SPA<br/>barroco-app-dwrs.onrender.com"]
    end

    subgraph Evidence["📊 Evidencia"]
        Artifacts["GitHub Actions Artifacts<br/>quality-score-evidence<br/>retention: 90 días"]
    end

    Developer -->|git push| GithubRepo
    GithubRepo -->|rama cualquiera| Trigger1
    Trigger1 --> LintBackend
    LintBackend --> TestBackend
    TestBackend --> LintFrontend
    LintFrontend --> TestFrontend
    TestFrontend --> Success1
    
    GithubRepo -->|push main| Trigger2
    Success1 --> Trigger2
    Trigger2 --> CheckQuality
    CheckQuality --> BuildArtifacts
    BuildArtifacts --> QualityReport
    QualityReport --> DeployHooks
    DeployHooks --> BackendProd
    DeployHooks --> FrontendProd
    DeployHooks --> Artifacts
    BackendProd --> Success2
    FrontendProd --> Success2

    style CI fill:#e3f2fd
    style CD fill:#f3e5f5
    style Render fill:#e0f2f1
    style Evidence fill:#fff3cd
```

---

## Diagrama del Quality Scoring Engine

```mermaid
graph TB
    Input["📥 Inicia Cálculo<br/>Quality Score"]
    
    subgraph Measurement["📊 Mediciones (en tiempo real)"]
        TestsCov["✅ Tests Coverage<br/>Backend: 82%<br/>Frontend: 70%"]
        ESLint["🔍 ESLint Analysis<br/>0 violations"]
        CodeSmells["🐛 Code Smells<br/>8 instances"]
        Security["🔒 Security Check<br/>BasicAuth + Validation"]
    end

    subgraph McCall["📐 Factores de McCall"]
        Correctness["Correctness (30%)<br/>Tests + Rules OK<br/>Score: 90/100"]
        Testability["Testability (30%)<br/>Coverage + k6 Tests<br/>Score: 82/100"]
        Maintainability["Maintainability (20%)<br/>Clean Code + Low Coupling<br/>Score: 84/100"]
        Integrity["Integrity (20%)<br/>Auth + Validation<br/>Score: 100/100"]
    end

    subgraph Formula["🧮 Cálculo"]
        Calc["Score = Correctness×0.3 + Testability×0.3<br/>         + Maintainability×0.2 + Integrity×0.2<br/>Score = 90×0.3 + 82×0.3 + 84×0.2 + 100×0.2<br/>Score = 27 + 24.6 + 16.8 + 20 = 88.4"]
    end

    subgraph Output["📤 Resultado"]
        Result["Quality Score: 88/100<br/>Status: 🟢 BUENO<br/>Target: ≥85 ✅"]
        Endpoint["/api/quality/score<br/>GET (con BasicAuth)<br/>JSON Response"]
        Recommend["🎯 Recomendaciones:<br/>- Aumentar cobertura ≥85%<br/>- Reducir code smells"]
    end

    Input --> TestsCov
    Input --> ESLint
    Input --> CodeSmells
    Input --> Security

    TestsCov --> Correctness
    TestsCov --> Testability
    ESLint --> Maintainability
    CodeSmells --> Maintainability
    Security --> Integrity

    Correctness --> Calc
    Testability --> Calc
    Maintainability --> Calc
    Integrity --> Calc

    Calc --> Result
    Result --> Endpoint
    Result --> Recommend

    style Measurement fill:#e8f5e9
    style McCall fill:#fff3e0
    style Formula fill:#f3e5f5
    style Output fill:#e3f2fd
```

---

## Diagrama de Componentes Frontend

```mermaid
graph TD
    App["App.tsx<br/>Router + Layout"]
    
    subgraph Pages["📄 Páginas"]
        Home["Home<br/>Dashboard inicial"]
        Products["Products<br/>Catálogo 2417 items"]
        Admin["Admin Panel<br/>CRUD Management"]
    end

    subgraph Components["🧩 Componentes"]
        CatalogSect["CatalogSection<br/>Búsqueda + Filtros"]
        CartSect["AddToCartSection<br/>Sincronización"]
        UsersSect["UsersSection<br/>CRUD Usuarios"]
        ProductSect["RegisterProductSection<br/>Upload Productos"]
    end

    subgraph SharedComp["🔄 Componentes Compartidos"]
        Layout["Layout<br/>Navbar + Sidebar"]
        ProtRoute["ProtectedRoute<br/>Auth Guard"]
        Forms["Form Components<br/>Input, Select, etc"]
    end

    subgraph Services["🌐 Servicios"]
        API["api.ts<br/>Axios configurado"]
        CartStore["cart-store.ts<br/>State management"]
        Auth["auth.ts<br/>BasicAuth handler"]
    end

    subgraph Styling["🎨 Estilos"]
        Tailwind["Tailwind CSS<br/>Utility-first"]
        ShadCN["shadcn/ui<br/>Componentes accesibles"]
    end

    App --> Pages
    App --> SharedComp
    
    Home --> CatalogSect
    Products --> CatalogSect
    Admin --> UsersSect
    Admin --> ProductSect
    
    CatalogSect --> CartSect
    CartSect --> Components
    
    Pages --> Layout
    Components --> ProtRoute
    Components --> Forms
    
    CatalogSect --> API
    CartSect --> CartStore
    UsersSect --> Auth
    
    Forms --> Tailwind
    Components --> ShadCN
    
    style Pages fill:#bbdefb
    style Components fill:#c8e6c9
    style SharedComp fill:#ffe0b2
    style Services fill:#f0f4c3
    style Styling fill:#f8bbd0
```

---

## Stack Tecnológico (Mermaid)

```mermaid
graph LR
    subgraph Frontend_Stack["Frontend Stack"]
        React["React 18.x"]
        TS["TypeScript 5.x"]
        Vite["Vite 5.x"]
        TW["Tailwind 3.x"]
        ShadCN["shadcn/ui"]
        Axios["Axios 1.x"]
        Vitest["Vitest 4.x"]
        RTL["React Testing Lib"]
    end

    subgraph Backend_Stack["Backend Stack"]
        Node["Node.js 20.x"]
        Express["Express 5.x"]
        Mongoose["Mongoose 8.x"]
        Jest["Jest 30.x"]
        Supertest["Supertest 7.x"]
        k6["k6"]
    end

    subgraph Database_Stack["Database"]
        MongoDB["MongoDB Atlas"]
        Collections["Collections:<br/>users, products,<br/>categories, carts"]
    end

    subgraph DevOps_Stack["DevOps/CI-CD"]
        GH["GitHub"]
        GHA["GitHub Actions"]
        Render["Render"]
    end

    React --> TS
    TS --> Vite
    Vite --> TW
    TW --> ShadCN
    React --> Axios
    React --> Vitest
    Vitest --> RTL

    Node --> Express
    Express --> Mongoose
    Express --> Jest
    Jest --> Supertest
    Express --> k6

    Mongoose --> MongoDB
    MongoDB --> Collections

    GH --> GHA
    GHA --> Render
    
    style Frontend_Stack fill:#bbdefb
    style Backend_Stack fill:#c8e6c9
    style Database_Stack fill:#ffe0b2
    style DevOps_Stack fill:#f0f4c3
```

---

## Matriz de Responsabilidades (RACI)

| Componente | Kleber | Cesar | Carlos | Dennison |
|---|---|---|---|---|
| **Autenticación/Security** | **A** | R | - | - |
| **API REST Backend** | - | **A** | R | - |
| **Quality Scoring Engine** | - | **A** | R | - |
| **Testing Backend** | - | R | **A** | - |
| **Frontend UI** | - | - | - | **A** |
| **Testing Frontend** | - | - | R | **A** |
| **CI/CD Pipeline** | - | **A** | R | - |
| **Despliegue Render** | - | **A** | R | - |

**Leyenda:**
- **A** = Accountable (responsable principal)
- **R** = Responsible (ejecuta)
- **-** = No involucrado

---

## URLs y Endpoints Clave

```mermaid
graph TB
    Client["Cliente<br/>navegador"]
    
    subgraph API_Routes["🔐 Rutas Protegidas (BasicAuth)"]
        Users["GET/POST /api/users<br/>PUT /api/users/:id<br/>DELETE /api/users/:id"]
        Products["GET/POST /api/products<br/>PUT /api/products/:id"]
        Categories["GET/POST /api/categories"]
        Carts["GET/POST /api/shopping-carts<br/>PUT /api/shopping-carts/:id"]
        Quality["GET /api/quality/score<br/>🌟 Endpoint principal"]
    end

    Client -->|HTTPS + BasicAuth| Users
    Client -->|HTTPS + BasicAuth| Products
    Client -->|HTTPS + BasicAuth| Categories
    Client -->|HTTPS + BasicAuth| Carts
    Client -->|HTTPS + BasicAuth| Quality

    Users -->|respuesta JSON| Client
    Products -->|respuesta JSON| Client
    Categories -->|respuesta JSON| Client
    Carts -->|respuesta JSON| Client
    Quality -->|{"overallScore": 88, ...}| Client

    style API_Routes fill:#fff9c4
```

---

## Resumen de Flujos Principales

### 1️⃣ Flujo: Usuario Agrega Producto al Carrito

```
Usuario → Frontend (React) → Axios + BasicAuth → Backend (Express)
  ↓                                                    ↓
Visualiza                                    CartController
  ↓                                                    ↓
LocalStorage                                CartService (lógica)
  ↓                                                    ↓
sincroniza ←─────────────────────────────── MongoDB (actualiza)
```

### 2️⃣ Flujo: Pipeline CI/CD Genera Quality Score

```
git push main → GitHub → GitHub Actions (cd.yml)
  ↓
Build Backend + Frontend
  ↓
Ejecuta Tests (cobertura)
  ↓
Consulta QualityScoringEngine → McCall Factors
  ↓
Genera quality-score-report.json
  ↓
Deploy Hooks a Render → Backend + Frontend vivo
  ↓
Guarda artifact (evidencia 90 días)
```

### 3️⃣ Flujo: Consultar Quality Score

```
curl -u frozono:trabatrix2 \
  https://barroco-api.onrender.com/api/quality/score
  ↓
BasicAuth Middleware (valida)
  ↓
QualityController
  ↓
QualityScoringEngine
  ↓
Calcula: (90×0.3) + (82×0.3) + (84×0.2) + (100×0.2) = 88
  ↓
JSON Response: {success: true, data: {overallScore: 88}, ...}
```

---

## 📚 Referencias de Arquitectura

- **Patrón MVC**: Separación de Controllers, Services, Models
- **Capas**: Rutas → Auth → Controllers → Services → Modelos → BD
- **RESTful API**: CRUD operations con HTTP methods
- **CI/CD**: GitHub Actions automatizado
- **Quality Framework**: Modelo de McCall + Ciclo PDCA
- **Cloud**: Render para hosting (Render.com)
- **Testing Pyramid**: Unit tests (base) → Integration → E2E

