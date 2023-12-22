import React from 'react';
import './signup.css'
import Form from 'react-bootstrap/Form';
import loginIcon from '../component/images/newlogo.png';
import Background from '../component/images/background.png';



export default function login() {
  return (
<div className='container'>
<img src={Background} alt="Backgound" className="background-image" />
    <Form className='overlay-form'>
    <img src={loginIcon} alt="Login Icon" className="login-icon" />
    <h2>Sign Up</h2>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control className='input' type="text" placeholder="Ex:Jhon" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control className='input' type="text" placeholder="Ex:Anderson" />
        <Form.Label>Email Address</Form.Label>
        <Form.Control className='input' type="text" placeholder="Jhon@mail.com" />
        <Form.Label>Username</Form.Label>
        <Form.Control className='input' type="email" placeholder="Enter Username" />
        <Form.Label>Password</Form.Label>
        <Form.Control className='input' type="email" placeholder="Enter password" />
      </Form.Group>
      <button className='btn mx-auto d-block' >Sign Up</button>
      
    </Form>
</div>
  )
}