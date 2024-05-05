import React, { useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("app");

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
              activeTab === "app" ? "bg-red-300" : ""
            }`}
          >
            <a
              className=" flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target=""
              role="tab"
              aria-selected={activeTab === "app"}
              aria-controls="app"
              onClick={() => handleTabClick("app")}
            >
              <span className="ml-1">Feed</span>
            </a>
          </li>
          <li
            className={` flex-auto text-center ${
              activeTab === "mealPlan" ? "" : ""
            }`}
          >
            <a
              className=" flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target=""
              role="tab"
              aria-selected={activeTab === "mealPlan"}
              aria-controls="mealPlan"
              onClick={() => handleTabClick("mealPlan")}
            >
              <span className="ml-1">Meal Plan</span>
            </a>
          </li>
          <li
            className={`z-30 flex-auto text-center ${
              activeTab === "workOutPlan" ? "" : ""
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
              <span className="ml-1">Workout Plan</span>
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
              <Post />
              <Post />
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
              asdad
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
              Content for Settings tab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
