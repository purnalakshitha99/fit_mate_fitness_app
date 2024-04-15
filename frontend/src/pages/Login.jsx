import React, { useState } from "react";
import Gym3 from "../assets/gym6.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div className="relative">
      <img className="w-full" src={Gym3} alt="Gym" />

      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className={`bg-black bg-opacity-40 absolute inset-0 ${
            inputFocused ? "" : "hidden"
          }`}
        ></div>
        <div
          className={`bg-white bg-opacity-20 shadow-md rounded-md p-8 w-100 relative z-10 ${
            inputFocused ? "bg-opacity-80" : ""
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
          <div className="flex flex-row">
            <p className="mr-1">Don't have an Account?</p>

            <Link to="/register">
              <p className="ml-1 text-blue-600 underline cursor-pointer">
                Register now!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
