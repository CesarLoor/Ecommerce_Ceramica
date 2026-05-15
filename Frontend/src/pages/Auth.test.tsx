import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Auth from './Auth';

// Mocks
vi.mock('@/lib/api', () => ({
  LoginAPI: { login: vi.fn() },
  RegisterAPI: { registerCustomer: vi.fn() },
  customerAPI: { getAll: vi.fn() },
}));

const mockToast = vi.fn();
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({ toast: mockToast }),
}));

import { LoginAPI, RegisterAPI } from '@/lib/api';

const renderAuth = () =>
  render(
    <MemoryRouter>
      <Auth />
    </MemoryRouter>
  );

describe('Auth Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renderiza el formulario de login por defecto', () => {
    renderAuth();
    expect(screen.getByText('Bienvenido')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /iniciar sesión/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /registrarse/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('tu@email.com')).toBeInTheDocument();
  });

  it('renderiza el botón de continuar como invitado', () => {
    renderAuth();
    expect(screen.getByText('Continuar como Invitado')).toBeInTheDocument();
  });

  it('login exitoso llama a LoginAPI y muestra toast', async () => {
    const user = userEvent.setup();
    const mockUser = { _id: '1', email: 'user@test.com', firstName: 'Test' };
    vi.mocked(LoginAPI.login).mockResolvedValueOnce(mockUser);

    Object.defineProperty(window, 'location', {
      value: { href: '' },
      writable: true,
    });

    renderAuth();

    await user.type(screen.getByLabelText('Email'), 'user@test.com');
    await user.type(screen.getByLabelText('Contraseña'), 'password123');
    await user.click(screen.getByRole('button', { name: /iniciar sesión/i }));

    await waitFor(() => {
      expect(LoginAPI.login).toHaveBeenCalledWith('user@test.com', 'password123');
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Inicio de sesión exitoso' })
      );
    });
  });

  it('login fallido muestra toast de error', async () => {
    const user = userEvent.setup();
    vi.mocked(LoginAPI.login).mockRejectedValueOnce(new Error('Contraseña incorrecta'));

    renderAuth();

    await user.type(screen.getByLabelText('Email'), 'user@test.com');
    await user.type(screen.getByLabelText('Contraseña'), 'wrong');
    await user.click(screen.getByRole('button', { name: /iniciar sesión/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'Error de autenticación',
          variant: 'destructive',
        })
      );
    });
  });

  it('cambia a la pestaña de registro', async () => {
    const user = userEvent.setup();
    renderAuth();
    await user.click(screen.getByRole('tab', { name: /registrarse/i }));
    
    await waitFor(() => {
      expect(screen.getByText('Crear Cuenta')).toBeInTheDocument();
    });
  });

  it('muestra error cuando las contraseñas no coinciden', async () => {
    const user = userEvent.setup();
    renderAuth();
    await user.click(screen.getByRole('tab', { name: /registrarse/i }));

    const nombreInput = await screen.findByLabelText('Nombre');
    await user.type(nombreInput, 'Test');
    await user.type(screen.getByLabelText('Apellido'), 'User');
    await user.type(screen.getByLabelText(/email/i, { selector: '#register-email' }), 'test@test.com');
    await user.type(screen.getByLabelText(/teléfono/i), '1234567890');
    
    await user.type(screen.getByLabelText('Contraseña'), 'pass1');
    await user.type(screen.getByLabelText('Confirmar Contraseña'), 'pass2');
    await user.type(screen.getByLabelText(/dirección de facturación/i), 'Calle 1');

    await user.click(screen.getByRole('button', { name: /crear cuenta/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'Error',
          variant: 'destructive',
        })
      );
    });
    expect(RegisterAPI.registerCustomer).not.toHaveBeenCalled();
  });

  it('registro exitoso llama a RegisterAPI y muestra toast', async () => {
    const user = userEvent.setup();
    vi.mocked(RegisterAPI.registerCustomer).mockResolvedValueOnce({
      _id: 'new1',
      role: 'customer',
    });
    Object.defineProperty(window, 'location', {
      value: { href: '' },
      writable: true,
    });

    renderAuth();
    await user.click(screen.getByRole('tab', { name: /registrarse/i }));

    const nombreInput = await screen.findByLabelText('Nombre');
    await user.type(nombreInput, 'New');
    await user.type(screen.getByLabelText('Apellido'), 'User');
    await user.type(screen.getByLabelText(/email/i, { selector: '#register-email' }), 'new@test.com');
    await user.type(screen.getByLabelText(/teléfono/i), '1234567890');
    
    await user.type(screen.getByLabelText('Contraseña'), 'pass123');
    await user.type(screen.getByLabelText('Confirmar Contraseña'), 'pass123');
    await user.type(screen.getByLabelText(/dirección de facturación/i), 'Calle 1');

    await user.click(screen.getByRole('button', { name: /crear cuenta/i }));

    await waitFor(() => {
      expect(RegisterAPI.registerCustomer).toHaveBeenCalled();
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Registro exitoso' })
      );
    });
  });

  it('registro fallido muestra toast de error', async () => {
    const user = userEvent.setup();
    vi.mocked(RegisterAPI.registerCustomer).mockRejectedValueOnce(new Error('Error al registrar'));

    renderAuth();
    await user.click(screen.getByRole('tab', { name: /registrarse/i }));

    const nombreInput = await screen.findByLabelText('Nombre');
    await user.type(nombreInput, 'New');
    await user.type(screen.getByLabelText('Apellido'), 'User');
    await user.type(screen.getByLabelText(/email/i, { selector: '#register-email' }), 'fail@test.com');
    await user.type(screen.getByLabelText(/teléfono/i), '1234567890');
    
    await user.type(screen.getByLabelText('Contraseña'), 'pass');
    await user.type(screen.getByLabelText('Confirmar Contraseña'), 'pass');
    await user.type(screen.getByLabelText(/dirección de facturación/i), 'Calle 1');

    await user.click(screen.getByRole('button', { name: /crear cuenta/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'Error en el registro',
          variant: 'destructive',
        })
      );
    });
  });
});
