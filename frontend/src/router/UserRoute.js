import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/Register";
import Home from "../pages/Home";
import WorkOutStatus from "../components/models/WorkOutStatus";


const UserRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<DashBoard />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/workoutstatus" element={<WorkOutStatus/>} /> */}
        
      </Routes>
    </BrowserRouter>
  );
};

export default UserRoute;
