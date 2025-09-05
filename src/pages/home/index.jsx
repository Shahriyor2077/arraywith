import { useFetch } from '../../hooks/useFetch'
import FoodView from '../../components/FoodView'

const Home = () => {
  const {data, error, loading} = useFetch("/users")
  
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Foydalanuvchilar</h2>
      {loading && <div className="text-center text-blue-600">Yuklanmoqda...</div>}
      {error && <div className="text-center text-red-500">Xatolik: {error.message}</div>}
      <FoodView data={data}/>
    </div>
  )
}

export default Home