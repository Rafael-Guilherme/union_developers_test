import DashBoardCard from "../../components/DashBoardCard/DashBoardCard"

import "./Dashboard.scss"

const lowProducts = [
    {
        "name": "Iphone",
        "value": "2"
    },
    {
        "name": "Smartv Samsung",
        "value": "4"
    },
    {
        "name": "Bola da Copa",
        "value": "6"
    },
    {
        "name": "Tênis Nike",
        "value": "8"
    },
    {
        "name": "Smarthphone Samsung Galaxy M23",
        "value": "10"
    }
]

const expensiveProducst = [
    {
        "name": "Iphone",
        "value": "8000"
    },
    {
        "name": "Smartv Samsung",
        "value": "4500"
    },
    {
        "name": "Bola da Copa",
        "value": "299"
    },
    {
        "name": "Tênis Nike",
        "value": "1280"
    },
    {
        "name": "Smarthphone Samsung Galaxy M23",
        "value": "2500"
    }
]

lowProducts.sort((a, b) => parseInt(a.value) - parseInt(b.value))

expensiveProducst.sort((a,b) =>  parseInt(b.value) - parseInt(a.value))

const Dashboard = () => {
  return (
    <div className="container-dashboard">
        <DashBoardCard title="Produtos com estoque baixo" list={lowProducts} />
        <DashBoardCard secondary title="Produtos mais caros" list={expensiveProducst} />
        <DashBoardCard terciary title="Produtos" total="12" description="Produtos adicionados"  />
    </div>
  )
}

export default Dashboard