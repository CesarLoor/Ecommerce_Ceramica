// Backend/app.js - Modificar después de las rutas públicas

require("dotenv").config();
const express = require("express");
const basicAuth = require('./middlewares/basicAuth');
const connectDB = require("./config/db");
const cors = require('cors');

const app = express();

// CORS configuration
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173'
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`[CORS Debug] Petición bloqueada desde: ${origin}`);
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

connectDB();

app.use(cors(corsOptions));
app.use(express.json());

// ✅ RUTAS PÚBLICAS (GET - Solo lectura)
app.use("/barroco/products", require("./routes/productRoutes"));
app.use("/barroco/categories", require("./routes/categoryRoutes"));

// ✅ RUTAS PROTEGIDAS (POST, PUT, DELETE - Escritura)
app.use(basicAuth); // ← BasicAuth SOLO se aplica después de esto
app.use("/barroco/customers", require("./routes/customerRoutes"));
app.use("/api/cart", require("./routes/shoppingCartRoutes"));
app.use("/barroco/shoppingCart", require('./routes/shoppingCartRoutes'));

app.get("/", (req, res) => {
  res.send("API RESTful de Barroco funcionando correctamente");
});

app.use(require("./middlewares/errorHandler"));

module.exports = app;