import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import FormMeal from "../components/models/FormMeal";
import SignIn from "../pages/SignIn";
import AllUsers from "../pages/AllUsers";
import OneUserProfile from "../pages/OneUserProfile";
import CreatePost from "../pages/CreatePost";
import LoggedInsUserProfile from "../pages/LoggedInsUserProfile";
import EditUserDetails from "../pages/EditUserDetails";
import GetWorkOutStatus from "../pages/GetWorkOutStatus";
import WorkoutPlanForm from "../pages/WorkoutPlanForm";
import CreatPostTab from "../pages/CreatePostTabs";
import EditWorkoutStatus from "../pages/workoutStatus/EditWorkoutStatus";

const UserRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<DashBoard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/peoples" element={<AllUsers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mealPlan" element={<FormMeal />} />

        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/oneuser/:id" element={<OneUserProfile />} />
        <Route path="/post" element={<CreatPostTab />} />
        <Route path="/loggedinUser" element={<LoggedInsUserProfile />} />
        <Route path="/editUserDetails/:id" element={<EditUserDetails />} />
        <Route path="/workoutform" element={<WorkoutPlanForm />} />
        <Route path="/editStatus/:id" element={<EditWorkoutStatus />} />

        <Route path="/GetWorkoutStatus" element={<GetWorkOutStatus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRoute;
