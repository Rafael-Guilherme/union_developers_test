import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { AddProductsSchemaValidation } from '../../schema/AddProductsShemaValidation'
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from "react-router-dom";
//import { useQueryClient } from "react-query";
import { api } from "../../services/api";
import { useDispatch } from "react-redux";
import { add } from "../../store/reducers/products";

import ActionButton from "../../components/Button/ActionButton";
import InputAddProducts from "../../components/InputAddProducts/InputAddProducts";


import "./AddProducts.scss";

export type ProductsData = {
  name: string;
  category: string;
  price: string;
  quantity: string;
};

const AddProducts = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<ProductsData>({
    resolver: yupResolver(AddProductsSchemaValidation)
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //const queryClient = useQueryClient()

  const onSubmit = async (data: ProductsData) => {
    const quantity = parseInt(data.quantity)

    try {
      const formattedData = {
        name: data.name,
        category: data.category,
        price: data.price,
        quantity: quantity
      };

      await api.post('/products', formattedData);
  
      dispatch(add({
        id: uuidv4(),
        ...formattedData
      })),
      toast.success('Produto cadastrado com sucesso no banco de dados!');
      //queryClient.invalidateQueries('products');
      
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)
    } catch (error) {
      console.log(error)
      toast.error("Ocorreu um erro no cadastro do seu produto, tente novamente!")
    }
  }

  return (
    <div className="container-add-products">
      <h1>Adicionar Produtos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
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
          defaultValue=""
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
          defaultValue="0"
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
          defaultValue="0"
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
          <ActionButton
            className="add-product-button"
            text="Adicionar"
            color="blue"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
