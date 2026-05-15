import { describe, it, expect, vi, beforeEach } from 'vitest';
import { cartStore } from './cart-store';
import { cartAPI, getCurrentUser } from './api';
import { 
  ensureCartExists, 
  upsertCartForCurrentUser,
  syncCartWithServer 
} from './cart-sync';

vi.mock('./api');
vi.mock('./cart-store');

describe('cart-sync.ts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('ensureCartExists', () => {
    it('should create a cart if it does not exist', async () => {
      vi.mocked(getCurrentUser).mockReturnValue({
        _id: 'user123',
        idCustomer: 'CUST001',
      });

      vi.mocked(cartAPI.getByCustomer).mockResolvedValue(null);
      vi.mocked(cartAPI.create).mockResolvedValue({
        _id: 'cart123',
        idShoppingCart: 'CART001',
      });

      const result = await ensureCartExists();
      
      expect(result).toBeDefined();
      expect(cartAPI.create).toHaveBeenCalled();
    });

    it('should return existing cart if found', async () => {
      vi.mocked(getCurrentUser).mockReturnValue({
        _id: 'user123',
        idCustomer: 'CUST001',
      });

      const existingCart = { _id: 'cart123', idShoppingCart: 'CART001' };
      vi.mocked(cartAPI.getByCustomer).mockResolvedValue(existingCart);

      const result = await ensureCartExists();
      
      expect(result).toBeDefined();
    });

    it('should handle missing user', async () => {
      vi.mocked(getCurrentUser).mockReturnValue(null);

      const result = await ensureCartExists();
      
      expect(result).toBeNull();
    });
  });

  describe('upsertCartForCurrentUser', () => {
    it('should upsert cart with current user data', async () => {
      vi.mocked(getCurrentUser).mockReturnValue({
        _id: 'user123',
        idCustomer: 'CUST001',
      });

      vi.mocked(cartStore.getItems).mockReturnValue([
        { productId: 'prod1', quantity: 2, price: 10 },
      ]);

      vi.mocked(cartStore.getTotal).mockReturnValue(20);
      vi.mocked(cartAPI.update).mockResolvedValue({ success: true });

      await upsertCartForCurrentUser();

      expect(cartAPI.update).toHaveBeenCalled();
    });
  });

  describe('syncCartWithServer', () => {
    it('should sync cart items with server', async () => {
      vi.mocked(getCurrentUser).mockReturnValue({
        _id: 'user123',
        idCustomer: 'CUST001',
      });

      vi.mocked(cartStore.getItems).mockReturnValue([
        { productId: 'prod1', quantity: 1, price: 25 },
      ]);

      vi.mocked(cartStore.getTotal).mockReturnValue(25);
      vi.mocked(cartAPI.getByCustomer).mockResolvedValue({
        _id: 'cart123',
      });

      vi.mocked(cartAPI.update).mockResolvedValue({ success: true });

      await syncCartWithServer();

      expect(cartAPI.update).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          products: expect.any(Array),
          total: expect.any(Number),
        })
      );
    });
  });
});
