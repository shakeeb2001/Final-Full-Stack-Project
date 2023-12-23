import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Routes, } from 'react-router-dom';
//import Login from './Pages/Login';
import RoomTypes from './Pages/RoomTypes';
import SingleRoom from './Pages/SingleRoom';
import DoubleRoom from './Pages/DoubleRoom';
import DeluxeSRoom from './Pages/DeluxeSRoom';
import Navbar from './Component/Navbar';
import Dining from './Pages/Dining';




function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="roomtypes" element={<RoomTypes />} />
      <Route path="/singleroom" element={<SingleRoom />} />
      <Route path="doubleroom" element={<DoubleRoom />} />
      <Route path="deluxesroom" element={<DeluxeSRoom />} />
      <Route path="navbar" element={<Navbar />} />
      <Route path="dining" element={<Dining />} />

      
      
     

      
    </Routes>
  </BrowserRouter>
  );
}

export default App;




