import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../src/component/navbar";
import Home from "./pages/home";
import RoomTypes from "./pages/roomtypes";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Signout from "./pages/signout";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/roomtypes" element={<RoomTypes />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
    </BrowserRouter>
  );
}
