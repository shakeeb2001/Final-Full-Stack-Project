// UserProfile.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import manPic from "../component/images/man.png";
import './profile.css';

const UserProfile = () => {
  const initialFormData = {
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const userInfo = {
    name: 'John Doe',
    address: '123 Main St, Cityville',
    phoneNumber: '555-1234',
    email: 'john.doe@example.com',
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({
      name: userInfo.name,
      address: userInfo.address,
      phoneNumber: userInfo.phoneNumber,
      email: userInfo.email,
    });
  };

  const handleSaveClick = () => {
    const updatedUserInfo = {
      name: formData.name,
      address: formData.address,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
    };

    // In a real application, you might use state management tools like Redux to update global state
    // or send a request to your server to persist the changes.
    // For this example, we'll just log the updated data to the console.
    console.log('Updated userInfo:', updatedUserInfo);

    setIsEditing(false);
    setFormData(initialFormData);
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card className="text-center">
            <Card.Img className='profile-pic' variant="top" src={manPic} alt="Profile" />
            <Card.Body>
              <h4 className='profile-name'>{userInfo.name}</h4>
              <p className='profile-details'>
                {userInfo.address}<br />
                {userInfo.phoneNumber}<br />
                {userInfo.email}
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className='text-center2'>
            <Card.Body>
              {isEditing ? (
                <Button className='save-button' variant='outline-success' onClick={handleSaveClick}>Save</Button>
              ) : (
                <Button className='edit-button' variant='outline-secondary' onClick={handleEditClick}>Edit</Button>
              )}
              <Form className='Form'>
                <Form.Group as={Row} className="mb-3" controlId="formName">
                  <Form.Label column sm="2">
                    Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      placeholder={userInfo.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={!isEditing}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formAddress">
                  <Form.Label column sm="2">
                    Address
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      placeholder={userInfo.address}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      disabled={!isEditing}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPhoneNumber">
                  <Form.Label column sm="2">
                    Tel-Number
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="tel"
                      placeholder={userInfo.phoneNumber}
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      disabled={!isEditing}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formEmail">
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="email"
                      placeholder={userInfo.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={!isEditing}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;














