import Menu from './components/Menu/Menu'
import Dashboard from './pages/Dashboard/Dashboard'
import Products from './pages/Products/Products'

import './App.scss'

function App() {

  return (
    <div className='app'>
      <Menu />
      <Dashboard />
      <Products />
    </div>
  )
}

export default App
