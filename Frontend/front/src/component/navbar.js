import React from 'react';
import { Link } from 'react-router-dom';
import NavBootstrap from 'react-bootstrap/Nav';
import './navbar.css';
import loginIcon from '../component/images/newlogo.png';

function Navbar() {
  return (
    <>
      <NavBootstrap className="justify-content-center" activeKey="/">
        {/* Logo Icon */}
        <NavBootstrap.Item>
          <img src={loginIcon} alt="Logo" className="logo-icon" />
        </NavBootstrap.Item>
        <NavBootstrap.Item>
          <Link to="/" className="nav-link-1">
            Home
          </Link>
        </NavBootstrap.Item>
        <NavBootstrap.Item>
          <Link to="/roomtypes" className="nav-link-1">
            RoomTypes
          </Link>
        </NavBootstrap.Item>
        <NavBootstrap.Item>
          <Link to="/login" className="nav-link-1">
            Login
          </Link>
        </NavBootstrap.Item>
        <NavBootstrap.Item>
          <Link to="/signup" className="nav-link-1">
            Signup
          </Link>
        </NavBootstrap.Item>
        <NavBootstrap.Item>
          <Link to="/signout" className="nav-link-1">
            Signout
          </Link>
        </NavBootstrap.Item>
      </NavBootstrap>
    </>
  );
}

export default Navbar;


