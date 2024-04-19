import React, { useState } from "react";
import GymImage from "../assets/gym8.jpg";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNumber: "",
    bio: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const saveUser = async (e) => {
    console.log(user);
    e.preventDefault();
    UserService.saveUser(user)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <div className="relative">
      <img className="w-[1920px] h-[695px]" src={GymImage} alt="Gym" />

      <div className="mt-10 absolute inset-0 w-[600px] ml-5">
        <div
          className={`bg-white  shadow-md rounded-md p-8 w-100 relative z-10 ${
            click ? "bg-opacity-100" : "bg-opacity-80"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Register</h2>
          <div className=" flex flex-row gap-3 ">
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
              <input
                type="text"
                name="firstName"
                onChange={(e) => handleChange(e)}
                placeholder="First Name"
                onFocus={handleClick}
                onBlur={handleClickRm}
                className="w-full px-3 mt-2 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
              />
            </label>
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={(e) => handleChange(e)}
                onFocus={handleClick}
                onBlur={handleClickRm}
                className="w-full px-3 mt-2 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
              />
            </label>
          </div>
          <div className="">
            <label htmlFor="lastName" className="block text-gray-700">
              Email
              <input
                type="text"
                name="email"
                placeholder="Last Name"
                onChange={(e) => handleChange(e)}
                onFocus={handleClick}
                onBlur={handleClickRm}
                className="w-full mt-2 px-3 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700">
              Phone Number
              <input
                type="text"
                name="phoneNumber"
                onChange={(e) => handleChange(e)}
                placeholder="Last Name"
                onFocus={handleClick}
                onBlur={handleClickRm}
                className="w-full mt-2 px-3 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700">
              Address
              <textarea
                placeholder="Address"
                name="bio"
                onChange={(e) => handleChange(e)}
                onFocus={handleClick}
                onBlur={handleClickRm}
                className="w-full mt-2 px-3 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
              ></textarea>
            </label>
          </div>
          <button
            onClick={saveUser}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
          <div className="flex flex-row mt-5">
            <p className="mr-1">Already have an account?</p>
            <Link to="/login">
              <p className="ml-1 text-blue-600 underline cursor-pointer">
                Login
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
