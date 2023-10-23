import ActionButton from "../../components/Button/ActionButton"
import InputAddProducts from "../../components/InputAddProducts/InputAddProducts"

import './AddProducts.scss'

const AddProducts = () => {
  return (
    <div className="container-add-products">
      <h1>Adicionar Produtos</h1>
      <form>
        <InputAddProducts 
          label="Nome"
          name="name"
          placeholder="Nome do produto"
          type="text"
          value=""
          onChange={() => {}}
        />
        <InputAddProducts 
          label="Categoria"
          name="category"
          placeholder="Categoria do produto"
          type="text"
          value=""
          onChange={() => {}}
        />
        <InputAddProducts 
          label="Preço"
          name="price"
          placeholder="0"
          type="text"
          value=""
          onChange={() => {}}
        />
        <InputAddProducts 
          label="Quantidade"
          name="quantity"
          placeholder="0"
          type="text"
          value=""
          onChange={() => {}}
        />
        <div className="container-button">
          <ActionButton className="add-product-button" text="Adicionar" color="blue" onClick={() => {}} />
        </div>
      </form>
    </div>
  )
}

export default AddProducts