backend@1.0.0 test:coverage
> jest --coverage

  console.log
    [dotenv@17.2.3] injecting env (0) from .env -- tip: 🗂️ backup and recover secrets: https://dotenvx.com/ops

      at _log (node_modules/dotenv/lib/main.js:142:11)

FAIL test/shoppingCart.test.js (190.809 s)
  ShoppingCart API (BD real)
    ✕ GET /api/cart debe devolver lista vacía (10003 ms)
    ✕ POST /api/cart debe crear un carrito (9999 ms)
    ✕ POST /api/cart debe fallar si falta el cliente (10000 ms)
    ✕ GET /api/cart después de crear un carrito debe devolverlo (10001 ms)
    ✕ POST /api/cart permite múltiples carritos (10000 ms)
    ✕ POST /api/cart debe fallar si falta el total (10003 ms)
    ✕ GET a una ruta inexistente devuelve 404 (10001 ms)
    ✕ PUT /api/cart/:id actualiza el carrito (10001 ms)
    ✕ DELETE /api/cart/:id elimina el carrito (10000 ms)
    ✕ GET /api/cart/:id debe devolver un carrito específico (10002 ms)
    ✕ GET /api/cart/:id debe devolver 404 si no existe (10001 ms)
    ✕ PUT /api/cart/:id debe devolver 404 si no existe (10001 ms)
    ✕ DELETE /api/cart/:id debe devolver 404 si no existe (9999 ms)
    ✕ POST /api/cart debe crear carrito con múltiples productos (10002 ms)
    ✕ PUT /api/cart/:id debe actualizar productos del carrito (10001 ms)
    ✕ GET /api/cart/customer/:customerId debe devolver carrito por cliente (10001 ms)
    ✕ GET /api/cart/customer/:customerId debe devolver 404 si no existe (10001 ms)
    ✕ POST /api/cart debe crear carrito con total 0 (10002 ms)
    ✕ PUT /api/cart/:id debe actualizar solo el total (10001 ms)

  ● ShoppingCart API (BD real) › GET /api/cart debe devolver lista vacía

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › GET /api/cart debe devolver lista vacía

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › POST /api/cart debe crear un carrito

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › POST /api/cart debe crear un carrito

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › POST /api/cart debe fallar si falta el cliente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › POST /api/cart debe fallar si falta el cliente

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › GET /api/cart después de crear un carrito debe devolverlo

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › GET /api/cart después de crear un carrito debe devolverlo

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › POST /api/cart permite múltiples carritos

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › POST /api/cart permite múltiples carritos

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › POST /api/cart debe fallar si falta el total

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › POST /api/cart debe fallar si falta el total

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › GET a una ruta inexistente devuelve 404

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › GET a una ruta inexistente devuelve 404

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › PUT /api/cart/:id actualiza el carrito

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › PUT /api/cart/:id actualiza el carrito

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › DELETE /api/cart/:id elimina el carrito

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › DELETE /api/cart/:id elimina el carrito

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › GET /api/cart/:id debe devolver un carrito específico

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › GET /api/cart/:id debe devolver un carrito específico

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › GET /api/cart/:id debe devolver 404 si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › GET /api/cart/:id debe devolver 404 si no existe

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › PUT /api/cart/:id debe devolver 404 si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › PUT /api/cart/:id debe devolver 404 si no existe

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › DELETE /api/cart/:id debe devolver 404 si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › DELETE /api/cart/:id debe devolver 404 si no existe

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › POST /api/cart debe crear carrito con múltiples productos

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › POST /api/cart debe crear carrito con múltiples productos

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › PUT /api/cart/:id debe actualizar productos del carrito

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › PUT /api/cart/:id debe actualizar productos del carrito

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › GET /api/cart/customer/:customerId debe devolver carrito por cliente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › GET /api/cart/customer/:customerId debe devolver carrito por cliente

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › GET /api/cart/customer/:customerId debe devolver 404 si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › GET /api/cart/customer/:customerId debe devolver 404 si no existe

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › POST /api/cart debe crear carrito con total 0

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › POST /api/cart debe crear carrito con total 0

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCart API (BD real) › PUT /api/cart/:id debe actualizar solo el total

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCart.test.js:16:21)

  ● ShoppingCart API (BD real) › PUT /api/cart/:id debe actualizar solo el total

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  console.log
    [dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  load multiple .env files with { path: ['.env.local', '.env'] }

      at _log (node_modules/dotenv/lib/main.js:142:11)

FAIL test/product.test.js (170.362 s)
  Product API (BD real)
    ✕ GET /api/products/productsAvailable debe retornar productos disponibles (10002 ms)
    ✕ GET /api/products/productsDiscounted debe retornar productos con descuento (10000 ms)
    ✕ POST /api/products/products/P020/purchase debe realizar compra exitosa (10000 ms)
    ✕ GET /api/products/ debe retornar todos los productos (9999 ms)
    ✕ GET /api/products/:id debe retornar un producto existente (10001 ms)
    ✕ GET /api/products/:id debe retornar 404 si el producto no existe (10000 ms)
    ✕ POST /api/products/ debe crear un producto (10001 ms)
    ✕ PUT /api/products/:id debe actualizar un producto (10000 ms)
    ✕ DELETE /api/products/:id debe eliminar un producto (10000 ms)
    ✕ DELETE /api/products/:id debe retornar 404 si no existe (9999 ms)
    ✕ PUT /api/products/:id debe retornar 404 si no existe (10001 ms)
    ✕ POST /api/products/ debe manejar errores de validación (9998 ms)
    ✕ POST /api/products/products/P999/purchase debe manejar cantidad inválida (10000 ms)
    ✕ POST /api/products/products/P100/purchase debe manejar stock insuficiente (9999 ms)
    ✕ GET /api/products/productsAvailable debe manejar array vacío (10001 ms)
    ✕ GET /api/products/productsDiscounted debe manejar array vacío (10000 ms)
    ✕ GET /api/products/ debe devolver array vacío si no hay productos (10001 ms)

  ● Product API (BD real) › GET /api/products/productsAvailable debe retornar productos disponibles

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › GET /api/products/productsAvailable debe retornar productos disponibles

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › GET /api/products/productsDiscounted debe retornar productos con descuento

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › GET /api/products/productsDiscounted debe retornar productos con descuento

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › POST /api/products/products/P020/purchase debe realizar compra exitosa

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › POST /api/products/products/P020/purchase debe realizar compra exitosa

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › GET /api/products/ debe retornar todos los productos

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › GET /api/products/ debe retornar todos los productos

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › GET /api/products/:id debe retornar un producto existente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › GET /api/products/:id debe retornar un producto existente

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › GET /api/products/:id debe retornar 404 si el producto no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › GET /api/products/:id debe retornar 404 si el producto no existe

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › POST /api/products/ debe crear un producto

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › POST /api/products/ debe crear un producto

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › PUT /api/products/:id debe actualizar un producto

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › PUT /api/products/:id debe actualizar un producto

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › DELETE /api/products/:id debe eliminar un producto

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › DELETE /api/products/:id debe eliminar un producto

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › DELETE /api/products/:id debe retornar 404 si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › DELETE /api/products/:id debe retornar 404 si no existe

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › PUT /api/products/:id debe retornar 404 si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › PUT /api/products/:id debe retornar 404 si no existe

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › POST /api/products/ debe manejar errores de validación

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › POST /api/products/ debe manejar errores de validación

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › POST /api/products/products/P999/purchase debe manejar cantidad inválida

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › POST /api/products/products/P999/purchase debe manejar cantidad inválida

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › POST /api/products/products/P100/purchase debe manejar stock insuficiente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › POST /api/products/products/P100/purchase debe manejar stock insuficiente

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › GET /api/products/productsAvailable debe manejar array vacío

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › GET /api/products/productsAvailable debe manejar array vacío

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › GET /api/products/productsDiscounted debe manejar array vacío

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › GET /api/products/productsDiscounted debe manejar array vacío

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Product API (BD real) › GET /api/products/ debe devolver array vacío si no hay productos

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/product.test.js:16:21)

  ● Product API (BD real) › GET /api/products/ debe devolver array vacío si no hay productos

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  console.log
    [dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  load multiple .env files with { path: ['.env.local', '.env'] }

      at _log (node_modules/dotenv/lib/main.js:142:11)

FAIL test/productService.test.js (170.195 s)
  ProductService (BD real)
    ✕ getAllProducts debe retornar todos los productos (10000 ms)
    ✕ getProductById debe retornar un producto existente (10000 ms)
    ✕ getProductById debe lanzar error si no existe (10000 ms)
    ✕ createProduct debe crear y guardar en la BD (10000 ms)
    ✕ updateProduct debe actualizar en la BD (10001 ms)
    ✕ updateProduct debe lanzar error si no existe (10001 ms)
    ✕ deleteProduct debe eliminar de la BD (10001 ms)
    ✕ deleteProduct debe lanzar error si no existe (10001 ms)
    ✕ getAvailableProducts debe retornar solo productos con stock > 0 (10000 ms)
    ✕ getCustomDiscountedProducts debe retornar productos custom con 10% descuento (10001 ms)
    ✕ getCustomDiscountedProducts retorna array vacío si no hay custom (10001 ms)
    ✕ purchaseProduct debe reducir stock y retornar info de compra (10002 ms)
    ✕ purchaseProduct debe lanzar error si cantidad es 0 (10001 ms)
    ✕ purchaseProduct debe lanzar error si cantidad es negativa (10002 ms)
    ✕ purchaseProduct debe lanzar error si cantidad es null (10000 ms)
    ✕ purchaseProduct debe lanzar error si producto no existe (10001 ms)
    ✕ purchaseProduct debe lanzar error si stock insuficiente (10000 ms)

  ● ProductService (BD real) › getAllProducts debe retornar todos los productos

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › getAllProducts debe retornar todos los productos

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › getProductById debe retornar un producto existente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › getProductById debe retornar un producto existente

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › getProductById debe lanzar error si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › getProductById debe lanzar error si no existe

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › createProduct debe crear y guardar en la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › createProduct debe crear y guardar en la BD

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › updateProduct debe actualizar en la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › updateProduct debe actualizar en la BD

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › updateProduct debe lanzar error si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › updateProduct debe lanzar error si no existe

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › deleteProduct debe eliminar de la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › deleteProduct debe eliminar de la BD

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › deleteProduct debe lanzar error si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › deleteProduct debe lanzar error si no existe

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › getAvailableProducts debe retornar solo productos con stock > 0

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › getAvailableProducts debe retornar solo productos con stock > 0

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › getCustomDiscountedProducts debe retornar productos custom con 10% descuento

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › getCustomDiscountedProducts debe retornar productos custom con 10% descuento

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › getCustomDiscountedProducts retorna array vacío si no hay custom

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › getCustomDiscountedProducts retorna array vacío si no hay custom

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › purchaseProduct debe reducir stock y retornar info de compra

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › purchaseProduct debe reducir stock y retornar info de compra

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › purchaseProduct debe lanzar error si cantidad es 0

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › purchaseProduct debe lanzar error si cantidad es 0

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › purchaseProduct debe lanzar error si cantidad es negativa

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › purchaseProduct debe lanzar error si cantidad es negativa

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › purchaseProduct debe lanzar error si cantidad es null

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › purchaseProduct debe lanzar error si cantidad es null

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › purchaseProduct debe lanzar error si producto no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › purchaseProduct debe lanzar error si producto no existe

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ProductService (BD real) › purchaseProduct debe lanzar error si stock insuficiente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/productService.test.js:7:21)

  ● ProductService (BD real) › purchaseProduct debe lanzar error si stock insuficiente

    MongooseError: Operation `products.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  console.log
    [dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  write to custom object with { processEnv: myObject }

      at _log (node_modules/dotenv/lib/main.js:142:11)

FAIL test/category.test.js (120.276 s)
  Category API (BD real)
    ✕ GET /api/categories debe devolver lista vacía (10001 ms)
    ✕ POST /api/categories debe crear una categoría (10001 ms)
    ✕ POST /api/categories debe fallar si falta el nombre (10001 ms)
    ✕ GET /api/categories después de crear debe devolver las categorías (10001 ms)
    ✕ GET /api/categories permite múltiples categorías (10002 ms)
    ✕ GET /api/categories/:id debe devolver una categoría específica (10001 ms)
    ✕ GET /api/categories/:id debe devolver 404 si no existe (10002 ms)
    ✕ PUT /api/categories/:id actualiza la categoría (10000 ms)
    ✕ PUT /api/categories/:id debe devolver 404 si no existe (10000 ms)
    ✕ DELETE /api/categories/:id elimina la categoría (10000 ms)
    ✕ DELETE /api/categories/:id debe devolver 404 si no existe (10001 ms)
    ✕ GET a una ruta inexistente devuelve 404 (10001 ms)

  ● Category API (BD real) › GET /api/categories debe devolver lista vacía

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › GET /api/categories debe devolver lista vacía

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Category API (BD real) › POST /api/categories debe crear una categoría

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › POST /api/categories debe crear una categoría

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Category API (BD real) › POST /api/categories debe fallar si falta el nombre

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › POST /api/categories debe fallar si falta el nombre

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Category API (BD real) › GET /api/categories después de crear debe devolver las categorías

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › GET /api/categories después de crear debe devolver las categorías

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Category API (BD real) › GET /api/categories permite múltiples categorías

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › GET /api/categories permite múltiples categorías

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Category API (BD real) › GET /api/categories/:id debe devolver una categoría específica

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › GET /api/categories/:id debe devolver una categoría específica

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Category API (BD real) › GET /api/categories/:id debe devolver 404 si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › GET /api/categories/:id debe devolver 404 si no existe

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Category API (BD real) › PUT /api/categories/:id actualiza la categoría

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › PUT /api/categories/:id actualiza la categoría

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Category API (BD real) › PUT /api/categories/:id debe devolver 404 si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › PUT /api/categories/:id debe devolver 404 si no existe

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Category API (BD real) › DELETE /api/categories/:id elimina la categoría

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › DELETE /api/categories/:id elimina la categoría

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Category API (BD real) › DELETE /api/categories/:id debe devolver 404 si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › DELETE /api/categories/:id debe devolver 404 si no existe

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Category API (BD real) › GET a una ruta inexistente devuelve 404

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/category.test.js:16:21)

  ● Category API (BD real) › GET a una ruta inexistente devuelve 404

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  console.log
    [dotenv@17.2.3] injecting env (0) from .env -- tip: 🔐 prevent committing .env to code: https://dotenvx.com/precommit

      at _log (node_modules/dotenv/lib/main.js:142:11)

FAIL test/customer.test.js (100.295 s)
  Customer API (BD real)
    ✕ GET /barroco/customers debe retornar todos los clientes (10001 ms)
    ✕ POST /barroco/customers debe crear un cliente (10000 ms)
    ✕ PUT /barroco/customers/:id debe actualizar un cliente (10001 ms)
    ✕ DELETE /barroco/customers/:id debe eliminar un cliente (10000 ms)
    ✕ GET /barroco/customers/:id debe retornar un cliente específico (10000 ms)
    ✕ GET /barroco/customers/:id debe retornar 404 si no existe (10000 ms)
    ✕ PUT /barroco/customers/:id debe manejar error si no existe (10000 ms)
    ✕ DELETE /barroco/customers/:id debe manejar error si no existe (10001 ms)
    ✕ POST /barroco/customers debe manejar errores de validación (10001 ms)
    ✕ GET /barroco/customers debe devolver array vacío si no hay clientes (10001 ms)

  ● Customer API (BD real) › GET /barroco/customers debe retornar todos los clientes

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customer.test.js:16:21)

  ● Customer API (BD real) › GET /barroco/customers debe retornar todos los clientes

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer API (BD real) › POST /barroco/customers debe crear un cliente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customer.test.js:16:21)

  ● Customer API (BD real) › POST /barroco/customers debe crear un cliente

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer API (BD real) › PUT /barroco/customers/:id debe actualizar un cliente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customer.test.js:16:21)

  ● Customer API (BD real) › PUT /barroco/customers/:id debe actualizar un cliente

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer API (BD real) › DELETE /barroco/customers/:id debe eliminar un cliente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customer.test.js:16:21)

  ● Customer API (BD real) › DELETE /barroco/customers/:id debe eliminar un cliente

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer API (BD real) › GET /barroco/customers/:id debe retornar un cliente específico

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customer.test.js:16:21)

  ● Customer API (BD real) › GET /barroco/customers/:id debe retornar un cliente específico

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer API (BD real) › GET /barroco/customers/:id debe retornar 404 si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customer.test.js:16:21)

  ● Customer API (BD real) › GET /barroco/customers/:id debe retornar 404 si no existe

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer API (BD real) › PUT /barroco/customers/:id debe manejar error si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customer.test.js:16:21)

  ● Customer API (BD real) › PUT /barroco/customers/:id debe manejar error si no existe

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer API (BD real) › DELETE /barroco/customers/:id debe manejar error si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customer.test.js:16:21)

  ● Customer API (BD real) › DELETE /barroco/customers/:id debe manejar error si no existe

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer API (BD real) › POST /barroco/customers debe manejar errores de validación

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customer.test.js:16:21)

  ● Customer API (BD real) › POST /barroco/customers debe manejar errores de validación

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer API (BD real) › GET /barroco/customers debe devolver array vacío si no hay clientes

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customer.test.js:16:21)

  ● Customer API (BD real) › GET /barroco/customers debe devolver array vacío si no hay clientes

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  console.log
    [dotenv@17.2.3] injecting env (0) from .env -- tip: 🔐 encrypt with Dotenvx: https://dotenvx.com

      at _log (node_modules/dotenv/lib/main.js:142:11)

FAIL test/shoppingCartService.test.js (100.202 s)
  ShoppingCartService (BD real)
    ✕ createShoppingCart debe crear y guardar un carrito en la BD (10002 ms)
    ✕ getAllShoppingCarts debe retornar todos los carritos (10001 ms)
    ✕ getShoppingCartById debe retornar un carrito existente (10001 ms)
    ✕ getShoppingCartById debe retornar null si no existe (10000 ms)
    ✕ updateShoppingCart debe actualizar en la BD (10001 ms)
    ✕ updateShoppingCart debe retornar null si no existe (10001 ms)
    ✕ deleteShoppingCart debe eliminar de la BD (10002 ms)
    ✕ deleteShoppingCart debe retornar null si no existe (10001 ms)
    ✕ getShoppingCartByCustomer debe retornar carrito por cliente (10002 ms)
    ✕ getShoppingCartByCustomer debe retornar null si no existe (10001 ms)

  ● ShoppingCartService (BD real) › createShoppingCart debe crear y guardar un carrito en la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCartService.test.js:7:21)

  ● ShoppingCartService (BD real) › createShoppingCart debe crear y guardar un carrito en la BD

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCartService (BD real) › getAllShoppingCarts debe retornar todos los carritos

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCartService.test.js:7:21)

  ● ShoppingCartService (BD real) › getAllShoppingCarts debe retornar todos los carritos

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCartService (BD real) › getShoppingCartById debe retornar un carrito existente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCartService.test.js:7:21)

  ● ShoppingCartService (BD real) › getShoppingCartById debe retornar un carrito existente

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCartService (BD real) › getShoppingCartById debe retornar null si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCartService.test.js:7:21)

  ● ShoppingCartService (BD real) › getShoppingCartById debe retornar null si no existe

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCartService (BD real) › updateShoppingCart debe actualizar en la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCartService.test.js:7:21)

  ● ShoppingCartService (BD real) › updateShoppingCart debe actualizar en la BD

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCartService (BD real) › updateShoppingCart debe retornar null si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCartService.test.js:7:21)

  ● ShoppingCartService (BD real) › updateShoppingCart debe retornar null si no existe

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCartService (BD real) › deleteShoppingCart debe eliminar de la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCartService.test.js:7:21)

  ● ShoppingCartService (BD real) › deleteShoppingCart debe eliminar de la BD

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCartService (BD real) › deleteShoppingCart debe retornar null si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCartService.test.js:7:21)

  ● ShoppingCartService (BD real) › deleteShoppingCart debe retornar null si no existe

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCartService (BD real) › getShoppingCartByCustomer debe retornar carrito por cliente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCartService.test.js:7:21)

  ● ShoppingCartService (BD real) › getShoppingCartByCustomer debe retornar carrito por cliente

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● ShoppingCartService (BD real) › getShoppingCartByCustomer debe retornar null si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/shoppingCartService.test.js:7:21)

  ● ShoppingCartService (BD real) › getShoppingCartByCustomer debe retornar null si no existe

    MongooseError: Operation `counters.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  console.log
    [dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  suppress all logs with { quiet: true }

      at _log (node_modules/dotenv/lib/main.js:142:11)

FAIL test/customerModel.test.js (100.174 s)
  Customer Model (BD real)
    ✕ debe tener los campos requeridos en el schema (10001 ms)
    ✕ el campo role debe tener valor por defecto 'customer' (10000 ms)
    ✕ shippingAddress no debe ser requerido (10001 ms)
    ✕ debe hashear la contraseña al guardar en la BD (10000 ms)
    ✕ no debe re-hashear la contraseña si no fue modificada (10001 ms)
    ✕ comparePassword debe retornar true para contraseña correcta (10000 ms)
    ✕ comparePassword debe retornar false para contraseña incorrecta (10001 ms)
    ✕ la colección debe ser 'customers' (10000 ms)
    ✕ debe fallar si falta un campo requerido (10001 ms)
    ✕ el campo role se asigna como 'customer' por defecto al crear (10000 ms)

  ● Customer Model (BD real) › debe tener los campos requeridos en el schema

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerModel.test.js:7:21)

  ● Customer Model (BD real) › debe tener los campos requeridos en el schema

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer Model (BD real) › el campo role debe tener valor por defecto 'customer'

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerModel.test.js:7:21)

  ● Customer Model (BD real) › el campo role debe tener valor por defecto 'customer'

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer Model (BD real) › shippingAddress no debe ser requerido

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerModel.test.js:7:21)

  ● Customer Model (BD real) › shippingAddress no debe ser requerido

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer Model (BD real) › debe hashear la contraseña al guardar en la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerModel.test.js:7:21)

  ● Customer Model (BD real) › debe hashear la contraseña al guardar en la BD

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer Model (BD real) › no debe re-hashear la contraseña si no fue modificada

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerModel.test.js:7:21)

  ● Customer Model (BD real) › no debe re-hashear la contraseña si no fue modificada

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer Model (BD real) › comparePassword debe retornar true para contraseña correcta

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerModel.test.js:7:21)

  ● Customer Model (BD real) › comparePassword debe retornar true para contraseña correcta

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer Model (BD real) › comparePassword debe retornar false para contraseña incorrecta

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerModel.test.js:7:21)

  ● Customer Model (BD real) › comparePassword debe retornar false para contraseña incorrecta

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer Model (BD real) › la colección debe ser 'customers'

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerModel.test.js:7:21)

  ● Customer Model (BD real) › la colección debe ser 'customers'

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer Model (BD real) › debe fallar si falta un campo requerido

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerModel.test.js:7:21)

  ● Customer Model (BD real) › debe fallar si falta un campo requerido

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● Customer Model (BD real) › el campo role se asigna como 'customer' por defecto al crear

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerModel.test.js:7:21)

  ● Customer Model (BD real) › el campo role se asigna como 'customer' por defecto al crear

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  console.log
    [dotenv@17.2.3] injecting env (0) from .env -- tip: 📡 add observability to secrets: https://dotenvx.com/ops

      at _log (node_modules/dotenv/lib/main.js:142:11)

