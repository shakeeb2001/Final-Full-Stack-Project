import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar';
import Home from "./pages/home";
import Signout from "./pages/signout";
import RoomType from "./pages/RoomType";
import Signup from "./pages/signup";
import Login from "./pages/login";
import DeluxRoom from "./pages/DeluxeRoom";
import SingleRoom from "./pages/Singleroom";
import DoubleRoom from "./pages/Doubleroom";
import Event from "./pages/event";
import BookingHistory from "./pages/BookingHistory";
import Dining from "./pages/Dining";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} updateLoginStatus={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roomtype" element={<RoomType/>} />
          <Route path="/bookinghistory" element={<BookingHistory />} />
          <Route path="/deluxroom" element={<DeluxRoom />} />
          <Route path="/singleroom" element={<SingleRoom />} />
          <Route path="/doubleroom" element={<DoubleRoom />} />
          <Route path="/event" element={<Event />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/login" element={<Login updateLoginStatus={setIsLoggedIn} />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
