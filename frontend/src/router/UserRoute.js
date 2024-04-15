import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/Register";

const UserRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRoute;
