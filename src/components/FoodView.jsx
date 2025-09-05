import { useNavigate } from "react-router-dom";

const FoodView = ({ data }) => {
  const navigate=useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" >
      {data?.map((user) => (
        <div
          key={user.id}
          className="border p-4 mb-4 cursor-pointer"
          onClick={() => navigate(`/user/${user.id}`)}
        >
          <h3>{user.name}</h3>
          <p>@{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodView;
