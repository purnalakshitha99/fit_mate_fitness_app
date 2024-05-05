import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../services/UserService";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const OneUserProfile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

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
        <div className=" flex justify-center">
          <img src={user.profilePictureUrl} />
        </div>
      </div>
    </div>
  );
};

export default OneUserProfile;
