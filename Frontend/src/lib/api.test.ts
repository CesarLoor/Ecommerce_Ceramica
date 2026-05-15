import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock fetch globally
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

// Mock bcryptjs
vi.mock('bcryptjs', () => ({
  default: { compare: vi.fn() },
}));

// Mock cart-sync dynamic imports
vi.mock('./cart-sync', () => ({
  clearUserCart: vi.fn().mockResolvedValue(undefined),
  loadCartForCurrentUser: vi.fn().mockResolvedValue(undefined),
}));

import bcrypt from 'bcryptjs';
import {
  getCurrentUser,
  logoutUser,
  customerAPI,
  productAPI,
  cartAPI,
  categoryAPI,
  LoginAPI,
  RegisterAPI,
} from './api';

describe('api.ts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
    // Reset window event listeners
    vi.spyOn(window, 'dispatchEvent').mockImplementation(() => true);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // ────────────────────────────────────────
  // getCurrentUser
  // ────────────────────────────────────────
  describe('getCurrentUser', () => {
    it('retorna null cuando no hay usuario en sessionStorage', () => {
      expect(getCurrentUser()).toBeNull();
    });

    it('retorna el usuario parseado desde sessionStorage', () => {
      const user = { _id: '1', email: 'test@test.com', role: 'customer' };
      sessionStorage.setItem('user', JSON.stringify(user));
      expect(getCurrentUser()).toEqual(user);
    });

    it('retorna null si el JSON es inválido', () => {
      sessionStorage.setItem('user', 'invalid-json{');
      expect(getCurrentUser()).toBeNull();
    });
  });

  // ────────────────────────────────────────
  // logoutUser
  // ────────────────────────────────────────
  describe('logoutUser', () => {
    it('limpia sessionStorage y despacha evento userLogout', async () => {
      sessionStorage.setItem('user', JSON.stringify({ _id: '1' }));
      sessionStorage.setItem('shoppingCartId', 'cart-1');
      sessionStorage.setItem('cart', '[]');

      await logoutUser();

      expect(sessionStorage.getItem('user')).toBeNull();
      expect(sessionStorage.getItem('shoppingCartId')).toBeNull();
      expect(sessionStorage.getItem('cart')).toBeNull();
      expect(window.dispatchEvent).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'userLogout' })
      );
    });
  });

  // ────────────────────────────────────────
  // Helper: configurar fetch mock
  // ────────────────────────────────────────
  const mockOkResponse = (data: any) => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(data),
    });
  };

  const mockErrorResponse = (status = 500) => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status,
    });
  };

  // ────────────────────────────────────────
  // customerAPI
  // ────────────────────────────────────────
  describe('customerAPI', () => {
    it('getAll realiza GET a /customers', async () => {
      mockOkResponse([{ _id: '1', email: 'a@b.com' }]);
      const result = await customerAPI.getAll();
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/customers'),
        expect.objectContaining({ headers: expect.any(Object) })
      );
      expect(result).toEqual([{ _id: '1', email: 'a@b.com' }]);
    });

    it('getById realiza GET a /customers/:id', async () => {
      mockOkResponse({ _id: '1' });
      await customerAPI.getById('1');
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/customers/1'),
        expect.anything()
      );
    });

    it('create realiza POST a /customers', async () => {
      const data = { firstName: 'Test', email: 'test@test.com' };
      mockOkResponse({ _id: 'new-id', ...data });
      const result = await customerAPI.create(data);
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/customers'),
        expect.objectContaining({ method: 'POST' })
      );
      expect(result).toHaveProperty('_id');
    });

    it('update realiza PUT a /customers/:id', async () => {
      mockOkResponse({ _id: '1', firstName: 'Updated' });
      await customerAPI.update('1', { firstName: 'Updated' });
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/customers/1'),
        expect.objectContaining({ method: 'PUT' })
      );
    });

    it('delete realiza DELETE a /customers/:id', async () => {
      mockOkResponse({});
      await customerAPI.delete('1');
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/customers/1'),
        expect.objectContaining({ method: 'DELETE' })
      );
    });

    it('lanza error cuando la respuesta no es ok', async () => {
      mockErrorResponse(404);
      await expect(customerAPI.getById('999')).rejects.toThrow('API Error: 404');
    });
  });

  // ────────────────────────────────────────
  // productAPI
  // ────────────────────────────────────────
  describe('productAPI', () => {
    it('getAll retorna productos', async () => {
      mockOkResponse([{ _id: 'p1', name: 'Taza' }]);
      const result = await productAPI.getAll();
      expect(result).toEqual([{ _id: 'p1', name: 'Taza' }]);
    });

    it('create envía POST con el producto', async () => {
      mockOkResponse({ _id: 'p2' });
      await productAPI.create({ name: 'Plato', price: 10 });
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/products'),
        expect.objectContaining({ method: 'POST' })
      );
    });

    it('update envía PUT', async () => {
      mockOkResponse({});
      await productAPI.update('p1', { name: 'Jarrón' });
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/products/p1'),
        expect.objectContaining({ method: 'PUT' })
      );
    });

    it('delete envía DELETE', async () => {
      mockOkResponse({});
      await productAPI.delete('p1');
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/products/p1'),
        expect.objectContaining({ method: 'DELETE' })
      );
    });
  });

  // ────────────────────────────────────────
  // cartAPI
  // ────────────────────────────────────────
  describe('cartAPI', () => {
    it('create envía POST', async () => {
      mockOkResponse({ _id: 'cart1' });
      await cartAPI.create({ customerId: 'c1', products: [] });
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/shoppingCart'),
        expect.objectContaining({ method: 'POST' })
      );
    });

    it('getById envía GET', async () => {
      mockOkResponse({ _id: 'cart1' });
      await cartAPI.getById('cart1');
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/shoppingCart/cart1'),
        expect.anything()
      );
    });

    it('update envía PUT', async () => {
      mockOkResponse({});
      await cartAPI.update('cart1', { total: 50 });
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/shoppingCart/cart1'),
        expect.objectContaining({ method: 'PUT' })
      );
    });

    it('delete envía DELETE', async () => {
      mockOkResponse({});
      await cartAPI.delete('cart1');
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/shoppingCart/cart1'),
        expect.objectContaining({ method: 'DELETE' })
      );
    });

    it('getByCustomer envía GET a /shoppingCart/customer/:id', async () => {
      mockOkResponse({ _id: 'cart1' });
      await cartAPI.getByCustomer('cust1');
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/shoppingCart/customer/cust1'),
        expect.anything()
      );
    });
  });

  // ────────────────────────────────────────
  // categoryAPI
  // ────────────────────────────────────────
  describe('categoryAPI', () => {
    it('getAll retorna categorías', async () => {
      mockOkResponse([{ _id: 'cat1', name: 'Cerámica' }]);
      const result = await categoryAPI.getAll();
      expect(result).toEqual([{ _id: 'cat1', name: 'Cerámica' }]);
    });

    it('create envía POST', async () => {
      mockOkResponse({ _id: 'cat2' });
      await categoryAPI.create({ name: 'Porcelana' });
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/categories'),
        expect.objectContaining({ method: 'POST' })
      );
    });

    it('update envía PUT', async () => {
      mockOkResponse({});
      await categoryAPI.update('cat1', { name: 'Updated' });
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/categories/cat1'),
        expect.objectContaining({ method: 'PUT' })
      );
    });

    it('delete envía DELETE', async () => {
      mockOkResponse({});
      await categoryAPI.delete('cat1');
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/categories/cat1'),
        expect.objectContaining({ method: 'DELETE' })
      );
    });
  });

  // ────────────────────────────────────────
  // LoginAPI
  // ────────────────────────────────────────
  describe('LoginAPI', () => {
    it('hace login con credenciales correctas', async () => {
      const mockUser = {
        _id: '1',
        email: 'user@test.com',
        password: 'hashed',
        role: 'customer',
        firstName: 'Test',
      };
      mockOkResponse([mockUser]);
      vi.mocked(bcrypt.compare).mockResolvedValueOnce(true as never);

      const result = await LoginAPI.login('user@test.com', 'plain-password');

      expect(result).toMatchObject({ email: 'user@test.com' });
      expect(sessionStorage.getItem('user')).not.toBeNull();
      expect(window.dispatchEvent).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'userLogin' })
      );
    });

    it('lanza error si el usuario no existe', async () => {
      mockOkResponse([]);
      await expect(
        LoginAPI.login('notfound@test.com', 'pass')
      ).rejects.toThrow('Usuario no encontrado');
    });

    it('lanza error si la contraseña es incorrecta', async () => {
      const mockUser = { _id: '1', email: 'user@test.com', password: 'hashed', role: 'customer' };
      mockOkResponse([mockUser]);
      vi.mocked(bcrypt.compare).mockResolvedValueOnce(false as never);

      await expect(
        LoginAPI.login('user@test.com', 'wrong-pass')
      ).rejects.toThrow('Contraseña incorrecta');
    });
  });

  // ────────────────────────────────────────
  // RegisterAPI
  // ────────────────────────────────────────
  describe('RegisterAPI', () => {
    it('registra customer y guarda sesión', async () => {
      const newUser = { _id: 'new1', email: 'new@test.com', firstName: 'New' };
      mockOkResponse(newUser);

      const result = await RegisterAPI.registerCustomer({
        email: 'new@test.com',
        firstName: 'New',
        password: 'pass123',
      });

      expect(result).toMatchObject({ role: 'customer' });
      expect(sessionStorage.getItem('user')).not.toBeNull();
      expect(window.dispatchEvent).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'userLogin' })
      );
    });

    it('lanza error si el registro falla', async () => {
      mockErrorResponse(400);
      await expect(
        RegisterAPI.registerCustomer({ email: 'fail@test.com' })
      ).rejects.toThrow();
    });
  });
});
