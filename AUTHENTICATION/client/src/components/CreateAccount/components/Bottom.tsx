export const Bottom = () => {
  return (
    <div>
      <div className="mt-8 flex justify-center space-x-4">
        <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-75"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-150"></div>
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Additional retro grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform -skew-y-12"></div>
      </div>
    </div>
  );
};
