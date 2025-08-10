import { useNavigate } from "react-router-dom";
export const OAuthButton = () => {
  const navigate = useNavigate();
  const handleOAuth2 = () => {
    navigate("/oauth2-login");
  };
  return (
    <button
      onClick={handleOAuth2}
      className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold text-lg rounded-lg border-4 border-cyan-300 shadow-lg shadow-cyan-500/50 transform hover:scale-105 transition-all duration-200 hover:shadow-cyan-500/70 active:scale-95"
    >
      <div className="flex items-center justify-center space-x-2">
        <span>🌐</span>
        <span>OAUTH2</span>
      </div>
    </button>
  );
};
