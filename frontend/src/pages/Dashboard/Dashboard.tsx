import { useQuery } from "react-query"
//import { useSelector } from "react-redux"
import DashBoardCard from "../../components/DashBoardCard/DashBoardCard"

import "./Dashboard.scss"
//import { RootReducer } from "../../store"
import { api } from "../../services/api"


const Dashboard = () => {
    //const { itens } = useSelector((state: RootReducer) => state.product)
    const { data: products, isLoading, isError } = useQuery('products', async () => {
      const response = await api.get('/products');
      return response.data;
    });
  
    if (isLoading) {
      return <p>Carregando...</p>;
    }
  
    if (isError) {
      return <p>Ocorreu um erro ao buscar os produtos.</p>;
    }

    const filterLowProducts = () => {
        const lowProducts = products ? [...products] : []
      
        lowProducts.sort((a, b) => (a.quantity) - (b.quantity))
      
        return lowProducts
      }
      
      const filterExpensiveProducts = () => {
        const expensiveProduct = products ? [...products] : []
      
        expensiveProduct.sort((a, b) => {
          const priceA = a.price ? (a.price, 10) : 0 
          const priceB = b.price ? (b.price, 10) : 0 
      
          return priceB - priceA
        })
      
        return expensiveProduct
      }

    const getTotalProducts = () => {
        const totalProducts = products.length

        return totalProducts
    }

    const listLowProducts = filterLowProducts()
    const listExpensiveProducts = filterExpensiveProducts()
    const numberOfTotalProducts = getTotalProducts()

  return (
    <div className="container-dashboard">
        <DashBoardCard title="Produtos com estoque baixo" list={listLowProducts} />
        <DashBoardCard secondary title="Produtos mais caros" list={listExpensiveProducts} />
        <DashBoardCard terciary title="Produtos" total={numberOfTotalProducts} description="Produtos adicionados"  />
    </div>
  )
}

export default Dashboard