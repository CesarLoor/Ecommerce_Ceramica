/**
 * cleanup-test-data.js
 * Elimina de MongoDB todos los registros generados por las pruebas de carga K6.
 *
 * Uso:
 *   node scripts/cleanup-test-data.js
 */

require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌  MONGODB_URI no está definido en el archivo .env");
  process.exit(1);
}

// ── Schemas mínimos para la limpieza ──────────────────────────────────────────
const Product = mongoose.model(
  "Product",
  new mongoose.Schema(
    { idProduct: String, name: String },
    { collection: "products" }
  )
);

const Category = mongoose.model(
  "Category",
  new mongoose.Schema(
    { categoryID: Number, name: String },
    { collection: "categories" }
  )
);

// ── Patrones que identifican datos de prueba ───────────────────────────────────
// Productos: name = "K6 Load Test Product"  o  idProduct empieza con "LOAD-TEST-"
// Categorías: name empieza con "K6 Category"
const PRODUCT_FILTER = {
  $or: [
    { name: "K6 Load Test Product" },
    { idProduct: { $regex: /^LOAD-TEST-/i } },
  ],
};

const CATEGORY_FILTER = {
  $or: [
    { name: { $regex: /^K6 Category/i } },
    { name: { $regex: /^Categoria Test/i } },
  ],
};

async function main() {
  console.log("🔌  Conectando a MongoDB…");
  await mongoose.connect(MONGODB_URI);
  console.log("✅  Conexión establecida.\n");

  // ── Productos ────────────────────────────────────────────────────────────────
  const productCount = await Product.countDocuments(PRODUCT_FILTER);
  console.log(`🗑️   Productos de prueba encontrados: ${productCount}`);

  if (productCount > 0) {
    const productResult = await Product.deleteMany(PRODUCT_FILTER);
    console.log(`✅  Productos eliminados: ${productResult.deletedCount}`);
  } else {
    console.log("ℹ️   No hay productos de prueba que eliminar.");
  }

  // ── Categorías ───────────────────────────────────────────────────────────────
  const categoryCount = await Category.countDocuments(CATEGORY_FILTER);
  console.log(`\n🗑️   Categorías de prueba encontradas: ${categoryCount}`);

  if (categoryCount > 0) {
    const categoryResult = await Category.deleteMany(CATEGORY_FILTER);
    console.log(`✅  Categorías eliminadas: ${categoryResult.deletedCount}`);
  } else {
    console.log("ℹ️   No hay categorías de prueba que eliminar.");
  }

  console.log("\n🎉  Limpieza completada exitosamente.");
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error("❌  Error durante la limpieza:", err.message);
  mongoose.disconnect();
  process.exit(1);
});
