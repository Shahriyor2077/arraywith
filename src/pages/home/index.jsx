import { useFetch } from '../../hooks/useFetch'
import FoodView from '../../components/FoodView'

const Home = () => {
  const {data, error, loading} = useFetch("/users")
  if(loading)return <p>Loading...</p>
  if(error)return <p>Error: {error.message}</p>
  
  return (
    <div className='p-4 '>
      <h2>Home</h2>
      <FoodView data={data || []}/>
    </div>
  )
}

export default Home