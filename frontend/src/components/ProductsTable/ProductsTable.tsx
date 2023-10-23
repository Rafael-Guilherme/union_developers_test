import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Product from "../../models/Product";
import { priceConvertedToReal } from "../../utils/priceReal";
import ActionButton from "../Button/ActionButton";

import { remove } from "../../store/reducers/products"; 

import "./ProductsTable.scss";

interface ProductTableProps {
  products: Product[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [productIdToRemove, setProductIdToRemove] = useState<number | null>(null);

  const goToEditPage = (productId: number) => {
    navigate(`${productId}`);
  }

  const openModal = (productId: number) => {
    setProductIdToRemove(productId);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    setProductIdToRemove(null);
  }

  const confirmAndRemove = () => {
    if (productIdToRemove) {
      dispatch(remove(productIdToRemove));
      closeModal();
    }
  }

  return (
    <table className="product-table">
      <thead>
        <tr className="table-header">
          <th>ID</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr className="table-row" key={product.id}>
            <td data-title="ID">{product.id}</td>
            <td data-title="Nome">{product.name}</td>
            <td data-title="Categoria">{product.category}</td>
            <td data-title="Preço">{priceConvertedToReal(parseFloat(product.price || '0'))}</td>
            <td data-title="Quantidade">{product.quantity}</td>
            <td data-title="Ações">
              <ActionButton type="button" className="action-button-style" text="Editar" color="blue" onClick={() => goToEditPage(product.id)} />
              <ActionButton type="button" className="action-button-style" text="Remover" color="red" onClick={() => openModal(product.id)} />
            </td>
          </tr>
        ))}
      </tbody>
      {showModal && (
        <div className="modal-background">
          <div className="modal">
            <p>Tem certeza que deseja remover esse produto?</p>
            <div className="line" />
            <div className="modal-actions">
              <ActionButton className="action-button-style" type="button" text="Não" color="gray" onClick={closeModal} />
              <ActionButton className="action-button-style" type="button" text="Sim" color="red" onClick={confirmAndRemove} />
            </div>
          </div>
        </div>
      )}
    </table>
  );
};

export default ProductTable;
