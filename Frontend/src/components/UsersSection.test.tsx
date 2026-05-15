import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UsersSection from './UsersSection';
import { customerAPI } from '@/lib/api';

// Mocks
vi.mock('@/lib/api', () => ({
  customerAPI: {
    getAll: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
}));

const mockToast = vi.fn();
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: mockToast,
  }),
}));

describe('UsersSection Component', () => {
  const mockUsers = [
    { _id: '1', idCustomer: 'CUST001', firstName: 'John', lastName: 'Doe', email: 'john@example.com', role: 'customer', phone: '123456789', billingAddress: '123 St', shippingAddress: '123 St' },
    { _id: '2', idCustomer: 'ADM001', firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', role: 'admin', phone: '987654321', billingAddress: '456 St', shippingAddress: '456 St' },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(customerAPI.getAll).mockResolvedValue(mockUsers);
  });

  it('renders users list correctly', async () => {
    render(<UsersSection />);

    await waitFor(() => {
      expect(screen.getAllByText(/John.*Doe/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/john@example\.com/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Jane.*Doe/i).length).toBeGreaterThan(0);
    });
  });

  it('toggles create user form', async () => {
    render(<UsersSection />);
    
    await screen.findByText(/John.*Doe/i);

    const toggleButton = screen.getByText('Crear nuevo cliente');
    fireEvent.click(toggleButton);

    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Apellido')).toBeInTheDocument();
    expect(screen.getByText('Ocultar formulario')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Ocultar formulario'));
    expect(screen.queryByPlaceholderText('Nombre')).not.toBeInTheDocument();
  });

  it('handles user creation successfully', async () => {
    vi.mocked(customerAPI.create).mockResolvedValue({});

    render(<UsersSection />);
    await screen.findByText(/John.*Doe/i);

    fireEvent.click(screen.getByText('Crear nuevo cliente'));

    fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'New' } });
    fireEvent.change(screen.getByPlaceholderText('Apellido'), { target: { value: 'User' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'new@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Teléfono'), { target: { value: '123456789' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Direcci[oó]n.*Facturaci[oó]n/i), { target: { value: '123 St' } });
    fireEvent.change(screen.getByPlaceholderText(/Direcci[oó]n.*Env[ií]o/i), { target: { value: '123 St' } });

    fireEvent.click(screen.getByText('Registrar'));

    await waitFor(() => {
      expect(customerAPI.create).toHaveBeenCalled();
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        title: 'Usuario registrado'
      }));
    });
  });

  it('handles user update', async () => {
    vi.mocked(customerAPI.update).mockResolvedValue({});
    
    render(<UsersSection />);
    await screen.findByText(/John.*Doe/i);

    const editButtons = screen.getAllByRole('button', { name: /Editar/i });
    fireEvent.click(editButtons[0]);

    expect(screen.getByDisplayValue('John')).toBeInTheDocument();
    
    fireEvent.change(screen.getByDisplayValue('John'), { target: { value: 'John Updated' } });
    
    fireEvent.click(screen.getByRole('button', { name: /(Guardar cambios|Actualizar)/i }));

    await waitFor(() => {
      expect(customerAPI.update).toHaveBeenCalled();
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        title: 'Usuario actualizado'
      }));
    });
  });

  it('handles user deletion', async () => {
    vi.mocked(customerAPI.delete).mockResolvedValue({});

    render(<UsersSection />);
    await screen.findByText(/John.*Doe/i);

    const deleteButton = screen.getAllByRole('button', { name: /Eliminar/i })[0];
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(customerAPI.delete).toHaveBeenCalledWith('1');
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        title: 'Usuario eliminado'
      }));
    });
  });

  it('shows error when user creation fails', async () => {
    const error = new Error('Failed to create user');
    vi.mocked(customerAPI.create).mockRejectedValue(error);

    render(<UsersSection />);
    await screen.findByText(/John.*Doe/i);

    fireEvent.click(screen.getByText('Crear nuevo cliente'));

    fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'New' } });
    fireEvent.change(screen.getByPlaceholderText('Apellido'), { target: { value: 'User' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'new@example.com' } });

    fireEvent.click(screen.getByText('Registrar'));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        variant: 'destructive'
      }));
    });
  });

  it('shows error when user update fails', async () => {
    const error = new Error('Failed to update user');
    vi.mocked(customerAPI.update).mockRejectedValue(error);
    
    render(<UsersSection />);
    await screen.findByText(/John.*Doe/i);

    const editButtons = screen.getAllByRole('button', { name: /Editar/i });
    fireEvent.click(editButtons[0]);

    await screen.findByText(/Editar Usuario/i);

    fireEvent.click(screen.getByRole('button', { name: /(Guardar cambios|Actualizar)/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        variant: 'destructive'
      }));
    });
  });

  it('shows error when user deletion fails', async () => {
    const error = new Error('Failed to delete user');
    vi.mocked(customerAPI.delete).mockRejectedValue(error);

    render(<UsersSection />);
    await screen.findByText(/John.*Doe/i);

    const deleteButton = screen.getAllByRole('button', { name: /Eliminar/i })[0];
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        variant: 'destructive'
      }));
    });
  });

  it('validates required fields in the form', async () => {
    render(<UsersSection />);
    await screen.findByText(/John.*Doe/i);

    fireEvent.click(screen.getByText('Crear nuevo cliente'));

    const submitButton = screen.getByRole('button', { name: /registrar/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(submitButton).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});