Run npm run test:coverage

> vite_react_shadcn_ts@0.0.0 test:coverage
> vitest run --coverage


 RUN  v4.0.18 /home/runner/work/Ecommerce_Ceramica/Ecommerce_Ceramica/Frontend
      Coverage enabled with v8

stderr | src/components/AddToCartSection.test.tsx > AddToCartSection > debe renderizar el título de la sección
Warning: An update to AddToCartSection inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AddToCartSection (/home/runner/work/Ecommerce_Ceramica/Ecommerce_Ceramica/Frontend/src/components/AddToCartSection.tsx:17:71)

 ✓ src/components/AddToCartSection.test.tsx (5 tests) 135ms
 ✓ src/components/StockSection.test.tsx (5 tests) 351ms
 ✓ src/components/OrdersSection.test.tsx (5 tests) 201ms
 ✓ src/components/Layout.test.tsx (5 tests) 833ms
     ✓ renders navigation links  602ms
stderr | src/components/FilterSection.test.tsx > FilterSection > debe renderizar el input de búsqueda
Warning: An update to FilterSection inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at FilterSection (/home/runner/work/Ecommerce_Ceramica/Ecommerce_Ceramica/Frontend/src/components/FilterSection.tsx:15:71)

stderr | src/components/UsersSection.test.tsx > UsersSection Component > validates required fields in the form
El campo Nombre no está marcado como inválido
El campo Apellido no está marcado como inválido
 ✓ src/components/FilterSection.test.tsx (5 tests) 169ms
El campo Email no está marcado como inválido

 ❯ src/components/UsersSection.test.tsx (9 tests | 4 failed) 2546ms
     × renders users list correctly 1055ms
     ✓ toggles create user form 45ms
     × handles user creation successfully 48ms
     × handles user update 40ms
     ✓ handles user deletion 65ms
     ✓ shows error when user creation fails 81ms
     × shows error when user update fails 1037ms
     ✓ shows error when user deletion fails 67ms
     ✓ validates required fields in the form 105ms
stderr | src/components/RegisterProductSection.test.tsx > RegisterProductSection > debe renderizar el formulario de registro
Warning: An update to RegisterProductSection inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at RegisterProductSection (/home/runner/work/Ecommerce_Ceramica/Ecommerce_Ceramica/Frontend/src/components/RegisterProductSection.tsx:19:63)

stderr | src/components/RegisterProductSection.test.tsx > RegisterProductSection > debe llamar a productAPI.create al enviar formulario válido
Warning: An update to RegisterProductSection inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */
 ✓ src/lib/cart-store.test.ts (5 tests) 10ms

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at RegisterProductSection (/home/runner/work/Ecommerce_Ceramica/Ecommerce_Ceramica/Frontend/src/components/RegisterProductSection.tsx:19:63)

stderr | src/components/RegisterProductSection.test.tsx > RegisterProductSection > debe validar campos obligatorios
Warning: An update to RegisterProductSection inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at RegisterProductSection (/home/runner/work/Ecommerce_Ceramica/Ecommerce_Ceramica/Frontend/src/components/RegisterProductSection.tsx:19:63)

 ✓ src/components/RegisterProductSection.test.tsx (5 tests) 121ms
stderr | src/components/CatalogSection.test.tsx > CatalogSection > debe renderizar el título del catálogo
Warning: An update to CatalogSection inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at CatalogSection (/home/runner/work/Ecommerce_Ceramica/Ecommerce_Ceramica/Frontend/src/components/CatalogSection.tsx:13:71)

 ✓ src/components/CatalogSection.test.tsx (5 tests) 122ms
stderr | src/components/PaymentSection.test.tsx > PaymentSection > debe renderizar el título de pagos
Warning: An update to PaymentSection inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at PaymentSection (/home/runner/work/Ecommerce_Ceramica/Ecommerce_Ceramica/Frontend/src/components/PaymentSection.tsx:13:71)

 ✓ src/components/PaymentSection.test.tsx (5 tests) 108ms
 ✓ src/components/ProtectedRoute.test.tsx (3 tests) 67ms
 ✓ src/lib/utils.test.ts (4 tests) 10ms
 ✓ src/pages/Products.test.tsx (1 test) 4ms
