import { useState } from "react";
import ProductFilter from "../../components/ProductsFilter/ProductsFilter";
import ProductTable from "../../components/ProductsTable/ProductsTable";

import './Products.scss'
import ActionButton from "../../components/Button/ActionButton";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, nome: "Produto 1", categoria: "Categoria A", preço: 10, quantidade: 5 },
  { id: 2, nome: "Produto 2", categoria: "Categoria B", preço: 20, quantidade: 3 },
  { id: 3, nome: "Produto 3", categoria: "Categoria A", preço: 15, quantidade: 7 },
];

const Products = () => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate()

  const filteredProducts = products.filter(
    (product) =>
      product.nome.toLowerCase().includes(filter.toLowerCase()) ||
      product.categoria.toLowerCase().includes(filter.toLowerCase())
  );

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
      <ProductTable products={filteredProducts} />
      <ActionButton className="add-button" text="Adicionar produto" color="blue" onClick={handleAddProductsPage}  />
    </div>
  );
}

export default Products