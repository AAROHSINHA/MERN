"use client";
import { LocalLogin } from "./LocalLogin";
import { OAuthButton } from "./OAuthButton";
import { JWTLogin } from "./JWTLogin";
import { CreateAccount } from "./CreateAccount";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/30">
        <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
          Choose Your Login
        </h1>

        <div className="space-y-6 w-80">
          <LocalLogin />
          <OAuthButton />
          <JWTLogin />
          <CreateAccount />
        </div>

        {/* Retro decorative elements */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}
