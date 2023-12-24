import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import loginIcon from '../images/newlogo.png';
import Background from '../images/background.png';

export default function Login({ updateLoginStatus }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', { username, password })
      .then(result => {
        console.log(result);

        // Assuming your server responds with 'Login Successfully..' for a successful login
        if (result.data === 'sucsses') {
          console.log('Navigating to /');
          updateLoginStatus(true); // Update login status using the passed prop
          navigate('/');
          console.log('Navigation complete');
        } else {
          console.log('Login failed'); // Add a log for unsuccessful login for debugging
        }
      })
      .catch(error => {
        console.error('API request failed:', error);
        // Handle the error, e.g., display an error message to the user
      });
  }

  return (
    <div className='container'>
      <img src={Background} alt="Background2" className="background-images" />
      <Form className='overlay-form' onSubmit={handleSubmit}>
        <img src={loginIcon} alt="Login Icon" className="login-icon" />
        <h2>Sign In</h2>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className='input'
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className='input'
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <button className='btn mx-auto d-block'>Login</button>
      </Form>
    </div>
  );
}
