import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import AllUsers from "../pages/AllUsers";
import OneUserProfile from "../pages/OneUserProfile";

const UserRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<DashBoard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/peoples" element={<AllUsers />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/oneuser/:id" element={<OneUserProfile />} />
      </Routes>
    </BrowserRouter>
  );
  
};

export default UserRoute;
