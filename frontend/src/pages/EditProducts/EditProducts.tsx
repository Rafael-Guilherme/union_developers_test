import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddProductsSchemaValidation } from "../../schema/AddProductsShemaValidation";
import { toast } from "react-toastify";
//import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
//import { edit } from "../../store/reducers/products";

import InputAddProducts from "../../components/InputAddProducts/InputAddProducts";

import "./EditProducts.scss";
import { motion } from "framer-motion";
//import { RootReducer } from "../../store";

export type ProductsData = {
  name: string;
  category: string;
  price: string;
  quantity: string;
};

const EditProducts = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductsData>({
    resolver: yupResolver(AddProductsSchemaValidation),
  });
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  //const { itens } = useSelector((state: RootReducer) => state.product);
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data: productById } = useQuery<ProductsData>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await api.get(`/products/${id}`);
      return response.data;
    },
  });

  //const idString = id || ""

  // const productInformation = itens.find(
  //   (product) => product.id === idString
  // );

  const onSubmit = async (data: ProductsData) => {
    const quantity = parseInt(data.quantity);

    try {
      const formattedData = {
        name: data.name,
        category: data.category,
        price: data.price,
        quantity: quantity,
      };

      await api.put(`products/${id}`, formattedData);

      // dispatch(edit({
      //   id: idString,
      //   ...formattedData
      // })),
      queryClient.invalidateQueries();
      toast.success("Produto atualizado com sucesso no banco de dados!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(
        "Ocorreu um erro na atualização do seu produto, tente novamente!"
      );
    }
  };

  return (
    <motion.div
      className="container-edit-products"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <h1>Editar Produto</h1>
      {!productById?.category ? (
        <p>Carregando...</p>
      ) : (
        <>
          <p>{productById?.name}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue={productById?.name}
              render={({ field }) => (
                <>
                  <InputAddProducts
                    label="Nome"
                    name="name"
                    placeholder="Nome do produto"
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                  />
                  {errors.name?.message}
                </>
              )}
            />
            <Controller
              name="category"
              control={control}
              defaultValue={productById?.category}
              render={({ field }) => (
                <>
                  <InputAddProducts
                    label="Categoria"
                    name="category"
                    placeholder="Categoria do produto"
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                  />
                  {errors.category?.message}
                </>
              )}
            />
            <Controller
              name="price"
              control={control}
              defaultValue={productById?.price}
              render={({ field }) => (
                <>
                  <InputAddProducts
                    label="Preço"
                    name="price"
                    placeholder="0"
                    type="number"
                    value={field.value}
                    onChange={field.onChange}
                  />
                  {errors.price?.message}
                </>
              )}
            />
            <Controller
              name="quantity"
              control={control}
              defaultValue={productById?.quantity}
              render={({ field }) => (
                <>
                  <InputAddProducts
                    label="Quantidade"
                    name="quantity"
                    placeholder="0"
                    type="number"
                    value={field.value}
                    onChange={field.onChange}
                  />
                  {errors.quantity?.message}
                </>
              )}
            />
            <div className="container-button">
              <motion.button
                className="edit-product-button"
                type="submit"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                Atualizar
              </motion.button>
            </div>
          </form>
        </>
      )}
    </motion.div>
  );
};

export default EditProducts;
