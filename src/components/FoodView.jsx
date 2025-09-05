import { useNavigate } from "react-router-dom";

const FoodView = ({ data }) => {
  const navigate = useNavigate();
  
  if (!data || !Array.isArray(data)) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((user) => (
        <div
          key={user.id}
          className="border p-4 mb-4 cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => navigate(`/user/${user.id}`)}
        >
          <h3 className="font-semibold text-lg">{user.name}</h3>
          <p className="text-gray-600">@{user.username}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodView;
