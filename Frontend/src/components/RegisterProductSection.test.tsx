import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RegisterProductSection from './RegisterProductSection';

vi.mock('@/lib/api', () => ({
  productAPI: {
    getAll: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
}));

const mockToast = vi.fn();
vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({ toast: mockToast }),
}));

import { productAPI } from '@/lib/api';

const mockProducts = [
  { _id: 'p1', idProduct: 'P001', name: 'Taza', price: 15, stock: 10, url: 'http://img.com/1.jpg', description: 'Una taza' },
  { _id: 'p2', idProduct: 'P002', name: 'Plato', price: 20, stock: 5, url: 'http://img.com/2.jpg', description: '' },
];

describe('RegisterProductSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(productAPI.getAll).mockResolvedValue(mockProducts);
  });

  it('renderiza el formulario y el título', async () => {
    render(<RegisterProductSection />);
    expect(screen.getByText('Registrar/Editar Producto')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Precio')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Stock')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('URL de la imagen')).toBeInTheDocument();
    // Esperar a que los productos se rendericen para evitar advertencias de "act"
    await screen.findByText('Taza');
  });

  it('muestra la lista de productos cargados', async () => {
    render(<RegisterProductSection />);
    await waitFor(() => {
      expect(screen.getByText('Taza')).toBeInTheDocument();
      expect(screen.getByText('Plato')).toBeInTheDocument();
    });
  });

  it('muestra error cuando faltan campos obligatorios al enviar', async () => {
    render(<RegisterProductSection />);
    await screen.findByText('Taza'); // Esperar a que cargue

    fireEvent.click(screen.getByText('Registrar'));
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Faltan campos obligatorios', variant: 'destructive' })
      );
    });
    expect(productAPI.create).not.toHaveBeenCalled();
  });

  it('crea un producto correctamente al llenar el formulario', async () => {
    vi.mocked(productAPI.create).mockResolvedValueOnce({ _id: 'p3' });

    render(<RegisterProductSection />);
    fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'Jarrón' } });
    fireEvent.change(screen.getByPlaceholderText('Precio'), { target: { value: '30' } });
    fireEvent.change(screen.getByPlaceholderText('Stock'), { target: { value: '3' } });
    fireEvent.change(screen.getByPlaceholderText('URL de la imagen'), { target: { value: 'http://img.com/3.jpg' } });
    fireEvent.click(screen.getByText('Registrar'));

    await waitFor(() => {
      expect(productAPI.create).toHaveBeenCalledWith(
        expect.objectContaining({ name: 'Jarrón', price: 30, stock: 3 })
      );
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Producto registrado' })
      );
    });
  });

  it('muestra error si productAPI.create falla', async () => {
    vi.mocked(productAPI.create).mockRejectedValueOnce(new Error('API error'));
    render(<RegisterProductSection />);
    fireEvent.change(screen.getByPlaceholderText('Nombre'), { target: { value: 'X' } });
    fireEvent.change(screen.getByPlaceholderText('Precio'), { target: { value: '10' } });
    fireEvent.change(screen.getByPlaceholderText('Stock'), { target: { value: '1' } });
    fireEvent.change(screen.getByPlaceholderText('URL de la imagen'), { target: { value: 'http://x.com/img.jpg' } });
    fireEvent.click(screen.getByText('Registrar'));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Error al registrar', variant: 'destructive' })
      );
    });
  });

  it('abre el formulario de edición con los datos del producto', async () => {
    render(<RegisterProductSection />);
    await waitFor(() => expect(screen.getByText('Taza')).toBeInTheDocument());

    fireEvent.click(screen.getAllByText('Editar')[0]);

    expect(screen.getByText('Editar Producto')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Taza')).toBeInTheDocument();
  });

  it('actualiza un producto correctamente', async () => {
    vi.mocked(productAPI.update).mockResolvedValueOnce({});
    render(<RegisterProductSection />);
    await waitFor(() => expect(screen.getByText('Taza')).toBeInTheDocument());

    fireEvent.click(screen.getAllByText('Editar')[0]);
    fireEvent.change(screen.getByDisplayValue('Taza'), { target: { value: 'Taza Actualizada' } });
    fireEvent.click(screen.getByText('Guardar cambios'));

    await waitFor(() => {
      expect(productAPI.update).toHaveBeenCalled();
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Producto actualizado' })
      );
    });
  });

  it('cancela la edición y oculta el formulario', async () => {
    render(<RegisterProductSection />);
    await waitFor(() => expect(screen.getByText('Taza')).toBeInTheDocument());

    fireEvent.click(screen.getAllByText('Editar')[0]);
    expect(screen.getByText('Editar Producto')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Cancelar'));
    expect(screen.queryByText('Editar Producto')).not.toBeInTheDocument();
  });

  it('elimina un producto correctamente', async () => {
    vi.mocked(productAPI.delete).mockResolvedValueOnce({});
    render(<RegisterProductSection />);
    await waitFor(() => expect(screen.getByText('Taza')).toBeInTheDocument());

    fireEvent.click(screen.getAllByText('Eliminar')[0]);

    await waitFor(() => {
      expect(productAPI.delete).toHaveBeenCalledWith('p1');
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Producto eliminado' })
      );
    });
  });

  it('muestra error si productAPI.delete falla', async () => {
    vi.mocked(productAPI.delete).mockRejectedValueOnce(new Error('Delete failed'));
    render(<RegisterProductSection />);
    await waitFor(() => expect(screen.getByText('Taza')).toBeInTheDocument());

    fireEvent.click(screen.getAllByText('Eliminar')[0]);

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({ title: 'Error al eliminar', variant: 'destructive' })
      );
    });
  });
});
