import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

vi.mock('@/components/Layout', () => ({
  Layout: ({ children }: any) => <div data-testid="layout">{children}</div>,
}));

vi.mock('@/pages/Home', () => ({
  default: () => <div>Home Page</div>,
}));

vi.mock('@/pages/Products', () => ({
  default: () => <div>Products Page</div>,
}));

vi.mock('@/pages/Auth', () => ({
  default: () => <div>Auth Page</div>,
}));

vi.mock('@/pages/Cart', () => ({
  default: () => <div>Cart Page</div>,
}));

vi.mock('@/pages/Profile', () => ({
  default: () => <div>Profile Page</div>,
}));

vi.mock('@/pages/Checkout', () => ({
  default: () => <div>Checkout Page</div>,
}));

vi.mock('@/pages/PaymentSuccess', () => ({
  default: () => <div>Payment Success Page</div>,
}));

vi.mock('@/pages/PaymentCanceled', () => ({
  default: () => <div>Payment Canceled Page</div>,
}));

vi.mock('@/components/ProtectedRoute', () => ({
  ProtectedRoute: ({ children }: any) => <div>{children}</div>,
}));

vi.mock('@/components/ui/toaster', () => ({
  Toaster: () => <div data-testid="toaster"></div>,
}));

vi.mock('@/components/ui/sonner', () => ({
  Toaster: () => <div data-testid="sonner"></div>,
}));

vi.mock('@/components/ui/tooltip', () => ({
  TooltipProvider: ({ children }: any) => <div>{children}</div>,
}));

describe('App Component', () => {
  it('renders the App with Layout', () => {
    render(<App />);
    
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('renders providers', () => {
    render(<App />);
    
    expect(screen.getByTestId('toaster')).toBeInTheDocument();
    expect(screen.getByTestId('sonner')).toBeInTheDocument();
  });

  it('renders home page on root path', () => {
    window.history.pushState({}, 'Home', '/');
    render(<App />);
    
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
