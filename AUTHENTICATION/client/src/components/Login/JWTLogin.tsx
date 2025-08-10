"use client";

import type React from "react";
import { useState } from "react";

export default function JWTLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("JWT login data:", formData);
    // Add your JWT login logic here
    // This would typically make an API call and store the JWT token
  };

  const handleTokenLogin = () => {
    console.log("Direct token login clicked");
    // Handle direct JWT token input/validation
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-green-400/30 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
          JWT LOGIN
        </h1>

        <div className="text-center mb-8">
          <span className="text-green-400 text-lg">🎫 Token Access 🎫</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-green-300 font-bold mb-2 text-sm uppercase tracking-wide"
            >
              📧 Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full py-3 px-4 bg-black/40 border-2 border-green-400/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-emerald-300 font-bold mb-2 text-sm uppercase tracking-wide"
            >
              🔒 Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full py-3 px-4 bg-black/40 border-2 border-emerald-400/50 rounded-lg text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-lg rounded-lg border-4 border-green-300 shadow-lg shadow-green-500/50 transform hover:scale-105 transition-all duration-200 hover:shadow-green-500/70 active:scale-95"
          >
            <div className="flex items-center justify-center space-x-2">
              <span>🚀</span>
              <span>GET JWT TOKEN</span>
            </div>
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-green-400/30"></div>
          <span className="px-4 text-green-400 font-bold text-sm">OR</span>
          <div className="flex-1 border-t border-green-400/30"></div>
        </div>

        {/* Direct Token Access */}
        <button
          onClick={handleTokenLogin}
          className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-sm rounded-lg border-2 border-emerald-400 shadow-md shadow-emerald-500/30 transform hover:scale-102 transition-all duration-200"
        >
          <div className="flex items-center justify-center space-x-2">
            <span>🔑</span>
            <span>HAVE A TOKEN? CLICK HERE</span>
          </div>
        </button>

        {/* Token Info */}
        <div className="mt-6 text-center">
          <p className="text-green-300 text-xs">
            JWT tokens provide secure, stateless authentication
          </p>
        </div>

        {/* Retro decorative elements */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}
