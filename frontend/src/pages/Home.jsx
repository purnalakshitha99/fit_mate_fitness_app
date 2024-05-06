import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Tabs from "./Tabs";
import Post from "./Post";
import WorkOutStatus from "../components/models/WorkOutStatus";
import MealPlan from "../components/models/MealPlan";
import WorkOutPost from "../components/models/WorkOutPost";
import MyActivities from "../components/models/MyActivities";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      fetchUser();
    }
    setLoggedInUser(JSON.parse(userData));
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user", {
        withCredentials: true,
      });
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/");
      }
    }
  };

  return (
    <>
      <div>
        <div className="fixed top-0 left-0 w-full z-10">
          <NavBar />
        </div>
        <div className="fixed top-[75px] left-0 h-screen z-10">
          <SideBar />
        </div>
      </div>
      <div className="flex m-auto justify-center items-center">
        <div className=" w-full">
          <div className=" space-y-10  mt-[120px]">
            <div>
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
