import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { api } from "../../services/api";

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
  const [productIdToRemove, setProductIdToRemove] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const deleteProduct = useMutation({
    mutationFn: async (productId: string) => {
      const response = await api.delete(`/products/${productId}`);
      return response.data;
    }
  });

  const goToEditPage = (productId: string) => {
    navigate(`${productId}`);
  }

  const openModal = (productId: string) => {
    setProductIdToRemove(productId);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    setProductIdToRemove(null);
  }

  const confirmAndRemove = async () => {
    if (productIdToRemove) {
      await deleteProduct.mutateAsync(productIdToRemove)
      queryClient.invalidateQueries();
      dispatch(remove(productIdToRemove));
      toast.success('Produto removido com sucesso do banco de dados!');

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
              <motion.button
                className="action-button-style button-gray"
                type="button"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                onClick={closeModal} 
              >
                Não
              </motion.button>
              <motion.button
                className="action-button-style button-red"
                type="button"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                onClick={confirmAndRemove} 
              >
                Sim
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </table>
  );
};

export default ProductTable;
