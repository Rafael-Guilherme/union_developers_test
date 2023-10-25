import { useQuery } from "@tanstack/react-query";
//import { useSelector } from "react-redux"
import DashBoardCard from "../../components/DashBoardCard/DashBoardCard";

import "./Dashboard.scss";
//import { RootReducer } from "../../store"
import { api } from "../../services/api";

const Dashboard = () => {
  //const { itens } = useSelector((state: RootReducer) => state.product)
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await api.get("/products/");
      return response.data;
    },
  });

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError || !products) {
    return <p>Ocorreu um erro ao buscar os produtos.</p>;
  }

  if (!Array.isArray(products)) {
    return <p>Dados inválidos recebidos da API.</p>;
  }

  const filterLowProducts = () => {
    const lowProducts = products ? [...products] : [];

    if (lowProducts.length > 0) {
      lowProducts.sort((a, b) => a.quantity - b.quantity);
    }

    return lowProducts;
  };

  const filterExpensiveProducts = () => {
    const expensiveProduct = products ? [...products] : [];

    if (expensiveProduct.length > 0) {
      expensiveProduct.sort((a, b) => {
        const priceA = a.price ? (a.price, 10) : 0;
        const priceB = b.price ? (b.price, 10) : 0;
  
        return priceB - priceA;
      });
    }

    return expensiveProduct;
  };

  const getTotalProducts = () => {
    const totalProducts = products.length;

    return totalProducts;
  };

  const listLowProducts = filterLowProducts();
  const listExpensiveProducts = filterExpensiveProducts();
  const numberOfTotalProducts = getTotalProducts();

  return (
    <>
    {!products ? (
      <p>Carregando...</p>
    ) : (
      <div className="container-dashboard">
        <DashBoardCard
          data-testid="low-product-card"
          title="Produtos com estoque baixo"
          list={listLowProducts}
        />
        <DashBoardCard
          data-testid="expensive-product-card"
          secondary
          title="Produtos mais caros"
          list={listExpensiveProducts}
        />
        <DashBoardCard
          data-testid="total-products"
          terciary
          title="Produtos"
          total={numberOfTotalProducts}
          description="Produtos adicionados"
        />
      </div>
    )}
    </>
  );
};

export default Dashboard;
