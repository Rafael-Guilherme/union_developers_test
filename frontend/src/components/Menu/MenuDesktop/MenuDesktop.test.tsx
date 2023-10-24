import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MenuDesktop from "./MenuDesktop";

test("renderiza o componente MenuDesktop", () => {
  render(
    <MemoryRouter>
      <MenuDesktop />
    </MemoryRouter>
  );
  const menu = screen.getByTestId("menu-desktop");
  expect(menu).toBeInTheDocument();
});

// Teste de toggle do menu
test("altera o estado do menu ao clicar no botão", () => {
  render(
    <MemoryRouter>
      <MenuDesktop />
    </MemoryRouter>
  );
  const button = screen.getByTestId("toggle-button");
  const menu = screen.getByTestId("menu-desktop");

  expect(menu).toBeVisible();
  fireEvent.click(button);
  expect(menu).not.toBeVisible();
  fireEvent.click(button);
  expect(menu).not.toBeVisible();
});

test("destaca o item de menu ativo com base na localização atual", () => {
  render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <MenuDesktop />
    </MemoryRouter>
  );

  const dashboardMenuItem = screen.getByText("Dashboard");
  const productsMenuItem = screen.getByText("Produtos");

  expect(dashboardMenuItem).toHaveClass("active");
  expect(productsMenuItem).not.toHaveClass("active");
});
