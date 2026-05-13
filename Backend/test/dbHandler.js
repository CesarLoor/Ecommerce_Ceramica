const mongoose = require("mongoose");
const path = require("node:path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// Usa una BD separada para tests (Barroco_test) para no afectar producción
const base = process.env.MONGODB_URI;
if (!base) {
  throw new Error(
    "[dbHandler] La variable de entorno MONGODB_URI no está definida.\n" +
    "  • En local: asegúrate de tener el archivo Backend/.env\n" +
    "  • En CI: agrega el secret MONGODB_URI en GitHub → Settings → Secrets"
  );
}
const TEST_URI = base.replace("/Barroco", "/Barroco_test");

const connect = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(TEST_URI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });
  }
};

const closeDatabase = async () => {
  if (mongoose.connection.readyState !== 0) {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      await collections[key].deleteMany({});
    }
    await mongoose.disconnect();
  }
};

const clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
};

module.exports = { connect, closeDatabase, clearDatabase };