Browserslist: browsers data (caniuse-lite) is 19 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
 ✓ src/pages/Home.test.tsx (1 test) 189ms

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 4 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/components/UsersSection.test.tsx > UsersSection Component > renders users list correctly
TestingLibraryElementError: Unable to find an element with the text: john@example.com. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div>
      <h2
        class="font-bold mb-4"
      >
        CRUD Usuarios
      </h2>
      <div
        class="shrink-0 bg-border h-[1px] w-full"
        data-orientation="horizontal"
        role="none"
      />
      <button
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 mb-4"
      >
        Crear nuevo cliente
      </button>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
      >
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <div
            class="flex flex-col space-y-1.5 p-6"
          >
            <h3
              class="text-2xl font-semibold leading-none tracking-tight"
            >
              John
               
              Doe
            </h3>
            <div
              class="text-sm text-gray-500"
            >
              ID Cliente: 
              CUST001
            </div>
          </div>
          <div
            class="p-6 pt-0"
          >
            <div>
              Email: 
              john@example.com
            </div>
            <div>
              Teléfono: 
              123456789
            </div>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mr-2"
            >
              Editar
            </button>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3"
            >
              Eliminar
            </button>
          </div>
        </div>
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <div
            class="flex flex-col space-y-1.5 p-6"
          >
            <h3
              class="text-2xl font-semibold leading-none tracking-tight"
            >
              Jane
               
              Doe
            </h3>
            <div
              class="text-sm text-gray-500"
            >
              ID Cliente: 
              ADM001
            </div>
          </div>
          <div
            class="p-6 pt-0"
          >
            <div>
              Email: 
              jane@example.com
            </div>
            <div>
              Teléfono: 
              987654321
            </div>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mr-2"
            >
              Editar
            </button>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div>
        <h2
          class="font-bold mb-4"
        >
          CRUD Usuarios
        </h2>
        <div
          class="shrink-0 bg-border h-[1px] w-full"
          data-orientation="horizontal"
          role="none"
        />
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 mb-4"
        >
          Crear nuevo cliente
        </button>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
        >
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <div
              class="flex flex-col space-y-1.5 p-6"
            >
              <h3
                class="text-2xl font-semibold leading-none tracking-tight"
              >
                John
                 
                Doe
              </h3>
              <div
                class="text-sm text-gray-500"
              >
                ID Cliente: 
                CUST001
              </div>
            </div>
            <div
              class="p-6 pt-0"
            >
              <div>
                Email: 
                john@example.com
              </div>
              <div>
                Teléfono: 
                123456789
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mr-2"
              >
                Editar
              </button>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3"
              >
                Eliminar
              </button>
            </div>
          </div>
          <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <div
              class="flex flex-col space-y-1.5 p-6"
            >
              <h3
                class="text-2xl font-semibold leading-none tracking-tight"
              >
                Jane
                 
                Doe
              </h3>
              <div
                class="text-sm text-gray-500"
              >
                ID Cliente: 
                ADM001
              </div>
            </div>
            <div
              class="p-6 pt-0"
            >
              <div>
                Email: 
                jane@example.com
              </div>
              <div>
                Teléfono: 
                987654321
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mr-2"
              >
                Editar
              </button>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
 ❯ Proxy.waitFor node_modules/@testing-library/dom/dist/wait-for.js:163:27
 ❯ src/components/UsersSection.test.tsx:37:11
     35|     render(<UsersSection />);
     36| 
     37|     await waitFor(() => {
       |           ^
     38|       expect(screen.getByText('John Doe')).toBeInTheDocument();
     39|       expect(screen.getByText('Jane Doe')).toBeInTheDocument();

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/4]⎯

 FAIL  src/components/UsersSection.test.tsx > UsersSection Component > handles user creation successfully
TestingLibraryElementError: Unable to find an element with the placeholder text of: Dirección de facturación

Ignored nodes: comments, script, style
<body>
  <div>
    <div>
      <h2
        class="font-bold mb-4"
      >
        CRUD Usuarios
      </h2>
      <div
        class="shrink-0 bg-border h-[1px] w-full"
        data-orientation="horizontal"
        role="none"
      />
      <button
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 mb-4"
      >
        Ocultar formulario
      </button>
      <form
        class="mt-4 mb-6"
      >
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Nombre"
          value="New"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Apellido"
          value="User"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Email"
          value="new@example.com"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Teléfono"
          value="123456789"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Contraseña"
          type="password"
          value="password123"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Dirección Facturación"
          value=""
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Dirección Envío"
          value=""
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="ID Cliente"
          value=""
        />
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="submit"
        >
          Registrar
        </button>
      </form>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
      >
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <div
            class="flex flex-col space-y-1.5 p-6"
          >
            <h3
              class="text-2xl font-semibold leading-none tracking-tight"
            >
              John
               
              Doe
            </h3>
            <div
              class="text-sm text-gray-50...
 ❯ Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 ❯ getByPlaceholderText node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 ❯ src/components/UsersSection.test.tsx:79:29
     77|     fireEvent.change(screen.getByPlaceholderText('Teléfono'), { target…
     78|     fireEvent.change(screen.getByPlaceholderText('Contraseña'), { targ…
     79|     fireEvent.change(screen.getByPlaceholderText('Dirección de factura…
       |                             ^
     80|     fireEvent.change(screen.getByPlaceholderText('Dirección de envío')…
     81| 

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/4]⎯

 FAIL  src/components/UsersSection.test.tsx > UsersSection Component > handles user update
TestingLibraryElementError: Unable to find an element with the text: Actualizar. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div>
      <h2
        class="font-bold mb-4"
      >
        CRUD Usuarios
      </h2>
      <div
        class="shrink-0 bg-border h-[1px] w-full"
        data-orientation="horizontal"
        role="none"
      />
      <button
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 mb-4"
      >
        Crear nuevo cliente
      </button>
      <form
        class="mb-6"
      >
        <h3
          class="font-semibold mb-2"
        >
          Editar Usuario
        </h3>
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Nombre"
          value="John Updated"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Apellido"
          value="Doe"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Email"
          value="john@example.com"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Teléfono"
          value="123456789"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Contraseña (vacío = no cambia)"
          type="password"
          value=""
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Dirección Facturación"
          value="123 St"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Dirección Envío"
          value="123 St"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="ID Cliente"
          value="CUST001"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Rol"
          value="customer"
        />
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="submit"
        >
          Guardar cambio...
 ❯ Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 ❯ getByText node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 ❯ src/components/UsersSection.test.tsx:119:28
    117|     // Actualizar los datos
    118|     fireEvent.change(screen.getByDisplayValue('John'), { target: { val…
    119|     fireEvent.click(screen.getByText('Actualizar'));
       |                            ^
    120| 
    121|     await waitFor(() => {

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/4]⎯

 FAIL  src/components/UsersSection.test.tsx > UsersSection Component > shows error when user update fails
TestingLibraryElementError: Unable to find an accessible element with the role "form"

Here are the accessible roles:

  heading:

  Name "CRUD Usuarios":
  <h2
    class="font-bold mb-4"
  />

  Name "Editar Usuario":
  <h3
    class="font-semibold mb-2"
  />

  Name "John Doe":
  <h3
    class="text-2xl font-semibold leading-none tracking-tight"
  />

  Name "Jane Doe":
  <h3
    class="text-2xl font-semibold leading-none tracking-tight"
  />

  --------------------------------------------------
  none:

  Name "":
  <div
    class="shrink-0 bg-border h-[1px] w-full"
    data-orientation="horizontal"
    role="none"
  />

  --------------------------------------------------
  button:

  Name "Crear nuevo cliente":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 mb-4"
  />

  Name "Guardar cambios":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
    type="submit"
  />

  Name "Cancelar":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
    type="button"
  />

  Name "Editar":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mr-2"
  />

  Name "Eliminar":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3"
  />

  Name "Editar":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mr-2"
  />

  Name "Eliminar":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3"
  />

  --------------------------------------------------
  textbox:

  Name "":
  <input
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
    placeholder="Nombre"
    value="John"
  />

  Name "":
  <input
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
    placeholder="Apellido"
    value="Doe"
  />

  Name "":
  <input
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
    placeholder="Email"
    value="john@example.com"
  />

  Name "":
  <input
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
    placeholder="Teléfono"
    value="123456789"
  />

  Name "":
  <input
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
    placeholder="Dirección Facturación"
    value="123 St"
  />

  Name "":
  <input
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
    placeholder="Dirección Envío"
    value="123 St"
  />

  Name "":
  <input
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
    placeholder="ID Cliente"
    value="CUST001"
  />

  Name "":
  <input
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
    placeholder="Rol"
    value="customer"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <div>
      <h2
        class="font-bold mb-4"
      >
        CRUD Usuarios
      </h2>
      <div
        class="shrink-0 bg-border h-[1px] w-full"
        data-orientation="horizontal"
        role="none"
      />
      <button
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 mb-4"
      >
        Crear nuevo cliente
      </button>
      <form
        class="mb-6"
      >
        <h3
          class="font-semibold mb-2"
        >
          Editar Usuario
        </h3>
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Nombre"
          value="John"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Apellido"
          value="Doe"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Email"
          value="john@example.com"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Teléfono"
          value="123456789"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Contraseña (vacío = no cambia)"
          type="password"
          value=""
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Dirección Facturación"
          value="123 St"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Dirección Envío"
          value="123 St"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="ID Cliente"
          value="CUST001"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Rol"
          value="customer"
        />
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="submit"
        >
          Guardar cambios
  ...
 ❯ Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 ❯ getByRole node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 ❯ src/components/UsersSection.test.tsx:192:25
    190| 
    191|     // Encontrar el formulario y enviarlo directamente
    192|     const form = screen.getByRole('form');
       |                         ^
    193|     fireEvent.submit(form);
    194| 

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/4]⎯


 Test Files  1 failed | 13 passed (14)
      Tests  4 failed | 59 passed (63)
   Start at  04:59:59
   Duration  7.56s (transform 679ms, setup 1.16s, import 2.20s, tests 4.87s, environment 8.24s)


Error: TestingLibraryElementError: Unable to find an element with the text: john@example.com. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div>
      <h2
        class="font-bold mb-4"
      >
        CRUD Usuarios
      </h2>
      <div
        class="shrink-0 bg-border h-[1px] w-full"
        data-orientation="horizontal"
        role="none"
      />
      <button
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 mb-4"
      >
        Crear nuevo cliente
      </button>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
      >
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <div
            class="flex flex-col space-y-1.5 p-6"
          >
            <h3
              class="text-2xl font-semibold leading-none tracking-tight"
            >
              John
               
              Doe
            </h3>
            <div
              class="text-sm text-gray-500"
            >
              ID Cliente: 
              CUST001
            </div>
          </div>
          <div
            class="p-6 pt-0"
          >
            <div>
              Email: 
              john@example.com
            </div>
            <div>
              Teléfono: 
              123456789
            </div>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mr-2"
            >
              Editar
            </button>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3"
            >
              Eliminar
            </button>
          </div>
        </div>
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <div
            class="flex flex-col space-y-1.5 p-6"
          >
            <h3
              class="text-2xl font-semibold leading-none tracking-tight"
            >
              Jane
               
              Doe
            </h3>
            <div
              class="text-sm text-gray-500"
            >
              ID Cliente: 
              ADM001
            </div>
          </div>
          <div
            class="p-6 pt-0"
          >
            <div>
              Email: 
              jane@example.com
            </div>
            <div>
              Teléfono: 
              987654321
            </div>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 r

Error: TestingLibraryElementError: Unable to find an element with the placeholder text of: Dirección de facturación

Ignored nodes: comments, script, style
<body>
  <div>
    <div>
      <h2
        class="font-bold mb-4"
      >
        CRUD Usuarios
      </h2>
      <div
        class="shrink-0 bg-border h-[1px] w-full"
        data-orientation="horizontal"
        role="none"
      />
      <button
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 mb-4"
      >
        Ocultar formulario
      </button>
      <form
        class="mt-4 mb-6"
      >
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Nombre"
          value="New"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Apellido"
          value="User"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Email"
          value="new@example.com"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Teléfono"
          value="123456789"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Contraseña"
          type="password"
          value="password123"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Dirección Facturación"
          value=""
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:t

Error: TestingLibraryElementError: Unable to find an element with the text: Actualizar. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div>
      <h2
        class="font-bold mb-4"
      >
        CRUD Usuarios
      </h2>
      <div
        class="shrink-0 bg-border h-[1px] w-full"
        data-orientation="horizontal"
        role="none"
      />
      <button
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 mb-4"
      >
        Crear nuevo cliente
      </button>
      <form
        class="mb-6"
      >
        <h3
          class="font-semibold mb-2"
        >
          Editar Usuario
        </h3>
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Nombre"
          value="John Updated"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Apellido"
          value="Doe"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Email"
          value="john@example.com"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Teléfono"
          value="123456789"
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
          placeholder="Contraseña (vacío = no cambia)"
          type="password"
          value=""
        />
        <input
          class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mb-2"
    

Error: TestingLibraryElementError: Unable to find an accessible element with the role "form"

Here are the accessible roles:

  heading:

  Name "CRUD Usuarios":
  <h2
    class="font-bold mb-4"
  />

  Name "Editar Usuario":
  <h3
    class="font-semibold mb-2"
  />

  Name "John Doe":
  <h3
    class="text-2xl font-semibold leading-none tracking-tight"
  />

  Name "Jane Doe":
  <h3
    class="text-2xl font-semibold leading-none tracking-tight"
  />

  --------------------------------------------------
  none:

  Name "":
  <div
    class="shrink-0 bg-border h-[1px] w-full"
    data-orientation="horizontal"
    role="none"
  />

  --------------------------------------------------
  button:

  Name "Crear nuevo cliente":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 mb-4"
  />

  Name "Guardar cambios":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
    type="submit"
  />

  Name "Cancelar":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
    type="button"
  />

  Name "Editar":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mr-2"
  />

  Name "Eliminar":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3"
  />

  Name "Editar":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 mr-2"
  />

  Name "Eliminar":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3"
  />

  --------------------------------------------------
  textbox:

  Name "":
  <input
    class="flex h-10 
Error: Process completed with exit code 1.