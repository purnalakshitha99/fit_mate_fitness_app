import React from "react";
import NavBar from "../components/NavBar";

const Profile = ({ loggedInUser }) => {
  return (
    <div className="w-[400px] h-full  flex flex-col  gap-4">
      <div className=" flex flex-col items-center w-full">
        <img
          src={loggedInUser.profilePictureUrl}
          className=" rounded-full w-[100px] h-[100px]"
        />

        <div className=" ">
          Hello!
          <span className="first-letter:capitalize font-bold">
            {" "}
            {loggedInUser.firstName} {loggedInUser.lastName}
          </span>
        </div>
      </div>
      <div className=" flex flex-row ">
        {" "}
        <div className=" bg-green-300 w-1/2 items-start p-2 rounded-l-lg">
          {" "}
          Followers
        </div>
        <div className=" bg-red-300 w-1/2 items-start p-2 rounded-r-lg">
          {" "}
          Following
        </div>
      </div>

      <hr></hr>
      <div>
        <span className=" text-sm">Name :</span>
        <div className=" first-letter:capitalize font-semibold">
          {loggedInUser.firstName} {loggedInUser.lastName}
        </div>
      </div>
      <div>
        <span className=" text-sm">Email :</span>
        <div className=" first-letter:capitalize font-semibold">
          {loggedInUser.email}
        </div>
      </div>
      <div>
        <span className=" text-sm">Address :</span>
        <div className=" first-letter:capitalize font-semibold">
          {loggedInUser.bio}
        </div>
      </div>
      <div>
        <span className=" text-sm">Phone Number :</span>
        <div className=" first-letter:capitalize font-semibold">
          {loggedInUser.phoneNumber}
        </div>
      </div>
    </div>
  );
};

export default Profile;
