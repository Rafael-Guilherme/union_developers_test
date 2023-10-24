import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MenuMobile from "./MenuMobile";

test("renderiza o componente MenuMobile", () => {
  render(
    <MemoryRouter>
      <MenuMobile />
    </MemoryRouter>
  );
  const menu = screen.getByTestId("menu-mobile");
  expect(menu).toBeInTheDocument();
});

// Teste de toggle do menu
test("altera o estado do menu ao clicar no botão", () => {
  render(
    <MemoryRouter>
      <MenuMobile />
    </MemoryRouter>
  );
  const button = screen.getByTestId("toggle-button");
  const menu = screen.getByTestId("menu-mobile");

  expect(menu).toBeVisible();
  fireEvent.click(button);
  expect(menu).toBeVisible();
  expect(button).not.toBeVisible()
});

test("destaca o item de menu ativo com base na localização atual", () => {
  render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <MenuMobile />
    </MemoryRouter>
  );
  const button = screen.getByTestId("toggle-button");
  const menu = screen.getByTestId("menu-mobile");

  expect(menu).toBeVisible();
  fireEvent.click(button);

  const dashboardMenuItem = screen.getByText("Dashboard");
  const productsMenuItem = screen.getByText("Produtos");

  expect(dashboardMenuItem).toHaveClass("active");
  expect(productsMenuItem).not.toHaveClass("active");
});
