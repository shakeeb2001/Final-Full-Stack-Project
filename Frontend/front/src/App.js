import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from "../src/component/navbar";
import Home from "./pages/home";
import RoomTypes from "./pages/roomtypes";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Signout from "./pages/signout";
import Profile from "./pages/profile";
import Event from "./pages/event";

export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/roomtypes" element={<RoomTypes />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event" element={<Event/>} />
      </Routes>
    </BrowserRouter>
  );
}