FAIL test/customerService.test.js (80.167 s)
  CustomerService (BD real)
    ✕ findAll debe retornar todos los clientes (10002 ms)
    ✕ findById debe retornar un cliente existente (9999 ms)
    ✕ findById debe lanzar error si no existe (10001 ms)
    ✕ create debe crear y guardar un cliente en la BD (10000 ms)
    ✕ update debe actualizar un cliente en la BD (10001 ms)
    ✕ update debe lanzar error si no existe (10000 ms)
    ✕ remove debe eliminar un cliente de la BD (10001 ms)
    ✕ remove debe lanzar error si no existe (10000 ms)

  ● CustomerService (BD real) › findAll debe retornar todos los clientes

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerService.test.js:7:21)

  ● CustomerService (BD real) › findAll debe retornar todos los clientes

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CustomerService (BD real) › findById debe retornar un cliente existente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerService.test.js:7:21)

  ● CustomerService (BD real) › findById debe retornar un cliente existente

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CustomerService (BD real) › findById debe lanzar error si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerService.test.js:7:21)

  ● CustomerService (BD real) › findById debe lanzar error si no existe

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CustomerService (BD real) › create debe crear y guardar un cliente en la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerService.test.js:7:21)

  ● CustomerService (BD real) › create debe crear y guardar un cliente en la BD

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CustomerService (BD real) › update debe actualizar un cliente en la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerService.test.js:7:21)

  ● CustomerService (BD real) › update debe actualizar un cliente en la BD

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CustomerService (BD real) › update debe lanzar error si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerService.test.js:7:21)

  ● CustomerService (BD real) › update debe lanzar error si no existe

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CustomerService (BD real) › remove debe eliminar un cliente de la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerService.test.js:7:21)

  ● CustomerService (BD real) › remove debe eliminar un cliente de la BD

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CustomerService (BD real) › remove debe lanzar error si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/customerService.test.js:7:21)

  ● CustomerService (BD real) › remove debe lanzar error si no existe

    MongooseError: Operation `customers.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  console.log
    [dotenv@17.2.3] injecting env (0) from .env -- tip: 🗂️ backup and recover secrets: https://dotenvx.com/ops

      at _log (node_modules/dotenv/lib/main.js:142:11)

FAIL test/categoryService.test.js (90.18 s)
  CategoryService (BD real)
    ✕ getAllCategories debe retornar todas las categorías (10001 ms)
    ✕ getAllCategories debe retornar array vacío si no hay categorías (10001 ms)
    ✕ getCategoryById debe retornar una categoría existente (10001 ms)
    ✕ getCategoryById debe lanzar error si no existe (9999 ms)
    ✕ createCategory debe crear y guardar en la BD (10000 ms)
    ✕ updateCategory debe actualizar en la BD (10000 ms)
    ✕ updateCategory debe lanzar error si no existe (10000 ms)
    ✕ deleteCategory debe eliminar de la BD (10002 ms)
    ✕ deleteCategory debe lanzar error si no existe (10001 ms)

  ● CategoryService (BD real) › getAllCategories debe retornar todas las categorías

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/categoryService.test.js:7:21)

  ● CategoryService (BD real) › getAllCategories debe retornar todas las categorías

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CategoryService (BD real) › getAllCategories debe retornar array vacío si no hay categorías

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/categoryService.test.js:7:21)

  ● CategoryService (BD real) › getAllCategories debe retornar array vacío si no hay categorías

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CategoryService (BD real) › getCategoryById debe retornar una categoría existente

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/categoryService.test.js:7:21)

  ● CategoryService (BD real) › getCategoryById debe retornar una categoría existente

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CategoryService (BD real) › getCategoryById debe lanzar error si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/categoryService.test.js:7:21)

  ● CategoryService (BD real) › getCategoryById debe lanzar error si no existe

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CategoryService (BD real) › createCategory debe crear y guardar en la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/categoryService.test.js:7:21)

  ● CategoryService (BD real) › createCategory debe crear y guardar en la BD

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CategoryService (BD real) › updateCategory debe actualizar en la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/categoryService.test.js:7:21)

  ● CategoryService (BD real) › updateCategory debe actualizar en la BD

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CategoryService (BD real) › updateCategory debe lanzar error si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/categoryService.test.js:7:21)

  ● CategoryService (BD real) › updateCategory debe lanzar error si no existe

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CategoryService (BD real) › deleteCategory debe eliminar de la BD

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/categoryService.test.js:7:21)

  ● CategoryService (BD real) › deleteCategory debe eliminar de la BD

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

  ● CategoryService (BD real) › deleteCategory debe lanzar error si no existe

    MongoParseError: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"

       8 | const connect = async () => {
       9 |   if (mongoose.connection.readyState === 0) {
    > 10 |     await mongoose.connect(TEST_URI, {
         |                    ^
      11 |       serverSelectionTimeoutMS: 10000,
      12 |       connectTimeoutMS: 10000,
      13 |     });

      at new ConnectionString (node_modules/mongodb-connection-string-url/src/index.ts:133:13)
      at parseOptions (node_modules/mongodb/src/connection_string.ts:255:15)
      at new MongoClient (node_modules/mongodb/src/mongo_client.ts:443:32)
      at NativeConnection.createClient (node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:343:14)
      at NativeConnection.openUri (node_modules/mongoose/lib/connection.js:1075:34)
      at Mongoose.connect (node_modules/mongoose/lib/mongoose.js:450:15)
      at Object.connect (test/dbHandler.js:10:20)
      at Object.connect (test/categoryService.test.js:7:21)

  ● CategoryService (BD real) › deleteCategory debe lanzar error si no existe

    MongooseError: Operation `categories.deleteMany()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:187:23)

