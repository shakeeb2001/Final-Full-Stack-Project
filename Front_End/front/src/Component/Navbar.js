import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NavBootstrap from 'react-bootstrap/Nav';
import './Navbar.css';
import loginIcon from '../Component/images/newlogo.png';

function Navbar({ isLoggedIn, updateLoginStatus, isAdmin }) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('isAdmin:', isAdmin);

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
    // Perform sign-out logic, e.g., update state and navigate to the signout page
    updateLoginStatus(false, false); // Setting both to false when signing out
    navigate('/signout'); // Navigate to the signout page
    // Additional logic as needed
  };

  // Log isAdmin only when it's defined
  const isSignOutPage = location.pathname === '/signout';

  

  return (
    <>
      <NavBootstrap className="justify-content-center" defaultActiveKey="/">
        <NavBootstrap.Item>
          <Link to="/" class="nav-link active">
            <img src={loginIcon} alt="Logo" className="logo-icon" />
          </Link>
        </NavBootstrap.Item>
        <NavBootstrap.Item>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavBootstrap.Item>
        <NavBootstrap.Item>
          <Link to="/roomtypes" className="nav-link">
            Accommodations
          </Link>
        </NavBootstrap.Item>
        <NavBootstrap.Item onClick={handleScrollToEvents}>
          <Link to="/#Container2" className="nav-link">
            Events
          </Link>
        </NavBootstrap.Item>
        <NavBootstrap.Item onClick={handleScrollToDining}>
          <Link to="/dining" className="nav-link">
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

        {/* Conditional rendering based on login status and page */}
        {isLoggedIn ? (
          <NavBootstrap.Item>
            {isSignOutPage ? null : (
              // Use <Link> to navigate to the signout page
              <Link to="/signout" className="nav-link" onClick={handleSignOut}>
                Sign Out
              </Link>
            )}
          </NavBootstrap.Item>
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
    </>
  );
}

export default Navbar;