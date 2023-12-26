// App.js
import React, { useState, useEffect } from "react";
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
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check local storage for login status and isAdmin
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedIsAdmin = localStorage.getItem('isAdmin');

    // Update state based on local storage values
    setIsLoggedIn(storedIsLoggedIn === 'true');
    setIsAdmin(storedIsAdmin === 'true');
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} updateLoginStatus={setIsLoggedIn} isAdmin={isAdmin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roomtype" element={<RoomType />} />
          <Route path="/bookinghistory" element={<BookingHistory />} />
          <Route path="/deluxroom" element={<DeluxRoom />} />
          <Route path="/singleroom" element={<SingleRoom />} />
          <Route path="/doubleroom" element={<DoubleRoom />} />
          <Route path="/event" element={<Event isAdmin={isAdmin}/>} />
          <Route path="/dining" element={<Dining isAdmin={isAdmin} />} />
          <Route path="/login" element={<Login updateLoginStatus={(status, admin) => { setIsLoggedIn(status); setIsAdmin(admin); }} />} />
          <Route path="/signout" element={<Signout updateLoginStatus={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
