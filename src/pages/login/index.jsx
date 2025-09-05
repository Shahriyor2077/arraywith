import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>

      <input
        type="text"
        placeholder="Username"
        className="w-64 px-4 py-2 mb-3 border rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-64 px-4 py-2 mb-6 border rounded-lg"
      />

      <button
        onClick={() => navigate("/")}
        className="w-64 px-6 py-2 mb-3 bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition"
      >
        Go Home
      </button>

      <button
        onClick={() => navigate(-1)}
        className="w-64 px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default Login;
