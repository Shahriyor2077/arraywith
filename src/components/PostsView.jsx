
import { useNavigate } from "react-router-dom";

const PostsView = ({ data }) => {
  const navigate = useNavigate();

  if (!data || !Array.isArray(data)) {
    return <div className="text-center text-gray-500">Ma'lumotlar yuklanmoqda...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((post) => (
        <div
          key={post.id}
          className="border p-4 mb-4 cursor-pointer hover:shadow-md transition-shadow rounded-lg"
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
