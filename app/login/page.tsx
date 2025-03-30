"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const sampleUsername = "admin";
    const samplePassword = "password";

    if (username === sampleUsername && password === samplePassword) {
      setError("");
      if (typeof window !== 'undefined') {
        localStorage.setItem("isLoggedIn", "true");
      }
      router.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">Welcome</h1>
        <p className="text-center text-gray-600 mb-6">
          Use username "admin" and password "password" to login.
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
          >
            Continue
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          New to Cloudcasting?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up Here
          </a>
        </p>
        <button
          className="w-full mt-4 bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-300 transition"
        >
          Google Button
        </button>
      </div>
    </div>
  );
};

export default Login;