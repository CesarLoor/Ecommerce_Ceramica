import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Profile from './Profile';
import { customerAPI, getCurrentUser } from '@/lib/api';

vi.mock('@/lib/api');
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

const mockUser = {
  _id: 'user123',
  firstName: 'Juan',
  lastName: 'Pérez',
  email: 'juan@example.com',
  phone: '1234567890',
  billingAddress: 'Calle 1, 123',
  shippingAddress: 'Calle 2, 456',
};

const renderProfile = () =>
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

describe('Profile Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getCurrentUser).mockReturnValue(mockUser);
    vi.mocked(customerAPI.update).mockResolvedValue(mockUser);
    sessionStorage.clear();
    sessionStorage.setItem('user', JSON.stringify(mockUser));
  });

  it('renders the profile page', () => {
    renderProfile();
    expect(screen.getByText('Mi perfil')).toBeInTheDocument();
  });

  it('loads user data from getCurrentUser', () => {
    renderProfile();
    
    const firstNameInput = screen.getByDisplayValue('Juan') as HTMLInputElement;
    expect(firstNameInput.value).toBe('Juan');
  });

  it('displays user information fields', () => {
    renderProfile();
    
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Apellido')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Teléfono')).toBeInTheDocument();
  });

  it('updates form when user changes input', async () => {
    renderProfile();
    
    const firstNameInput = screen.getByDisplayValue('Juan') as HTMLInputElement;
    fireEvent.change(firstNameInput, { target: { value: 'Carlos' } });

    await waitFor(() => {
      expect(firstNameInput.value).toBe('Carlos');
    });
  });

  it('submits the form with updated data', async () => {
    renderProfile();
    
    const firstNameInput = screen.getByDisplayValue('Juan') as HTMLInputElement;
    fireEvent.change(firstNameInput, { target: { value: 'Carlos' } });

    const submitButton = screen.getByRole('button', { name: /guardar cambios/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(customerAPI.update).toHaveBeenCalledWith(
        'user123',
        expect.objectContaining({
          firstName: 'Carlos',
        })
      );
    });
  });

  it('displays address fields', () => {
    renderProfile();
    
    expect(screen.getByDisplayValue('Calle 1, 123')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Calle 2, 456')).toBeInTheDocument();
  });

  it('handles missing user gracefully', () => {
    vi.mocked(getCurrentUser).mockReturnValue(null);
    
    renderProfile();
    expect(screen.getByText('Mi perfil')).toBeInTheDocument();
  });
});
