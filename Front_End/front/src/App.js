import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Routes, } from 'react-router-dom';
//import Login from './Pages/Login';
import RoomTypes from './Pages/RoomTypes';
import SingleRoom from './Pages/SingleRoom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/roomtypes" element={<RoomTypes />} />
      <Route path="/singleroom" element={<SingleRoom />} />

      
    </Routes>
  </BrowserRouter>
  );
}

export default App;




