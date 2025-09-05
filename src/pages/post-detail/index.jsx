import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const PostDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/posts/${id}`);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-blue-600 text-lg">Ma'lumotlar yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p className="text-xl">Xatolik: {error.message}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-xl">Post topilmadi</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          {data.title}
        </h1>
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            Post ID: {data.id}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm ml-2">
            User ID: {data.userId}
          </span>
        </div>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            {data.body}
          </p>
        </div>
        <div className="mt-6 pt-4 border-t">
          <button 
            onClick={() => window.history.back()}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            ← Orqaga qaytish
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;