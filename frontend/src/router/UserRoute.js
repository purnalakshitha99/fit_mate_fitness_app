import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/Register";
import Home from "../pages/Home";
import ImageUpload from "../pages/ImageUpload";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";

const UserRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<DashBoard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/imageUpload" element={<ImageUpload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/SignIn" element={<SignIn/>} />
        
     
      </Routes>
    </BrowserRouter>
  );
};

export default UserRoute;
