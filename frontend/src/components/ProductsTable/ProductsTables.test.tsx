import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import ProductTable from "./ProductsTable";

import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({
  products: [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
  ],
});

const queryClient = new QueryClient();

const products = [
  {
    id: "1",
    name: "Product A",
    category: "Category A",
    price: "10.00",
    quantity: 5,
  },
  {
    id: "2",
    name: "Product B",
    category: "Category B",
    price: "20.00",
    quantity: 3,
  },
];

test("renderiza o componente ProductTable com os elementos corretos", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ProductTable products={products} />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>
  );

  const table = screen.getByRole("table");
  const tableHeader = screen.getByText("ID");
  const editButton = screen.getAllByText("Editar")[0];
  const removeButton = screen.getAllByText("Remover")[0];

  expect(table).toBeInTheDocument();
  expect(tableHeader).toBeInTheDocument();
  expect(editButton).toBeInTheDocument();
  expect(removeButton).toBeInTheDocument();
});

test('abre o modal de confirmação ao clicar em "Remover"', async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ProductTable products={products} />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>
  );

  const removeButton = screen.getAllByText("Remover")[0];

  act(() => {
    fireEvent.click(removeButton);
  });

  await waitFor(() => {
    const modalMessage = screen.queryByText(
      "Tem certeza que deseja remover esse produto?"
    );
    expect(modalMessage).toBeInTheDocument();
  });

  const modal = screen.queryByText(
    "Tem certeza que deseja remover esse produto?"
  );

  const closeButton = screen.getByText("Não");
  const confirmButton = screen.getByText("Sim");

  expect(modal).toBeVisible();
  expect(closeButton).toBeInTheDocument();
  expect(confirmButton).toBeInTheDocument();
});

test('fecha o modal ao clicar em "Não" e não remove o produto', async () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ProductTable products={products} />
        </QueryClientProvider>
      </Provider>
    </MemoryRouter>
  );

  const removeButton = screen.getAllByText("Remover")[0];

  act(() => {
    fireEvent.click(removeButton);
  });

  await waitFor(() => {
    const modalMessage = screen.queryByText(
      "Tem certeza que deseja remover esse produto?"
    );
    expect(modalMessage).toBeInTheDocument();
  });

  const modal = screen.queryByText(
    "Tem certeza que deseja remover esse produto?"
  );

  const closeButton = screen.getByText("Não");

  act(() => {
    fireEvent.click(closeButton);
  });

  expect(modal).not.toBeVisible();
});

test.skip("remove o produto após confirmação no modal", async () => {
    const productIdToRemove = 1; // Use o ID (número) real que você deseja remover
  
    let removedProductId: string | null = null;
  
    render(
      <MemoryRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ProductTable
              products={products}
            />
          </QueryClientProvider>
        </Provider>
      </MemoryRouter>
    );
  
    const removeButton = screen.getAllByText("Remover")[0];
  
    await act(async () => {
      fireEvent.click(removeButton);
    });
  
    await waitFor(() => {
      const modalMessage = screen.queryByText(
        "Tem certeza que deseja remover esse produto?"
      );
      expect(modalMessage).toBeInTheDocument();
    });
  
    const confirmButton = screen.getAllByText("Sim")[0];
  
    await act(async () => {
      fireEvent.click(confirmButton);
    });
  
    await waitFor(() => {
      const modalMessage = screen.queryByText(
        "Tem certeza que deseja remover esse produto?"
      );
      expect(modalMessage).not.toBeInTheDocument();
    });
  
    await act(async () => {
      expect(removedProductId).toBe(productIdToRemove);
    });
  });
  