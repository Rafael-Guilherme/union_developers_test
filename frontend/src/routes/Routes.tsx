import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Products from '../pages/Products/Products'
import AddProducts from '../pages/AddProducts/AddProducts'
import EditProducts from '../pages/EditProducts/EditProducts'

const RoutesTree = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/add' element={<AddProducts />} />
        <Route path='/products/:id' element={<EditProducts />} />
    </Routes>
  )
}

export default RoutesTree