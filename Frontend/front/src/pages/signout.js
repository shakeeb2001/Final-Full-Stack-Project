import React from 'react'
import './signout.css';
import Form from 'react-bootstrap/Form';
import loginIcon from '../component/images/newlogo.png';
import Background from '../component/images/background.png';

export default function signout() {

  return (

    <div className='signup-container'>
    <img src={Background} alt="Background" className="signup-background-image" />
    <Form className='signup-overlay-form'>
        <img src={loginIcon} alt="Login Icon" className="login-icon" />
        <h3>Do You want To Signout......</h3>
          <button className='btn'> Yes </button>
          <button className='btn'> Cancel </button>
    </Form>
</div>
);
}