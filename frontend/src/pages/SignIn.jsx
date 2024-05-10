import SigninImage from "../assets/signin.jpg";
import Google from "../assets/search.png"; // Use default import
import React, { useState } from "react";
import UserService from "../services/UserService";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disabaled: "#D9D9D9",
};


const SignIn = () => {
const [loading, setLoading] = useState(false);
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
    e.preventDefault();
    setLoading(true)
    UserService.loginUser(user)
      .then((response) => {
        console.log(response);
        navigate("/home");
        toast.success("welcome!");
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        toast.error("Wrong Creditials!");
      });
      setLoading(false);
  };

  return (
    <div>
      <div className=" flex flex-row">
        <div className=" bg-red-600 w-1/2">
          <img src={SigninImage} className=" h-screen w-screen" />
        </div>
        <div className=" w-1/2  bg-[#f5f5f5] flex flex-col p-20  h-screen  justify-between items-center">
          <h1 className="text-x1 text-[#060606] font-semibold">
            Interactive brand
          </h1>

          <div className="w-full flex-col max-w-[500px]">
            <div className="flex flex-col w-full mb-2">
              <h3 className="text-3xl font-semibold mb-2">Login</h3>
              <p className="text-base mb-2">
                Welcom Back! Please enter your details
              </p>
            </div>
            <div className="w-full flex flex-col">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
                className="w-full text-black py-2 my-2 bg-transparent bg-none border-b border-black outline-none focus:outline-none"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                className="w-full text-black py-2 my-2 bg-transparent bg-none border-b border-black outline-none focus:outline-none"
              />
            </div>
            <div className="w-full justify-between item-center">
              <div className="w-full flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
              </div>
              <div className=" flex justify-between">
                <p className="text-5m">Remeber Me for 30 days</p>
                <p className="text-5m cursor-pointer underline">
                  Forgot Password
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col my-4 ">
              <button
                onClick={loginUser}
                className="w-full text-white bg-[#060606] my-2 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
              >
                Login
              </button>
            </div>
            <div className="w-full flex flex-col my-4 ">
              <Link to="/register">
                {" "}
                <button className="w-full text-[#060606]  bg-white border-2 border-black my-2 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-center relative py-2 ">
            <div className="w-full h-[1px] bg-black/40"></div>
            <p className="absolute text-black/80  bg-[#f5f5f5]">or</p>
          </div>
          <div className="flex flex-col my-4 w-[500px]">
            <button
              onClick={handleGoogleLogin}
              className="w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
            >
              <img src={Google} className="h-6 mr-2" />
              Sign In With Google
            </button>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-lg  font-normal text-black/88 bg-white">
              Dont have a account?
              <span className="font-semibold underline underline-offset-2 cursor-pointer"></span>{" "}
              <Link to="/register">
                <button className=" underline text-blue-500">Sign up</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
