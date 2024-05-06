// Sidebar.js
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import WorkOutStatus from "./models/WorkOutStatus";
import MealPlan from "./models/MealPlan";
import WorkOutPost from "./models/WorkOutPost";
import MyActivities from "./models/MyActivities";
import { Link } from "react-router-dom";

const SideBar = ({
  openMealPlan,
  openMyActivities,
  openWorkOutPost,
  openWorkOutStatus,
}) => {
  const [isMealPlanOpen, setIsMealPlanOpen] = useState(false);
  const [isMyActivitiesOpen, setIsMyActivitiesOpen] = useState(false);
  const [isWorkOutPostOpen, setIsWorkOutPostOpen] = useState(false);
  const [isWorkOutStatusOpen, setIsWorkOutStatusOpen] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setLoggedInUser(JSON.parse(userData));
  }, []);

  const handleLogOut = async () => {
    window.location.href = "http://localhost:8080/logout";
    localStorage.removeItem("user");
  };

  const closeMealPlan = () => {
    setIsMealPlanOpen(false);
  };

  const closeMyActivities = () => {
    setIsMyActivitiesOpen(false);
  };

  const closeWorkOutPost = () => {
    setIsWorkOutPostOpen(false);
  };

  const closeWorkOutStatus = () => {
    setIsWorkOutStatusOpen(false);
  };


  return (
    <>
      <Card className="w-full mt-8 md:w-[20rem]  h-full p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-background text-white left-0">
        <List className=" space-y-8 text-xl flex flex-col mt-12 ">
          <Link to="/post">
            <ListItem className="hover:bg-hoverBackground p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Create Post
            </ListItem>
          </Link>
          <ListItem
            className="hover:bg-hoverBackground p-3"
            onClick={() => setIsMyActivitiesOpen(true)}
          >
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Activities
          </ListItem>
          <ListItem
            className="hover:bg-hoverBackground p-3"
            onClick={() => setIsWorkOutPostOpen(true)}
          >
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-1 1h-2v9a2 2 0 01-2 2H8a2 2 0 01-2-2v-9H3a1 1 0 01-1-1V2zm4 4h8v1H7V6zm1 3h6v6H8V9z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Workout Post
          </ListItem>
          <ListItem
            className="hover:bg-hoverBackground p-3"
            onClick={() => setIsWorkOutStatusOpen(true)}
          >
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 7a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V7zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Workout Status
          </ListItem>
          <ListItem
            className="hover:bg-hoverBackground p-3"
            onClick={() => setIsMealPlanOpen(true)}
          >
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2 7a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V7zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Meal Plan
          </ListItem>
          <ListItem className="hover:bg-hoverBackground p-3">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <br></br>
          <br></br>
          <ListItem className="hover:bg-hoverBackground bg-red-400 p-3" onClick={handleLogOut}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      {isMealPlanOpen && <MealPlan closeMealPlan={closeMealPlan} />}
      {isMyActivitiesOpen && (
        <MyActivities closeMyActivities={closeMyActivities} />
      )}
      {isWorkOutPostOpen && <WorkOutPost closeWorkOutPost={closeWorkOutPost} />}
      {isWorkOutStatusOpen && (
        <WorkOutStatus closeWorkOutStatus={closeWorkOutStatus} />
      )}
    </>
  );
};

export default SideBar;
