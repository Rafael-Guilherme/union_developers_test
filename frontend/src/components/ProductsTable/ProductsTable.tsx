import Product from "../../models/Product";
import { priceConvertedToReal } from "../../utils/priceReal";
import ActionButton from "../Button/ActionButton";
import "./ProductsTable.scss";


interface ProductTableProps {
  products: Product[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <div className="product-table">
      <div className="table-header">
        <div>ID</div>
        <div>Nome</div>
        <div>Categoria</div>
        <div>Preço</div>
        <div>Quantidade</div>
        <div>Ações</div>
      </div>
      <div className="table-body">
        {products.map((product) => (
          <div key={product.id} className="table-row">
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{product.category}</div>
            <div>{priceConvertedToReal(parseFloat(product.price || '0'))}</div>
            <div>{product.quantity}</div>
            <div>
              <ActionButton type="button" className="action-button-style" text="Editar" color="blue" onClick={() => {}} />
              <ActionButton type="button" className="action-button-style" text="Remover" color="red" onClick={() => {}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
