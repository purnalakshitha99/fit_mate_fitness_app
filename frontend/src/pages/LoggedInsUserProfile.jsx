import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TabsForOneUser from "./TabsForFriendsProfile";
import { useNavigate } from "react-router-dom";
import TabsForMyProfile from "./TabsForMyProfile";

const LoggedInsUserProfile = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    setLoggedInUser(JSON.parse(user));
  }, []);

  const handleEditProfile = (e, id) => {
    // Redirect to editUserDetails page with logged in user's details
    navigate(`/editUserDetails/${id}`);
  };

  return (
    <div>
      {" "}
      <div className="fixed top-0 left-0 w-full z-10">
        <NavBar />
      </div>
      <div className="fixed top-[75px] left-0 h-screen z-10">
        <SideBar />
      </div>
      <div>
        <div className=" flex justify-center mt-[108px] ml-[200px] items-center flex-col gap-y-5">
          <img
            className=" w-[200px] h-[200px] rounded-full"
            src={loggedInUser.profilePictureUrl}
          />
          <span className=" first-letter:capitalize text-xl">
            {loggedInUser.username}
          </span>
          <button
            onClick={(e, id) => handleEditProfile(e, loggedInUser.id)}
            className="rounded-lg  p-2 w-[500px] text-white text-lg font-semibold bg-[#74779bf0]  hover:bg-blue-400 transition-colors"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div className=" mt-24">
        <TabsForMyProfile  userId={loggedInUser}/>
      </div>
    </div>
  );
};

export default LoggedInsUserProfile;
