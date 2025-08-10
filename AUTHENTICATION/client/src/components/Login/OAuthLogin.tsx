"use client";

export default function OAuth2Login() {
  const handleGoogleLogin = () => {
    console.log("Google OAuth2 login clicked");
    // Add your Google OAuth2 logic here
  };

  const handleGithubLogin = () => {
    console.log("GitHub OAuth2 login clicked");
    // Add your GitHub OAuth2 logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/30 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          OAUTH2 LOGIN
        </h1>

        <div className="text-center mb-8">
          <span className="text-cyan-400 text-lg">🌐 Quick Access 🌐</span>
        </div>

        <div className="space-y-6">
          {/* Google OAuth2 Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full py-4 px-6 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-lg rounded-lg border-4 border-red-300 shadow-lg shadow-red-500/50 transform hover:scale-105 transition-all duration-200 hover:shadow-red-500/70 active:scale-95"
          >
            <div className="flex items-center justify-center space-x-2">
              <span>🔴</span>
              <span>CONTINUE WITH GOOGLE</span>
            </div>
          </button>

          {/* GitHub OAuth2 Button */}
          <button
            onClick={handleGithubLogin}
            className="w-full py-4 px-6 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-bold text-lg rounded-lg border-4 border-gray-500 shadow-lg shadow-gray-700/50 transform hover:scale-105 transition-all duration-200 hover:shadow-gray-700/70 active:scale-95"
          >
            <div className="flex items-center justify-center space-x-2">
              <span>⚫</span>
              <span>CONTINUE WITH GITHUB</span>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-cyan-400/30"></div>
          <span className="px-4 text-cyan-400 font-bold text-sm">OR</span>
          <div className="flex-1 border-t border-cyan-400/30"></div>
        </div>

        {/* Back to other options */}
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            Prefer traditional login?{" "}
            <button className="text-cyan-400 hover:text-cyan-300 font-bold underline transition-colors duration-200">
              Use Email & Password
            </button>
          </p>
        </div>

        {/* Retro decorative elements */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}
