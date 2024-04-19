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
  const [isMealPlanOpen, setIsMealPlanOpen] = useState(false);
  const [isMyActivitiesOpen, setIsMyActivitiesOpen] = useState(false);
  const [isWorkOutPostOpen, setIsWorkOutPostOpen] = useState(false);
  const [isWorkOutStatusOpen, setIsWorkOutStatusOpen] = useState(false);

  const openMealPlan = () => {
    setIsMealPlanOpen(true);
  };

  const closeMealPlan = () => {
    setIsMealPlanOpen(false);
  };

  const openMyActivities = () => {
    setIsMyActivitiesOpen(true);
  };

  const closeMyActivities = () => {
    setIsMyActivitiesOpen(false);
  };

  const openWorkOutPost = () => {
    setIsWorkOutPostOpen(true);
  };

  const closeWorkOutPost = () => {
    setIsWorkOutPostOpen(false);
  };

  const openWorkOutStatus = () => {
    setIsWorkOutStatusOpen(true);
  };

  const closeWorkOutStatus = () => {
    setIsWorkOutStatusOpen(false);
  };


  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar 
          openMealPlan={openMealPlan}
          openMyActivities={openMyActivities}
          openWorkOutPost={openWorkOutPost}
          openWorkOutStatus={openWorkOutStatus} />
        <div className=" space-y-10 ml-[25rem] mt-36">
          <div>
            <Tabs />
          </div>
        </div>
      </div>
      {isMealPlanOpen && <MealPlan closeMealPlan={closeMealPlan} />}
      {isMyActivitiesOpen && <MyActivities closeMyActivities={closeMyActivities} />}
      {isWorkOutPostOpen && <WorkOutPost closeWorkOutPost={closeWorkOutPost} />}
      {isWorkOutStatusOpen && <WorkOutStatus closeWorkOutStatus={closeWorkOutStatus} />}
    </div>
  );
};

export default Home;
