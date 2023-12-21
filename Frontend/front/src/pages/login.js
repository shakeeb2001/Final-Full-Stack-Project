import React from 'react';
import './login.css'
import Form from 'react-bootstrap/Form';
import loginIcon from '../images/newlogo.png';
import Background from '../images/background.png';



export default function login() {
  return (
<div className='container'>
<img src={Background} alt="Backgound" className="background-image" />
    <Form className='overlay-form'>
    <img src={loginIcon} alt="Login Icon" className="login-icon" />
    <h2>Sign In</h2>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control className='input' type="email" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className='input' type="password" placeholder="Password" />
      </Form.Group>
      <button className='btn mx-auto d-block' >Login</button>
      
    </Form>
</div>
  )
}
