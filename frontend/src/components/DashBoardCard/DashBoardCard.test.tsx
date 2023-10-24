import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import DashBoardCard from './DashBoardCard';

test('renderiza o componente DashBoardCard com título e classes de estilo corretas', () => {
  render(<DashBoardCard title="Título do Card" />);
  const card = screen.getByText('Título do Card');
  expect(card).toBeInTheDocument();
  expect(card).toHaveClass('title-card');
});

test('renderiza o componente DashBoardCard com lista de produtos', () => {
  const productList = [
    { name: 'Produto 1', category: 'any', price: '10.00', quantity: '5' },
    { name: 'Produto 2', category: 'any', price: '20.00', quantity: '3' },
  ];

  render(<DashBoardCard title="Título do Card" list={productList} />);

  for (const product of productList) {
    const productName = screen.getByText(`${product.name}:`);
    const productQuantity = screen.getByText(product.quantity);
    expect(productName).toBeInTheDocument();
    expect(productQuantity).toBeInTheDocument();
  }
});

test('renderiza o componente DashBoardCard com estilo secundário', () => {
  render(<DashBoardCard title="Título do Card" secondary />);
  const card = screen.getByText('Título do Card');
  expect(card).toHaveClass('title-card');
});

test('renderiza o componente DashBoardCard com descrição terciária', () => {
  render(<DashBoardCard title="Título do Card" terciary total={10} description="Total de Produtos" />);
  const totalValue = screen.getByText('10');
  const totalDescription = screen.getByText('Total de Produtos');
  expect(totalValue).toBeInTheDocument();
  expect(totalDescription).toBeInTheDocument();
});
