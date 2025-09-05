
import { useNavigate } from "react-router-dom";

const PostsView = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data?.map((post) => (
        <div
          key={post.id}
          className="border p-4 mb-4 cursor-pointer"
          onClick={() => navigate(`/post/${post.id}`)}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsView;
