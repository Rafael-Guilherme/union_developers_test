import { useSelector } from "react-redux"
import DashBoardCard from "../../components/DashBoardCard/DashBoardCard"

import "./Dashboard.scss"
import { RootReducer } from "../../store"

// const lowProducts = [
//     {
//         "name": "Iphone",
//         "value": "2"
//     },
//     {
//         "name": "Smartv Samsung",
//         "value": "4"
//     },
//     {
//         "name": "Bola da Copa",
//         "value": "6"
//     },
//     {
//         "name": "Tênis Nike",
//         "value": "8"
//     },
//     {
//         "name": "Smarthphone Samsung Galaxy M23",
//         "value": "10"
//     }
// ]

// const expensiveProducst = [
//     {
//         "name": "Iphone",
//         "value": "8000"
//     },
//     {
//         "name": "Smartv Samsung",
//         "value": "4500"
//     },
//     {
//         "name": "Bola da Copa",
//         "value": "299"
//     },
//     {
//         "name": "Tênis Nike",
//         "value": "1280"
//     },
//     {
//         "name": "Smarthphone Samsung Galaxy M23",
//         "value": "2500"
//     }
// ]

//lowProducts.sort((a, b) => parseInt(a.value) - parseInt(b.value))

//expensiveProducst.sort((a,b) =>  parseInt(b.value) - parseInt(a.value))

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

    const listLowProducts = filterLowProducts()
    const listExpensiveProducts = filterExpensiveProducts()

  return (
    <div className="container-dashboard">
        <DashBoardCard title="Produtos com estoque baixo" list={listLowProducts} />
        <DashBoardCard secondary title="Produtos mais caros" list={listExpensiveProducts} />
        <DashBoardCard terciary title="Produtos" total="12" description="Produtos adicionados"  />
    </div>
  )
}

export default Dashboard