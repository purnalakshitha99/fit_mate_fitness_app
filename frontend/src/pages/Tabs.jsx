import React, { useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import MealPlansFeed from "./MealPlansFeed";
import GetWorkOutStatus from "./GetWorkOutStatus";
import GetWorkoutPlane from "./WorkOutPlanFeed";

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
          {/* <li
            className={` flex-auto text-center ${
              activeTab === "workOutPlan" ? "bg-gray-300 p-2 rounded-xl" : ""
            }`}
          >
            <Link
              className=" flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target=""
              role="tab"
              aria-selected={activeTab === "workOutStatus"}
              aria-controls="workOutStatus"
              onClick={() => handleTabClick("workOutStatus")}
            >
              <span className="ml-1">Workout Status</span>
            </Link>
          </li> */}


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
              <span className="ml-1">Workout Plan</span>
            </Link>
          </li>

          <li
            className={` flex-auto text-center ${
              activeTab === "workoutStatus" ? "bg-gray-300 p-2 rounded-xl" : ""
            }`}
          >
            <Link
              className=" flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target=""
              role="tab"
              aria-selected={activeTab === "workoutStatus"}
              aria-controls="workoutStatus"
              onClick={() => handleTabClick("workoutStatus")}
            >
              <span className="ml-1">Workout Status</span>
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
              <MealPlansFeed />
            </span>
          </div>
          <div
            className={`block ${
              activeTab === "workOutStatus" ? "opacity-100" : "hidden"
            }`}
            id="workOutStatus"
            role="tabpanel"
          >
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
              <GetWorkOutStatus />
            </p>
          </div>



          <div
            className={`block ${
              activeTab === "workOutPlan" ? "opacity-100" : "hidden"
            }`}
            id="workOutPlan"
            role="tabpanel"
          >
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
             <GetWorkoutPlane/>
            </p>
          </div>

          <div
            className={`block ${
              activeTab === "workoutStatus" ? "opacity-100" : "hidden"
            }`}
            id="workoutStatus"
            role="tabpanel"
          >
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
             <GetWorkOutStatus />
            </p>
          </div>
          

          
        </div>
      </div>
    </div>
  );
};

export default Tabs;
