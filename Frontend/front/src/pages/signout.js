import React from 'react'
import './signout.css';
import Form from 'react-bootstrap/Form';
import loginIcon from '../images/newlogo.png';
import Background from '../images/background.png';

export default function signout() {

  return (

    <div className='container'>
      <img src={Background} alt="Backgound" className="background-image" />

      <Form className='overlay-form'>
      <img src={loginIcon} alt="Login Icon" className="login-icon" />
      <h3>Do You want To Signout......</h3>
          <button className='btn'> Yes </button>
          <button className='btn'> Cancel </button>
      </Form>

    </div>
  )
}
