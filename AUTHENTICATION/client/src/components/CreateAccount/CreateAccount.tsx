"use client";

import type React from "react";

import { useState } from "react";

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    console.log("Account creation data:", formData);
    // Add your account creation logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/30 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
          CREATE ACCOUNT
        </h1>

        <div className="text-center mb-8">
          <span className="text-green-400 text-lg">🚀 Join the Future 🚀</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-pink-300 font-bold mb-2 text-sm uppercase tracking-wide"
            >
              👤 Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="w-full py-3 px-4 bg-black/40 border-2 border-pink-400/50 rounded-lg text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all duration-200"
              placeholder="Enter your username"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-cyan-300 font-bold mb-2 text-sm uppercase tracking-wide"
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
              className="w-full py-3 px-4 bg-black/40 border-2 border-cyan-400/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-green-300 font-bold mb-2 text-sm uppercase tracking-wide"
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
              className="w-full py-3 px-4 bg-black/40 border-2 border-green-400/50 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-purple-300 font-bold mb-2 text-sm uppercase tracking-wide"
            >
              🔐 Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className="w-full py-3 px-4 bg-black/40 border-2 border-purple-400/50 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all duration-200"
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white font-bold text-lg rounded-lg border-4 border-white/30 shadow-lg shadow-purple-500/50 transform hover:scale-105 transition-all duration-200 hover:shadow-purple-500/70 active:scale-95 mt-8"
          >
            <div className="flex items-center justify-center space-x-2">
              <span>✨</span>
              <span>CREATE ACCOUNT</span>
              <span>✨</span>
            </div>
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-300 text-sm">
            Already have an account?{" "}
            <button className="text-cyan-400 hover:text-cyan-300 font-bold underline transition-colors duration-200">
              LOGIN HERE
            </button>
          </p>
        </div>

        {/* Retro decorative elements */}
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
    </div>
  );
}
