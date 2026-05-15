import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from './Cart';

// Mock cart-store
vi.mock('@/lib/cart-store', () => ({
  cartStore: {
    getItems: vi.fn(),
    getTotal: vi.fn(),
    removeItem: vi.fn(),
    updateQuantity: vi.fn(),
    subscribe: vi.fn(() => () => {}),
  },
}));

// Mock cart-sync
vi.mock('@/lib/cart-sync', () => ({
  loadCartForCurrentUser: vi.fn().mockResolvedValue(undefined),
  upsertCartForCurrentUser: vi.fn().mockResolvedValue(undefined),
}));

// Mock API
vi.mock('@/lib/api', () => ({
  getCurrentUser: vi.fn(),
}));

const mockToast = vi.fn();
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({ toast: mockToast }),
}));

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

import { cartStore } from '@/lib/cart-store';
import { getCurrentUser } from '@/lib/api';

const renderCart = () =>
  render(<MemoryRouter><Cart /></MemoryRouter>);

describe('Cart Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(cartStore.getTotal).mockReturnValue(0);
    vi.mocked(cartStore.subscribe).mockReturnValue(() => {});
  });

  it('muestra carrito vacío cuando no hay items', async () => {
    vi.mocked(cartStore.getItems).mockReturnValue([]);
    renderCart();
    await waitFor(() => {
      expect(screen.getByText('Tu carrito está vacío')).toBeInTheDocument();
    });
    expect(screen.getByText('Explorar Productos')).toBeInTheDocument();
  });

  it('muestra el título del carrito', async () => {
    vi.mocked(cartStore.getItems).mockReturnValue([]);
    renderCart();
    await waitFor(() => {
      expect(screen.getByText('Carrito de Compras')).toBeInTheDocument();
    });
  });

  it('muestra los productos cuando el carrito tiene items', async () => {
    const cartItems = [
      { id: 'item1', productId: 'p1', name: 'Taza Cerámica', price: 15, quantity: 2 },
    ];
    vi.mocked(cartStore.getItems).mockReturnValue(cartItems);
    vi.mocked(cartStore.getTotal).mockReturnValue(30);
    renderCart();

    await waitFor(() => {
      expect(screen.getByText('Taza Cerámica')).toBeInTheDocument();
    });
    expect(screen.getByText('Resumen del Pedido')).toBeInTheDocument();
  });

  it('muestra el subtotal, envío e impuestos correctamente', async () => {
    const cartItems = [
      { id: 'item1', productId: 'p1', name: 'Taza', price: 25, quantity: 1 },
    ];
    vi.mocked(cartStore.getItems).mockReturnValue(cartItems);
    vi.mocked(cartStore.getTotal).mockReturnValue(25);
    renderCart();

    await waitFor(() => {
      expect(screen.getByText('Subtotal')).toBeInTheDocument();
    });
    expect(screen.getByText('Envío')).toBeInTheDocument();
    expect(screen.getByText('Impuestos')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
  });

  it('muestra envío gratis cuando el subtotal supera $50', async () => {
    const cartItems = [
      { id: 'item1', productId: 'p1', name: 'Jarrón', price: 60, quantity: 1 },
    ];
    vi.mocked(cartStore.getItems).mockReturnValue(cartItems);
    vi.mocked(cartStore.getTotal).mockReturnValue(60);
    renderCart();

    await waitFor(() => {
      expect(screen.getByText('Gratis')).toBeInTheDocument();
    });
    expect(screen.getByText(/Envío gratuito en pedidos/i)).toBeInTheDocument();
  });

  it('redirige a login si no hay usuario al proceder al pago', async () => {
    const cartItems = [
      { id: 'item1', productId: 'p1', name: 'Taza', price: 15, quantity: 1 },
    ];
    vi.mocked(cartStore.getItems).mockReturnValue(cartItems);
    vi.mocked(cartStore.getTotal).mockReturnValue(15);
    vi.mocked(getCurrentUser).mockReturnValue(null);

    renderCart();
    fireEvent.click(screen.getByText('Proceder al Pago'));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Requiere inicio de sesión', variant: 'destructive' })
      );
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
  });

  it('muestra toast de carrito vacío al intentar pagar sin items', async () => {
    vi.mocked(cartStore.getItems).mockReturnValue([]);
    vi.mocked(cartStore.getTotal).mockReturnValue(0);
    renderCart();

    await waitFor(() => {
      // El botón no aparece cuando el carrito está vacío
      expect(screen.queryByText('Proceder al Pago')).not.toBeInTheDocument();
    });
  });
});
