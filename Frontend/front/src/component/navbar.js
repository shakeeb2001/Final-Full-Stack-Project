import React from 'react';
import logo from "../component/images/logo.png";
import './navbar.css';

const Navbar = () => {
  return (
    <div className="sidenav">
      <div className="logo">
      <img src={logo} alt="Logo"/>
      </div>
      
      <a href="Home">home</a>

      <button className="logout">Logout</button>
    </div>
  );
}

export default Navbar;
