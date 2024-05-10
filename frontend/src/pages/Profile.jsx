import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";

const Profile = ({ loggedInUser }) => {

  const [user, setUser] = useState({})
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getUserById(loggedInUser.id);
        setUser(response.data);
      } catch (error) {}
    };
    fetchData();
  }, [loggedInUser.id]);



  return (
    <div className="w-[400px] h-full  flex flex-col  gap-4">
      <div className=" flex flex-col items-center w-full">
        <img
          src={user.profilePictureUrl}
          className=" rounded-full w-[100px] h-[100px]"
        />

        <div className=" ">
          Hello!
          <span className="first-letter:capitalize font-bold">
            {" "}
            {user.firstName} {user.lastName}
          </span>
        </div>
      </div>
      <div className=" flex flex-row ">
        {" "}
        <div className=" bg-green-300 w-1/2 items-start p-2 rounded-l-lg">
          {" "}
          Followers : {user.followersCount}
        </div>
        <div className=" bg-red-300 w-1/2 items-start p-2 rounded-r-lg">
          {" "}
          Following : {user.followingCount}
        </div>
      </div>

      <hr></hr>
      <div>
        <span className=" text-sm">Name :</span>
        <div className=" first-letter:capitalize font-semibold">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div>
        <span className=" text-sm">Email :</span>
        <div className=" first-letter:capitalize font-semibold">
          {user.email}
        </div>
      </div>
      <div>
        <span className=" text-sm">Address :</span>
        <div className=" first-letter:capitalize font-semibold">
          {user.bio}
        </div>
      </div>
      <div>
        <span className=" text-sm">Phone Number :</span>
        <div className=" first-letter:capitalize font-semibold">
          {user.phoneNumber}
        </div>
      </div>

      <Link to="/loggedinUser">
        {" "}
        <button className="rounded-lg w-full p-2 text-white text-lg font-semibold bg-[#74779bf0]  hover:bg-blue-400 transition-colors">
          View Profile
        </button>
      </Link>
    </div>
  );
};

export default Profile;
