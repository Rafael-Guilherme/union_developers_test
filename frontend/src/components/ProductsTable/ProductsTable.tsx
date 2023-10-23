import { useNavigate } from "react-router-dom";
import Product from "../../models/Product";
import { priceConvertedToReal } from "../../utils/priceReal";
import ActionButton from "../Button/ActionButton";
import "./ProductsTable.scss";


interface ProductTableProps {
  products: Product[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  const navigate = useNavigate()

  const goToEditPage = (productId: number) => {
    navigate(`${productId}`)
  }

  return (
    <div className="product-table">
      <div className="table-header">
        <p>ID</p>
        <p>Nome</p>
        <p>Categoria</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Ações</p>
      </div>
      <div className="table-body">
        {products.map((product) => (
          <div key={product.id} className="table-row">
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{priceConvertedToReal(parseFloat(product.price || '0'))}</p>
            <p>{product.quantity}</p>
            <div>
              <ActionButton type="button" className="action-button-style" text="Editar" color="blue" onClick={() => goToEditPage(product.id)} />
              <ActionButton type="button" className="action-button-style" text="Remover" color="red" onClick={() => {}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
