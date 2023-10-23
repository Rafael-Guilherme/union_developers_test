import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Products from '../pages/Products/Products'

const RoutesTree = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
    </Routes>
  )
}

export default RoutesTree