import { useNavigate } from "react-router-dom";
export const CreateAccount = () => {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate("/create-account");
  };
  return (
    <button
      className="w-full py-4 px-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-oranges-600 text-white font-bold text-lg rounded-lg border-4 border-yellow-300 shadow-lg shadow-yellow-500/50 transform hover:scale-105 transition-all duration-200 hover:shadow-green-500/70 active:scale-95"
      onClick={handleCreateAccount}
    >
      <div className="flex flex-col items-center justify-center space-x-2">
        <div>CREATE ACCOUNT</div>
        <p className="block text-[8px] tracking-[2px] text-red-500">
          HAVE NO ACCOUNT? CREATE ONE!
        </p>
      </div>
    </button>
  );
};
