import { useFetch } from "../../hooks/useFetch";
import PostsView from "../../components/PostsView";

const About = () => {
  const { data, loading, error } = useFetch("/posts");


  return (
    <div className="p-4">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <h2>Posts</h2>
      <PostsView data={data || [] } />
    </div>
  );
};

export default About;