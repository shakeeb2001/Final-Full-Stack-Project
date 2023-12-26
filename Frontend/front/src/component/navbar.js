// Navbar.js
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NavBootstrap from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import loginIcon from '../images/newlogo.png';

function Navbar({ isLoggedIn, updateLoginStatus, isAdmin, username }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToEvents = () => {
    const eventsSection = document.getElementById('events-container');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToDining = () => {
    const diningSection = document.getElementById('dining-container');
    if (diningSection) {
      diningSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAboutus = () => {
    const aboutUsSection = document.getElementById('footer-container');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSignOut = () => {
    updateLoginStatus(false);
    navigate('/signout');
  };

  const isSignOutPage = location.pathname === '/signout';

  return (
    <>
      <NavbarBootstrap className='nav justify-content-center' expand="lg">
        <NavbarBootstrap.Brand>
          <Link to="/" className="nav-link">
            <img src={loginIcon} alt="Logo" className="logo-icon" />
          </Link>
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <NavBootstrap className="mr-auto">
            <NavBootstrap.Item>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavBootstrap.Item>
            <NavBootstrap.Item>
              <Link to="/roomtype" className="nav-link">
                Accommodations
              </Link>
            </NavBootstrap.Item>
            <NavBootstrap.Item onClick={handleScrollToEvents}>
              <Link to="/#Container2" className="nav-link">
                Events
              </Link>
            </NavBootstrap.Item>
            <NavBootstrap.Item onClick={handleScrollToDining}>
              <Link to="/#Container3" className="nav-link">
                Dining
              </Link>
            </NavBootstrap.Item>
            {isAdmin && (
              <NavBootstrap.Item>
                <Link to="/bookinghistory" className="nav-link">
                  Booking History
                </Link>
              </NavBootstrap.Item>
            )}
            <NavBootstrap.Item>
              <Link to="/#" className="nav-link" onClick={handleScrollToAboutus}>
                About Us
              </Link>
            </NavBootstrap.Item>
          </NavBootstrap>
          <NavBootstrap>
            {isLoggedIn ? (
              <NavDropdown title={username ? `Hi ${username}` : ''} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/profile" className="nav-link " id='profil-link'>
                    Profile
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavBootstrap.Item>
                {isSignOutPage ? null : (
                  <Link to="/login" className="nav-link">
                    Sign In
                  </Link>
                )}
              </NavBootstrap.Item>
            )}
          </NavBootstrap>
        </NavbarBootstrap.Collapse>
      </NavbarBootstrap>
    </>
  );
}

export default Navbar;
