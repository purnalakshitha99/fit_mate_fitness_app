import React, { useState } from "react";
import Gym3 from "../assets/gym6.jpg";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

const Login = () => {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleGoogleLogin = async () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  const loginUser = async (e) => {
    console.log(user);

    e.preventDefault();
    UserService.loginUser(user)
      .then((response) => {
        console.log(response);
        navigate("/home");
        alert("welcome!", response.data.firstName);
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        alert("Wrong Creditials!");
      });
  };

  return (
    <div className="relative">
      <img className="w-[1920px] h-[695px]" src={Gym3} alt="Gym" />

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
            placeholder="Email"
            name="email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => handleChange(e)}
          />
          <button
            onClick={loginUser}
            className="w-full mb-5 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            google login
          </button>
          <div className="flex flex-row">
            <span className="mr-1">Don't have an Account?</span>

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