PASS test/errorHandler.test.js
  errorHandler Middleware
    ✓ debe retornar 500 por defecto cuando statusCode es 200 (6 ms)
    ✓ debe respetar el statusCode si ya fue establecido y no es 200
    ✓ debe incluir stack en modo development (1 ms)
    ✓ no debe incluir stack en modo producción (1 ms)
    ✓ debe usar mensaje por defecto si el error no tiene mensaje (1 ms)
    ✓ debe loguear el error en consola (2 ms)

  console.log
    [dotenv@17.2.3] injecting env (0) from .env -- tip: ⚙️  override existing env vars with { override: true }

      at _log (node_modules/dotenv/lib/main.js:142:11)

PASS test/basicAuth.test.js
  basicAuth Middleware
    ✓ debe llamar next() si las credenciales son correctas (2 ms)
    ✓ debe retornar 401 si no hay header Authorization (1 ms)
    ✓ debe retornar 401 si las credenciales son incorrectas
    ✓ debe retornar 401 si el usuario es correcto pero la contraseña no (1 ms)
    ✓ debe retornar 401 si la contraseña es correcta pero el usuario no (1 ms)

----------------------------|---------|----------|---------|---------|-----------------------------------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                             
----------------------------|---------|----------|---------|---------|-----------------------------------------------
All files                   |   45.42 |    29.62 |    3.77 |   48.37 |                                               
 controllers                |   24.34 |        0 |       0 |   25.22 |                                               
  categoryController.js     |   23.07 |      100 |       0 |   23.07 | 4-8,13-17,22-26,31-35,40-44                   
  customerController.js     |    37.5 |        0 |       0 |    37.5 | 5-6,10-11,17-18,22-23,27-28                   
  productController.js      |   20.93 |      100 |       0 |   20.93 | 4-8,13-17,22-26,31-35,40-44,50-54,59-63,68-74 
  shoppingCartController.js |   23.33 |        0 |       0 |   26.92 | 5-9,14-15,19-21,25-27,31-33,37-40             
 middlewares                |     100 |      100 |     100 |     100 |                                               
  basicAuth.js              |     100 |      100 |     100 |     100 |                                               
  errorHandler.js           |     100 |      100 |     100 |     100 |                                               
 models                     |   70.37 |        0 |       0 |   73.07 |                                               
  category.js               |     100 |      100 |     100 |     100 |                                               
  customer.js               |   46.66 |        0 |       0 |      50 | 22-29,34                                      
  product.js                |     100 |      100 |     100 |     100 |                                               
  shoppingCart.js           |     100 |      100 |     100 |     100 |                                               
 routes                     |     100 |      100 |     100 |     100 |                                               
  categoryRoutes.js         |     100 |      100 |     100 |     100 |                                               
  customerRoutes.js         |     100 |      100 |     100 |     100 |                                               
  productRoutes.js          |     100 |      100 |     100 |     100 |                                               
  shoppingCartRoutes.js     |     100 |      100 |     100 |     100 |                                               
 services                   |   29.78 |        0 |       0 |   34.56 |                                               
  categoryService.js        |   28.57 |        0 |       0 |   35.29 | 6-8,12-13,17-19,23-25                         
  customerService.js        |      30 |        0 |       0 |      40 | 6-8,14-16,20-22                               
  productService.js         |   23.07 |        0 |       0 |   25.71 | 4,8-10,14-15,19-21,25-27,31,35-36,49-67       
  shoppingCartService.js    |      50 |      100 |       0 |      50 | 5-6,10,14,18,22,26                            
----------------------------|---------|----------|---------|---------|-----------------------------------------------
Test Suites: 9 failed, 2 passed, 11 total
Tests:       112 failed, 11 passed, 123 total
Snapshots:   0 total
Time:        1123.035 s
Ran all test suites.
Error: Process completed with exit code 1.