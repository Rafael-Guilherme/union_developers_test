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
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [productIdToRemove, setProductIdToRemove] = useState<number | null>(null);

  const goToEditPage = (productId: number) => {
    navigate(`${productId}`)
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
              <ActionButton type="button" className="action-button-style" text="Remover" color="red" onClick={() => openModal(product.id)} />
            </div>
          </div>
        ))}
      </div>
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
    </div>
  );
};

export default ProductTable;
