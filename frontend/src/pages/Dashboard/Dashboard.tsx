import { useSelector } from "react-redux"
import DashBoardCard from "../../components/DashBoardCard/DashBoardCard"

import "./Dashboard.scss"
import { RootReducer } from "../../store"



const Dashboard = () => {
    const { itens } = useSelector((state: RootReducer) => state.product)

    const filterLowProducts = () => {
        const lowProducts = itens

        lowProducts.sort((a, b) => parseInt(a.quantity) - parseInt(b.quantity))

        return lowProducts
    }

    const filterExpensiveProducts = () => {
        const expensiveProduct = itens

        expensiveProduct.sort((a, b) => {
            const priceA = a.price ? parseInt(a.price, 10) : 0; 
            const priceB = b.price ? parseInt(b.price, 10) : 0; 
        
            return priceB - priceA;
          });

        return expensiveProduct
    }

    const getTotalProducts = () => {
        const totalProducts = itens.length

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