import React, { useEffect, useId, useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import LoggedInsUserPost from "./LoggedInUserPosts";
import UserService from "../services/UserService";
import FriendsPosts from "./FriendsPosts";
import MealPlan from "./MealPlansFeed";
import UploadedPosts from "./LoggedInUserPosts";
import MyMealPlansFeed from "./MyMealPlansFeed";
import UpdateMealPlanForm from "../components/models/UpdateMealPlanForm";
import LoggedInUserStatus from "./workoutStatus/LoggedInUserStatus";

const TabsForMyProfile = ({ userId }) => {
  const [activeTab, setActiveTab] = useState("app");

  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setLoggedInUser(JSON.parse(userData));
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className=" w-[1000px] m-auto ml-[600px] ">
      <div className="relative right-0">
        <ul
          className="relative  flex flex-wrap p-5 list-none rounded-xl bg-blue-gray-50/60 border" // Removed border class
          data-tabs="tabs"
          role="list"
        >
          <li
            className={` flex-auto text-center ${
              activeTab === "app" ? "bg-gray-300 p-2 rounded-xl" : ""
            }`}
          >
            <Link
              className=" flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target=""
              role="tab"
              aria-selected={activeTab === "app"}
              aria-controls="app"
              onClick={() => handleTabClick("app")}
            >
              <span className="ml-1">Feed</span>
            </Link>
          </li>
          <li
            className={` flex-auto text-center ${
              activeTab === "mealPlan" ? "bg-gray-300 p-2 rounded-xl" : ""
            }`}
          >
            <Link
              className=" flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target=""
              role="tab"
              aria-selected={activeTab === "mealPlan"}
              aria-controls="mealPlan"
              onClick={() => handleTabClick("mealPlan")}
            >
              <span className="ml-1">Meal Plan</span>
            </Link>
          </li>
          <li
            className={` flex-auto text-center ${
              activeTab === "workOutPlan" ? "bg-gray-300 p-2 rounded-xl" : ""
            }`}
          >
            <Link
              className=" flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target=""
              role="tab"
              aria-selected={activeTab === "workOutPlan"}
              aria-controls="workOutPlan"
              onClick={() => handleTabClick("workOutPlan")}
            >
              <span className="ml-1">Status</span>
            </Link>
          </li>
        </ul>
        <div data-tab-content=" " className="p-5">
          <div
            className={`block ${
              activeTab === "app" ? "opacity-100" : "hidden"
            }`}
            id="app"
            role="tabpanel"
          >
            <span className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
              <UploadedPosts loggedIn={userId} />
            </span>
          </div>
          <div
            className={`block ${
              activeTab === "mealPlan" ? "opacity-100" : "hidden"
            }`}
            id="mealPlan"
            role="tabpanel"
          >
            <span className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
              {/* {loggedInUser.id} */}
              {/* <MealPlan userId={loggedInUser.id}/> */}
              <MyMealPlansFeed userId={loggedInUser.id} />
              {/* <UpdateMealPlanForm/> */}
              {/* mel plan for my profile */}
            </span>
          </div>
          <div
            className={`block ${
              activeTab === "workOutPlan" ? "opacity-100" : "hidden"
            }`}
            id="workOutPlan"
            role="tabpanel"
          >
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
             <LoggedInUserStatus userId={loggedInUser.id}/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsForMyProfile;
