const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongod = null;

/**
 * Inicia el servidor MongoDB en memoria y conecta Mongoose.
 * No requiere variables de entorno ni credenciales externas.
 */
const connect = async () => {
  if (mongoose.connection.readyState !== 0) return; // ya conectado

  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  });
};

/**
 * Limpia todas las colecciones sin desconectar.
 * Útil para beforeEach / afterEach.
 */
const clearDatabase = async () => {
  if (mongoose.connection.readyState === 0) return;
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
};

/**
 * Limpia la BD, desconecta Mongoose y detiene el servidor en memoria.
 * Llamar en afterAll.
 */
const closeDatabase = async () => {
  if (mongoose.connection.readyState !== 0) {
    await clearDatabase();
    await mongoose.disconnect();
  }
  if (mongod) {
    await mongod.stop();
    mongod = null;
  }
};

module.exports = { connect, closeDatabase, clearDatabase };
