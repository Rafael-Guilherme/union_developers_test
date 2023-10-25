import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Products from "./Products";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({});

const queryClient = new QueryClient();

jest.mock("react-query", () => ({
  useQuery: () => {
    const data = [
      {
        id: 1,
        name: "Product A",
        category: "Category A",
        quantity: 10,
        price: 20.0,
      },
      {
        id: 2,
        name: "Product B",
        category: "Category B",
        quantity: 5,
        price: 30.0,
      },
      {
        id: 3,
        name: "Product C",
        category: "Category C",
        quantity: 8,
        price: 50.0,
      },
    ];
    return { data, isLoading: false, isError: false };
  },
}));

test("Renderiza a página de produtos", async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <Products />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>
  );

  // Verifica se o título da página está presente
  expect(screen.getByText("Produtos")).toBeInTheDocument();

  // Verifica se o filtro de produtos está presente
  expect(
    screen.getByPlaceholderText("Filtrar produtos...")
  ).toBeInTheDocument();

  // Verifica se a tabela de produtos está presente
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();

  // Verifica se o botão "Adicionar produto" está presente
  expect(screen.getByText("Adicionar produto")).toBeInTheDocument();
});

test("Renderiza a lista de produtos corretamente", async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <Products />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>
  );

  // Verifica se os produtos na lista são renderizados corretamente
  await waitFor(() => {
    expect(screen.getByText("Product A")).toBeInTheDocument();
    expect(screen.getByText("Category A")).toBeInTheDocument();
    expect(screen.getByText("Product B")).toBeInTheDocument();
    expect(screen.getByText("Category B")).toBeInTheDocument();
    expect(screen.getByText("Product C")).toBeInTheDocument();
    expect(screen.getByText("Category C")).toBeInTheDocument();
  });
});

test("Filtra produtos corretamente", async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <Products />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>
  );

  // Digita um filtro no campo de filtro
  const filterInput = screen.getByPlaceholderText("Filtrar produtos...");
  fireEvent.change(filterInput, { target: { value: "Product A" } });

  // Verifica se o produto filtrado está presente na lista
  await waitFor(() => {
    expect(screen.getByText("Product A")).toBeInTheDocument();
  });

  // Verifica se outros produtos não filtrados não estão presentes na lista
  expect(screen.queryByText("Product B")).toBeNull();
  expect(screen.queryByText("Product C")).toBeNull();
});

test("Redireciona para a página de adição de produtos", async () => {
  const { container } = render(
    <MemoryRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <Products />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>
  );

  // Clica no botão "Adicionar produto"
  const addButton = screen.getByText("Adicionar produto");
  fireEvent.click(addButton);

  // Verifica se a rota foi alterada para a página de adição de produtos
  expect(container.innerHTML).toMatch("Adicionar um produto");
});
