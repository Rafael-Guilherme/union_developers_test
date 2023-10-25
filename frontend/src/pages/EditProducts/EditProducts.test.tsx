import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EditProducts from "./EditProducts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({});

const queryClient = new QueryClient();

jest.mock("react-query", () => ({
  useQueryClient: () => queryClient,
}));

test("Renderiza a página de edição de produtos", async () => {
  render(
    <MemoryRouter initialEntries={["/products/1"]}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <EditProducts />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByText("Editar Produto")).toBeInTheDocument();

  expect(screen.getByText("Nome")).toBeInTheDocument();
  expect(screen.getByText("Categoria")).toBeInTheDocument();
  expect(screen.getByText("Preço")).toBeInTheDocument();
  expect(screen.getByText("Quantidade")).toBeInTheDocument();

  expect(screen.getByText("Atualizar")).toBeInTheDocument();
});

test("Preenche os campos de edição de produtos", async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <EditProducts />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByDisplayValue("Nome do Produto")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Categoria do Produto")).toBeInTheDocument();
    expect(screen.getByDisplayValue("0")).toBeInTheDocument(); 
    expect(screen.getByDisplayValue("0")).toBeInTheDocument(); 
  });
});

test("Atualiza os campos de edição de produtos", async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <EditProducts />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>
  );

  const nameInput = screen.getByPlaceholderText("Nome do produto");
  const categoryInput = screen.getByPlaceholderText("Categoria do produto");
  const priceInput = screen.getByPlaceholderText("0");
  const quantityInput = screen.getByPlaceholderText("0");

  fireEvent.change(nameInput, { target: { value: "Novo Nome do Produto" } });
  fireEvent.change(categoryInput, { target: { value: "Nova Categoria do Produto" } });
  fireEvent.change(priceInput, { target: { value: "25" } }); 
  fireEvent.change(quantityInput, { target: { value: "15" } });

  const submitButton = screen.getByText("Atualizar");
  fireEvent.click(submitButton);
});
