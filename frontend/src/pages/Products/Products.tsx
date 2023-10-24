import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";
//import { RootReducer } from "../../store";

import { api } from "../../services/api";
import ProductFilter from "../../components/ProductsFilter/ProductsFilter";
import ProductTable from "../../components/ProductsTable/ProductsTable";
import ActionButton from "../../components/Button/ActionButton";

import './Products.scss'
import Product from "../../models/Product";

const Products = () => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate()
  //const { itens } = useSelector((state: RootReducer) => state.product)
  const { data: products, isLoading, isError } = useQuery('products', async () => {
    const response = await api.get('/products');
    return response.data;
  });

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <p>Ocorreu um erro ao buscar os produtos.</p>;
  }

  const getFilteredProducts = () => {
    const filteredProducts = products.filter((product: Product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.category.toLowerCase().includes(filter.toLowerCase())
    );
  
    return filteredProducts;
  }
  

  const filteredProductslist = getFilteredProducts()
  console.log(filteredProductslist)

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleAddProductsPage = () => {
    navigate('/products/add')
  }

  return (
    <div className="products-container">
      <h1 className="products-title">Produtos</h1>
      <ProductFilter onFilterChange={handleFilterChange} />
      <ProductTable products={filteredProductslist} />
      <ActionButton type="button" className="add-button" text="Adicionar produto" color="blue" onClick={handleAddProductsPage}  />
    </div>
  );
}

export default Products