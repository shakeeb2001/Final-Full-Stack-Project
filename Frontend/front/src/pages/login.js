import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Alert, Modal, Spinner } from 'react-bootstrap';
import axios from 'axios';
import loginIcon from '../images/newlogo.png';
import Background from '../images/background.png';

export default function Login({ updateLoginStatus }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios.post('https://final-full-stack-project-backend.vercel.app/login', { username, password })
      .then(result => {
        setIsLoading(false);

        if (result.data === 'success') {
          const isAdmin = username === 'admin' && password === '1234';
          console.log('Login successful. isAdmin:', isAdmin);
          updateLoginStatus(true, isAdmin, username);
          setShowSuccessModal(true);
          setTimeout(() => {
            setShowSuccessModal(false);
            navigate('/');
          }, 2000);
        } else {
          setLoginError('Login failed. Please check your credentials.');
          console.log('Login failed');
        }
      })
      .catch(error => {
        setIsLoading(false);
        console.error('API request failed:', error);
      });
  };

  return (
    <div className='container' id='login-container'>
      <img src={Background} alt="Background2" className="background-images-logi" />
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
        <div className="button-container">
          <button className='button'>Login</button>
        </div>
        <p className="signup-link">
          Don't have an account? <Link className="signup-link-route" to="/signup">Sign Up</Link>
        </p>

        <Modal show={showSuccessModal} backdrop="static" keyboard={false} centered>
          <Modal.Body>
            <Alert variant="success">
              <Spinner animation="border" size="sm" /> Logging in...
            </Alert>
          </Modal.Body>
        </Modal>

        {loginError && (
          <Alert variant="danger" onClose={() => setLoginError(null)} dismissible>
            {loginError}
          </Alert>
        )}
      </Form>
    </div>
  );
}
