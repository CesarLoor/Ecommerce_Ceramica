import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PaymentSuccess from './PaymentSuccess';
import PaymentCanceled from './PaymentCanceled';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

describe('PaymentSuccess', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renderiza el título de pago exitoso', () => {
    render(<MemoryRouter><PaymentSuccess /></MemoryRouter>);
    expect(screen.getByText('¡Gracias por tu compra!')).toBeInTheDocument();
  });

  it('renderiza el mensaje de confirmación', () => {
    render(<MemoryRouter><PaymentSuccess /></MemoryRouter>);
    expect(screen.getByText(/Tu pago fue realizado con éxito/i)).toBeInTheDocument();
  });

  it('el botón Seguir comprando navega a /', () => {
    render(<MemoryRouter><PaymentSuccess /></MemoryRouter>);
    fireEvent.click(screen.getByText('Seguir comprando'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('actualiza el título del documento', () => {
    render(<MemoryRouter><PaymentSuccess /></MemoryRouter>);
    expect(document.title).toBe('Pago exitoso | Tienda');
  });
});

describe('PaymentCanceled', () => {
  beforeEach(() => vi.clearAllMocks());

  it('renderiza el título de pago cancelado', () => {
    render(<MemoryRouter><PaymentCanceled /></MemoryRouter>);
    expect(screen.getByText('Pago cancelado')).toBeInTheDocument();
  });

  it('renderiza el mensaje de cancelación', () => {
    render(<MemoryRouter><PaymentCanceled /></MemoryRouter>);
    expect(screen.getByText(/No se realizó ningún cargo/i)).toBeInTheDocument();
  });

  it('el botón Volver al checkout navega a /checkout', () => {
    render(<MemoryRouter><PaymentCanceled /></MemoryRouter>);
    fireEvent.click(screen.getByText('Volver al checkout'));
    expect(mockNavigate).toHaveBeenCalledWith('/checkout');
  });

  it('el botón Volver al carrito navega a /carrito', () => {
    render(<MemoryRouter><PaymentCanceled /></MemoryRouter>);
    fireEvent.click(screen.getByText('Volver al carrito'));
    expect(mockNavigate).toHaveBeenCalledWith('/carrito');
  });

  it('actualiza el título del documento', () => {
    render(<MemoryRouter><PaymentCanceled /></MemoryRouter>);
    expect(document.title).toBe('Pago cancelado | Tienda');
  });
});
