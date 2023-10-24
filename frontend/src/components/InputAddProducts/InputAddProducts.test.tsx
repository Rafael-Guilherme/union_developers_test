import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import InputAddProducts from './InputAddProducts';

test('renderiza o componente InputAddProducts com as propriedades corretas', () => {
  render(
    <InputAddProducts
      label="Nome do Produto"
      type="text"
      placeholder="Digite o nome"
      name="productName"
      value=""
      onChange={() => {}}
    />
  );

  const label = screen.getByText('Nome do Produto');
  const input = screen.getByPlaceholderText('Digite o nome');

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'text');
  expect(input).toHaveAttribute('name', 'productName');
});

test('chama a função onChange quando o valor do input é alterado', () => {
  const onChangeMock = jest.fn();
  render(
    <InputAddProducts
      label="Quantidade"
      type="number"
      placeholder="Digite a quantidade"
      name="quantity"
      value=""
      onChange={onChangeMock}
    />
  );

  const input = screen.getByPlaceholderText('Digite a quantidade');

  fireEvent.change(input, { target: { value: '10' } });

  expect(onChangeMock).toHaveBeenCalled();
});