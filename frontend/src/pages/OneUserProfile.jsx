import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/UserService";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TabsForOneUser from "./TabsForOneUser";

const OneUserProfile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");
    setLoggedInUser(JSON.parse(user));
  }, []);
  console.log("login user", loggedInUser.id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getUserById(id);
        setUser(response.data);
      } catch (error) {}
    };
    fetchData();
  }, [id]);

  console.log("user id ", id);

  const handleFollowClick = async (userId, logId) => {
    try {
      const response = await UserService.followUsers(userId, logId);
      console.log(response);
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
      <div>
        <div className=" flex justify-center mt-32 ml-[200px]">
          <img
            className=" w-[200px] h-[200px] rounded-full"
            src={user.profilePictureUrl}
          />
          <button onClick={() => handleFollowClick(id, loggedInUser.id)}>
            follow
            {loggedInUser.id}
          </button>
        </div>
      </div>
      <TabsForOneUser />
    </div>
  );
};

export default OneUserProfile;
