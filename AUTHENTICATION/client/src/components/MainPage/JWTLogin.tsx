import { useNavigate } from "react-router-dom";
export const JWTLogin = () => {
  const navigate = useNavigate();
  const handleJWT = () => {
    navigate("/jwt-login");
  };
  return (
    <button
      onClick={handleJWT}
      className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-lg rounded-lg border-4 border-green-300 shadow-lg shadow-green-500/50 transform hover:scale-105 transition-all duration-200 hover:shadow-green-500/70 active:scale-95"
    >
      <div className="flex items-center justify-center space-x-2">
        <span>🎫</span>
        <span>JWT BASED</span>
      </div>
    </button>
  );
};
