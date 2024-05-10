import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/UserService";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TabsForOneUser from "./TabsForFriendsProfile";
import toast from "react-hot-toast";

const OneUserProfile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");
    setLoggedInUser(JSON.parse(user));
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getUserById(id);
        setUser(response.data);
      } catch (error) {}
    };
    fetchData();
  }, [id]);


  const handleFollowClick = async (userId, logId) => {
    try {
      const response = await UserService.followUsers(userId, logId);
      console.log(response);
      toast.success(response.data);
    } catch (error) {
      console.error(error);
    }
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
      <div className=" bg-gray-300 rounded-xl max-w-[1200px] ml-[500px] m-auto">
        <div className=" flex  mt-32 p-4">
          <img
            className=" w-[200px] h-[200px] rounded-full"
            src={user.profilePictureUrl}
          />
          <div className=" flex flex-col ml-[140px] mt-10 text-xl font-semibold gap-3">
            <div>
              {user.firstName} {user.lastName}
            </div>
            <div>{user.email}</div>
            <div>{user.phoneNumber}</div>
            <div>{user.bio}</div>
          </div>
        </div>
        <div className=" flex justify-center  mt-[50px] mb-[50px]  items-center flex-col gap-y-5">
          <div className=" flex flex-row space-x-8 w-[500px] ">
            <div className=" w-full ">
              <div className="rounded-lg p-2 w-full  text-white text-lg font-semibold bg-[#74779bf0] ">
                Followers : 
                {user.followersCount}
              </div>
            </div>
            <div className=" w-full ">
              <div className="rounded-lg  p-2  text-white text-lg font-semibold bg-[#74779bf0] ">
                Following : 
                 {user.followingCount}
              </div>
            </div>
          </div>
          <button
            className="rounded-lg  p-2 w-[500px] mb-[50px] text-white text-lg font-semibold bg-[#74779bf0]  hover:bg-blue-400 transition-colors"
            onClick={() => handleFollowClick(id, loggedInUser.id)}
          >
            Follow
          </button>
        </div>
      </div>
      <TabsForOneUser userId={id} />
    </div>
  );
};

export default OneUserProfile;
