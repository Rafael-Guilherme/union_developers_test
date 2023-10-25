import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AddProducts from "./AddProducts";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({});

const renderComponent = () => {
  return render(
    <MemoryRouter>
        <Provider store={store}>
          <AddProducts />
        </Provider>
    </MemoryRouter>
  );
};

describe("AddProducts", () => {
  it("renderiza o formulário corretamente", () => {
    renderComponent();

    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
    expect(screen.getByLabelText("Categoria")).toBeInTheDocument();
    expect(screen.getByLabelText("Preço")).toBeInTheDocument();
    expect(screen.getByLabelText("Quantidade")).toBeInTheDocument();
    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });

  it("valida o envio de dados do formulário", async () => {
    renderComponent();

    userEvent.type(screen.getByLabelText("Nome"), "Produto de Teste");
    userEvent.type(screen.getByLabelText("Categoria"), "Categoria de Teste");
    userEvent.type(screen.getByLabelText("Preço"), "10");
    userEvent.type(screen.getByLabelText("Quantidade"), "5");

    fireEvent.click(screen.getByText("Adicionar"));

    expect(window.location.pathname).toBe('/');
});
});
