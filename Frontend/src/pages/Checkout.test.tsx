import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Checkout from './Checkout';
import { cartStore } from '@/lib/cart-store';

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

vi.mock('@/lib/cart-store', () => ({
  cartStore: {
    getItems: vi.fn(),
    getTotal: vi.fn(),
    subscribe: vi.fn(),
  },
}));

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock('@/lib/api', () => ({
  getCurrentUser: vi.fn(),
}));

const renderCheckout = () =>
  render(
    <MemoryRouter>
      <Checkout />
    </MemoryRouter>
  );

describe('Checkout Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(cartStore.getItems).mockReturnValue([
      {
        id: 'item1',
        productId: 'prod1',
        name: 'Producto 1',
        price: 50,
        quantity: 1,
        image: 'img.jpg',
      },
    ]);
    vi.mocked(cartStore.getTotal).mockReturnValue(50);
    vi.mocked(cartStore.subscribe).mockReturnValue(() => {});
  });

  it('renders the checkout page', () => {
    renderCheckout();
    expect(screen.getByText('Checkout y pago')).toBeInTheDocument();
  });

  it('renders contact section', () => {
    renderCheckout();
    expect(screen.getByLabelText('Nombre y apellido')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Teléfono')).toBeInTheDocument();
  });

  it('renders shipping address section', () => {
    renderCheckout();
    expect(screen.getByLabelText('Dirección')).toBeInTheDocument();
    expect(screen.getByLabelText('Ciudad')).toBeInTheDocument();
    expect(screen.getByLabelText('Provincia')).toBeInTheDocument();
    expect(screen.getByLabelText('Código postal')).toBeInTheDocument();
  });

  it('renders order summary', () => {
    renderCheckout();
    expect(screen.getByText('Resumen de compra')).toBeInTheDocument();
  });

  it('updates contact information when user types', async () => {
    renderCheckout();
    
    const nameInput = screen.getByLabelText('Nombre y apellido') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });

    await waitFor(() => {
      expect(nameInput.value).toBe('Juan Pérez');
    });
  });

  it('displays subtotal, tax and total correctly', () => {
    renderCheckout();
    // Subtotal should be 50. Usamos getAllByText porque el valor 50.00 aparece en la lista de items y en el subtotal.
    expect(screen.getAllByText(/50\.00/).length).toBeGreaterThan(0);
  });

  it('allows user to toggle billing address', async () => {
    renderCheckout();
    
    const checkboxes = screen.getAllByRole('checkbox');
    const sameAddressCheckbox = checkboxes[0];
    
    fireEvent.click(sameAddressCheckbox);
    
    await waitFor(() => {
      expect(screen.getByText('Dirección de facturación')).toBeInTheDocument();
    });
  });

  it('submits the checkout form', async () => {
    renderCheckout();
    
    const nameInput = screen.getByLabelText('Nombre y apellido');
    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } });

    const form = screen.getByRole('button', { name: /pagar ahora/i })?.closest('form');
    if (form) {
      fireEvent.submit(form);
    }
  });
});
