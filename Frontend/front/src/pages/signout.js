import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signout.css';
import Form from 'react-bootstrap/Form';
import loginIcon from '../images/newlogo.png';
import Background from '../images/background.png';

export default function Signout() {
  const navigate = useNavigate();

  const handleSignout = () => {
    // Add signout logic here, if needed

    // Navigate to the home page
    navigate('/');
  };

  const handleCancel = () => {
    // Use the navigate function to go to the home page
    navigate('/');
  };

  return (
    <div className='container'>
      <img src={Background} alt="Background1" className="background-im" />
      <Form className='overlay-form-one'>
        <img src={loginIcon} alt="Login Icon" className="login-icon" />
        <h3>Do You want To Signout......</h3>
        <button className='btn' onClick={handleSignout}>
          Yes
        </button>
        <button className='btn' onClick={handleCancel}>
          Cancel
        </button>
      </Form>
    </div>
  );
}
