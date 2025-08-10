import { useNavigate } from "react-router-dom";
export const LocalLogin = () => {
  const navigate = useNavigate();
  const handleLocalLogin = () => {
    navigate("/local-login");
  };
  return (
    <button
      onClick={handleLocalLogin}
      className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-lg rounded-lg border-4 border-pink-300 shadow-lg shadow-pink-500/50 transform hover:scale-105 transition-all duration-200 hover:shadow-pink-500/70 active:scale-95"
    >
      <div className="flex items-center justify-center space-x-2">
        <span>🔐</span>
        <span>LOCAL LOGIN</span>
      </div>
    </button>
  );
};
