import "@testing-library/jest-dom";
import { render, fireEvent, screen } from '@testing-library/react';
import ActionButton from './ActionButton';

test('renderiza o componente ActionButton com as classes de estilo corretas', () => {
  render(<ActionButton color="blue" text="Clique em mim" type="button" />);

  const button = screen.getByRole('button');

  expect(button).toHaveClass('action-button');
  expect(button).toHaveClass('blue-button');
  expect(button).toHaveTextContent('Clique em mim');
});

test('chama a função onClick quando o botão é clicado', () => {
  const onClickMock = jest.fn();
  render(<ActionButton color="red" text="Clique em mim" onClick={onClickMock} type="button" />);

  const button = screen.getByRole('button');

  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test('aceita uma classe personalizada', () => {
  render(<ActionButton color="gray" text="Clique em mim" className="custom-class" type="button" />);

  const button = screen.getByRole('button');

  expect(button).toHaveClass('custom-class');
});
