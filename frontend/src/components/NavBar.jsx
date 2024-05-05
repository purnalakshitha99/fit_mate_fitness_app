import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setLoggedInUser(JSON.parse(userData));
  }, []);

  

  const handleLogOut = async () => {
    window.location.href = "http://localhost:8080/logout";
    localStorage.removeItem("user");
  };

  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
  };

  const navList = (
    <ul className="mt-2 cursor-pointer mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 px-3 text-white">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link className="flex items-center text-lg" to="/peoples">
          Peoples
        </Link>
      </Typography>
      <button
        as="li"
        variant="small"
        color="blue-gray"
        className="  hover:bg-gray-400 p-2 rounded-md hover:text-black font-semibold"
        onClick={handleLogOut}
      >
        <Link className="flex items-center" to="/logout">
          Logout
        </Link>
      </button>
      {/* Other menu items */}
    </ul>
  );

  return (
    <div className="max-h-max">
      <Navbar className=" z-50 rounded-none top-0  w-full h-[108px] px-4 py-2 border-none lg:px-8 lg:py-4 bg-background text-blue-gray-900">
        <div className="flex items-center justify-between ">
          <Typography
            as="a"
            className="mr-4 text-white cursor-pointer font-serif text-2xl py-1.5 font-medium "
          >
            Fitmate
            <p className=" text-sm">Hello! {loggedInUser.username}</p>
          </Typography>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="  relative">
              <img
                className=" rounded-full cursor-pointer h-[50px] w-[50px]"
                src={loggedInUser.profilePictureUrl}
                onClick={toggleUserDetails}
              />
              {showUserDetails && (
                <div className="absolute  top-full right-0  bg-white shadow-lg p-4 rounded-lg z-10">
                  {/* Popup content */}
                  <Profile loggedInUser={loggedInUser} />
                </div>
              )}
            </div>
            {/* Other components */}
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
