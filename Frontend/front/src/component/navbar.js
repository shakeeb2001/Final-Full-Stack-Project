import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import NavBootstrap from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge'; 
import './navbar.css';
import loginIcon from '../images/newlogo.png';
import notificationIcon from '../images/notification.png'; 

function Navbar({ isLoggedIn, updateLoginStatus, isAdmin, username }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [notification, setNotification] = useState(null);

  const ws = new WebSocket('wss://final-full-stack-project-backend.vercel.app'); 

  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'newEventNotification') {
        setNotification(`New event added: ${data.eventTitle}`);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      ws.close();
    };
  }, [ws]);

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

  const handleNotifications = () => {
    // Handle notification logic here
    // You can show notifications or navigate to a notifications page
  };

  const isSignOutPage = location.pathname === '/signout';

  return (
    <>
      <NavbarBootstrap className='nav justify-content-center' expand="lg">
        <NavbarBootstrap.Brand>
          <NavLink to="/">
            <img src={loginIcon} alt="Logo" className="logo-icon" />
          </NavLink>
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <NavBootstrap className="mr-auto">
            <NavBootstrap.Item>
              <NavLink to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </NavBootstrap.Item>
            <NavBootstrap.Item>
              <NavLink to="/roomtype" className="nav-link" activeClassName="active">
                Accommodations
              </NavLink>
            </NavBootstrap.Item>
            <NavBootstrap.Item onClick={handleScrollToEvents}>
              <NavLink to="/#Container2" className="nav-link" activeClassName="event">
                Events
              </NavLink>
            </NavBootstrap.Item>
            <NavBootstrap.Item onClick={handleScrollToDining}>
              <NavLink to="/#Container3" className="nav-link" activeClassName="dining">
                Dining
              </NavLink>
            </NavBootstrap.Item>
            <NavBootstrap.Item>
              <NavLink to="/aboutus" className="nav-link" onClick={handleScrollToAboutus} activeClassName="active">
                About Us
              </NavLink>
            </NavBootstrap.Item>
            {isAdmin && (
              <NavBootstrap.Item>
                <NavLink to="/bookinghistory" className="nav-link" activeClassName="active">
                  Booking History
                </NavLink>
              </NavBootstrap.Item>
            )}
            {/* Add other Nav items as needed */}
          </NavBootstrap>
          <NavBootstrap>
            {/* Add Notifications Dropdown with Image */}
            <NavDropdown className="notification-dropdown" title={<img src={notificationIcon} alt="Notification" />} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleNotifications}>
                {notification ? (
                  <div>
                    {notification} <Badge variant="danger">1</Badge>
                  </div>
                ) : (
                  'No new notifications'
                )}
              </NavDropdown.Item>
            </NavDropdown>

            {isLoggedIn ? (
              <NavDropdown className="profile-dropdown" title={username ? `Hi ${username}` : ''} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
                <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavBootstrap.Item>
                {isSignOutPage ? null : (
                  <NavLink to="/login" className="nav-link-signin" activeClassName="active">
                    Sign In
                  </NavLink>
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
