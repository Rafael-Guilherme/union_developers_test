import "@testing-library/jest-dom";
import { render, waitFor, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('react-query', () => ({
  useQuery: () => ({
    data: [
      { id: 1, name: 'Produto 1', category: 'any', quantity: 10, price: 20.0 },
      { id: 2, name: 'Produto 2', category: 'any', quantity: 5, price: 30.0 },
    ],
    isLoading: false,
    isError: false,
  }),
}));

test('Não renderiza a mensagem "Carregando..." durante o carregamento', () => {
    const { queryByText } = render(<Dashboard />);
    expect(queryByText('Carregando...')).toBeNull();
});

test('Renderiza os produtos com estoque baixo', async () => {
    render(<Dashboard />);
    await waitFor(() => {
      expect(screen.getByText('10')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
    });
  });
  
  test('Renderiza os produtos mais caros', async () => {
    render(<Dashboard />);
    await waitFor(() => {
      expect(screen.getByText('R$ 20,00')).toBeInTheDocument();
      expect(screen.getByText('R$ 30,00')).toBeInTheDocument();
    });
  });
  
  test('Renderiza o total de produtos', async () => {
    render(<Dashboard />);
    const totalProducts = screen.getByTestId('total-products');
    expect(totalProducts).toBeInTheDocument();
  
    expect(screen.getByText('2')).toBeInTheDocument(); 
  });
  
