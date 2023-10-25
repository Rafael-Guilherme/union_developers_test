import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Menu from './components/Menu/Menu'
import RoutesTree from './routes/Routes'

import './App.scss'

const queryClient = new QueryClient()

function App() {

  return (
    <div className='app'>
      <QueryClientProvider client={queryClient}>
        <Menu />
        <RoutesTree />
      </QueryClientProvider>
    </div>
  )
}

export default App
