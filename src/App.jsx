
import AppRouter from './pages'

const App = () => {
  console.log(import.meta.env.VITE_LAYLO);
  
  return (<AppRouter/>)
}

export default App