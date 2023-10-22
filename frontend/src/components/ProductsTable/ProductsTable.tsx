import ActionButton from "../Button/ActionButton";
import "./ProductsTable.scss";

interface Product {
  id: number;
  nome: string;
  categoria: string;
  preço: number;
  quantidade: number;
}

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
            <div>{product.nome}</div>
            <div>{product.categoria}</div>
            <div>{product.preço}</div>
            <div>{product.quantidade}</div>
            <div>
              <ActionButton className="action-button-style" text="Editar" color="blue" onClick={() => {}} />
              <ActionButton className="action-button-style" text="Remover" color="red" onClick={() => {}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
