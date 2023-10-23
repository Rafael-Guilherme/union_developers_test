import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Products from '../pages/Products/Products'
import AddProducts from '../pages/AddProducts/AddProducts'

const RoutesTree = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/add' element={<AddProducts />} />
    </Routes>
  )
}

export default RoutesTree