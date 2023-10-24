/// <reference types="vite-plugin-svgr/client" />
import { ChangeEvent } from "react";

import "./ProducstsFilter.scss";

import IconSearch from "../../assets/search.png"

interface ProductFilterProps {
  onFilterChange: (filter: string) => void;
}

const ProductFilter = ({ onFilterChange }: ProductFilterProps) => {
  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="product-filter">
      <label htmlFor="filter"></label>
      <img src={IconSearch} />
      <input
        className="product-filter-input"
        type="text"
        id="filter"
        placeholder="Buscar produto ou categoria"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default ProductFilter;
