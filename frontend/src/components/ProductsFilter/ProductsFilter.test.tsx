import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import ProductFilter from './ProductsFilter';

test('renderiza o componente ProductFilter com os elementos corretos', () => {
  render(<ProductFilter onFilterChange={() => {}} />);

  const input = screen.getByPlaceholderText('Buscar produto ou categoria');
  const img = screen.getByRole('img');

  expect(input).toBeInTheDocument();
  expect(img).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'text');
  expect(input).toHaveAttribute('id', 'filter');
});

test('chama a função onFilterChange quando o valor do input é alterado', () => {
  const onFilterChangeMock = jest.fn();
  render(<ProductFilter onFilterChange={onFilterChangeMock} />);

  const input = screen.getByPlaceholderText('Buscar produto ou categoria');

  fireEvent.change(input, { target: { value: 'Produto A' } });

  expect(onFilterChangeMock).toHaveBeenCalledWith('Produto A');
});