"use client";

import type React from "react";
import { useState } from "react";
import { Top } from "./components/Top.tsx";
import { Bottom } from "./components/Bottom.tsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();
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

  const createAccount = (username: string, password: string, email: string) => {
    const userData = {
      username: username,
      password: password,
      email: email,
    };

    try {
      const res = axios.post(
        "http://localhost:3000/users/create-account",
        userData,
        {
          withCredentials: true,
        }
      );

      alert("ACCOUNT CREATED");
      navigate("/");
    } catch (error) {
      alert("Some Error Occurred!");
      console.warn("ERROR IN SIGN-IN");
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const username = formData.username;
    const email = formData.email;
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;
    // if (password !== confirmPassword) {
    //   alert("PASSWORDS DON'T MATCH");
    //   return;
    // }

    createAccount(username, password, email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/30 w-full max-w-md">
        <Top />

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
        <Bottom />
      </div>
    </div>
  );
}
