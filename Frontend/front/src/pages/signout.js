// Signout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signout.css';
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import loginIcon from '../images/newlogo.png';
import Background from '../images/background.png';

export default function Signout({ updateLoginStatus, setIsAdmin }) {
  const navigate = useNavigate();

  const handleSignout = () => {
    updateLoginStatus(false);
    setIsAdmin(false);

    // Navigate to the home page
    navigate('/');
  };

  const handleCancel = () => {
    // Navigate to the home page without updating state
    navigate('/');
  };

  return (
    <div className='container'>
      <img src={Background} alt="Background1" className="background-images-signout" />
      <Form className='overlay-form-one'>
        <img src={loginIcon} alt="Login Icon" className="login-icon" />
        <h3>Do You want To Signout......</h3>
        <div className="button-container signout-div">
           <button className='button signout' onClick={handleSignout}>Yes</button>
           <button className='button signout' onClick={handleCancel}>Cancel</button>
        </div> 
      </Form>
    </div>
  );
}

