import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Tabs from "./Tabs";
import Post from "./Post";
import WorkOutStatus from "../components/models/WorkOutStatus";
import MealPlan from "../components/models/MealPlan";
import WorkOutPost from "../components/models/WorkOutPost";
import MyActivities from "../components/models/MyActivities";

const Home = () => {
  // const [isMealPlanOpen, setIsMealPlanOpen] = useState(false);
  // const [isMyActivitiesOpen, setIsMyActivitiesOpen] = useState(false);
  // const [isWorkOutPostOpen, setIsWorkOutPostOpen] = useState(false);
  // const [isWorkOutStatusOpen, setIsWorkOutStatusOpen] = useState(false);

  // const openMealPlan = () => {
  //   setIsMealPlanOpen(true);
  // };

  // const closeMealPlan = () => {
  //   setIsMealPlanOpen(false);
  // };

  // const openMyActivities = () => {
  //   setIsMyActivitiesOpen(true);
  // };

  // const closeMyActivities = () => {
  //   setIsMyActivitiesOpen(false);
  // };

  // const openWorkOutPost = () => {
  //   setIsWorkOutPostOpen(true);
  // };

  // const closeWorkOutPost = () => {
  //   setIsWorkOutPostOpen(false);
  // };

  // const openWorkOutStatus = () => {
  //   setIsWorkOutStatusOpen(true);
  // };

  // const closeWorkOutStatus = () => {
  //   setIsWorkOutStatusOpen(false);
  // };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10">
        <NavBar />
      </div>
      <div className="fixed top-[75px] left-0 h-screen z-10">
        <SideBar />
      </div>
      <div className="flex">
        <div className="ml-96 w-full">
          <div className=" space-y-10  mt-24  m-auto">
            <div>
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
