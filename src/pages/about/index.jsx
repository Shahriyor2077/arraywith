import { useFetch } from "../../hooks/useFetch";
import PostsView from "../../components/PostsView";

const About = () => {
  const { data, loading, error } = useFetch("/posts");

  if (loading) {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Postlar</h2>
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-blue-600 text-lg">Ma'lumotlar yuklanmoqda...</p>
          </div>
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Postlar</h2>
        <div className="text-center text-red-500 py-12">
          <p className="text-xl">Xatolik: {error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Postlar</h2>
      <PostsView data={data} />
    </div>
  );
};

export default About;