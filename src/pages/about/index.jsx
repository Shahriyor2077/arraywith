import { useFetch } from "../../hooks/useFetch";
import PostsView from "../../components/PostsView";

const About = () => {
  const { data, loading, error } = useFetch("/posts");

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Posts</h2>
      {loading && <div className="text-center text-blue-600">Loading...</div>}
      {error && <div className="text-center text-red-500">Error: {error.message}</div>}
      <PostsView data={data} />
    </div>
  );
};

export default About;