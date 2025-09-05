
import { useNavigate } from "react-router-dom";

const PostsView = ({ data }) => {
  const navigate = useNavigate();

  if (!data || !Array.isArray(data)) {
    return (
      <div className="text-center text-gray-500 py-12">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
        </div>
        <p className="mt-4">Ma'lumotlar yuklanmoqda...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        <p className="text-lg">Hech qanday post topilmadi</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((post) => (
        <div
          key={post.id}
          className="border p-4 mb-4 cursor-pointer hover:shadow-md transition-shadow rounded-lg bg-white"
          onClick={() => navigate(`/post/${post.id}`)}
        >
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsView;
