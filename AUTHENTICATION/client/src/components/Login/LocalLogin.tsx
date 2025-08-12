"use client";

import type React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LocalLogin() {
  const navigate = useNavigate();
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

  const LocalLogin = async (email: string, password: string) => {
    const userData = {
      email: email,
      password: password,
    };
    try {
      await axios.post("http://localhost:3000/users/local-login", userData, {
        withCredentials: true,
      });
      navigate("/profile");
      alert("Login Succesfull");
    } catch (error) {
      console.warn("Error Occurred");
      console.log(error);
      alert("ERROR LOGGING IN");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;
    LocalLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-pink-400/30 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
          LOCAL LOGIN
        </h1>

        <div className="text-center mb-8">
          <span className="text-pink-400 text-lg">🔐 Secure Access 🔐</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-pink-300 font-bold mb-2 text-sm uppercase tracking-wide"
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
              className="w-full py-3 px-4 bg-black/40 border-2 border-pink-400/50 rounded-lg text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50 transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-rose-300 font-bold mb-2 text-sm uppercase tracking-wide"
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
              className="w-full py-3 px-4 bg-black/40 border-2 border-rose-400/50 rounded-lg text-white placeholder-gray-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400/50 transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-lg rounded-lg border-4 border-pink-300 shadow-lg shadow-pink-500/50 transform hover:scale-105 transition-all duration-200 hover:shadow-pink-500/70 active:scale-95 mt-8"
          >
            <div className="flex items-center justify-center space-x-2">
              <span>🚀</span>
              <span>LOGIN</span>
            </div>
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-6 text-center">
          <button className="text-pink-400 hover:text-pink-300 font-bold underline transition-colors duration-200 text-sm">
            Forgot Password?
          </button>
        </div>

        {/* Retro decorative elements */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}
