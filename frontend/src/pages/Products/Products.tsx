import { useState } from "react";
import ProductFilter from "../../components/ProductsFilter/ProductsFilter";
import ProductTable from "../../components/ProductsTable/ProductsTable";

import './Products.scss'
import ActionButton from "../../components/Button/ActionButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";


const Products = () => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate()
  const { itens } = useSelector((state: RootReducer) => state.product)

  const getFilteredProducts = () => {
    const filteredProducts = itens.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.category.toLowerCase().includes(filter.toLowerCase())
    );
  
    return filteredProducts;
  }
  

  const filteredProductslist = getFilteredProducts()

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