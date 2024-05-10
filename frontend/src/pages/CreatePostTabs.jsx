import React, { useEffect, useId, useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import LoggedInsUserPost from "./LoggedInUserPosts";
import UserService from "../services/UserService";
import FriendsPosts from "./FriendsPosts";
import CreatePost from "./CreatePost";
import UploadVedios from "./UploadVedios";

const CreatPostTab = ({ userId }) => {
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
    <div className=" w-[1000px] m-auto ml-[600px] mt-[150px] ">
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
              <span className="ml-1">Upload Photos</span>
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
              <span className="ml-1">Upload Vedio</span>
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
              <CreatePost />
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
              <UploadVedios />
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CreatPostTab;
