import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/get-user", {
        withCredentials: true, // IMPORTANT for sending cookies
      })
      .then((res) => {
        setUserName(res.data.username);
        setEmail(res.data.email);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        navigate("/");
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center p-8">
      <div className="text-center space-y-16">
        <div className="space-y-12">
          <div className="group">
            <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-700 cursor-default">
              {userName}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full group-hover:w-48 transition-all duration-500"></div>
          </div>

          <div className="group">
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-cyan-400 hover:via-teal-400 hover:to-emerald-400 transition-all duration-700 cursor-default">
              {email}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-4 rounded-full group-hover:w-40 transition-all duration-500"></div>
          </div>
        </div>

        <div className="flex justify-center space-x-8 opacity-30">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
