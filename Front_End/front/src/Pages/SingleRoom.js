import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './SingleRoom.css';

export default function ReservationForm() {
  return (
    
    <div className="single-room-container">
    
      <div className="reservation-form-container">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" />
          </Form.Group>

          <Form.Group controlId="formCheckIn">
            <Form.Label>Check In</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group controlId="formCheckOut">
            <Form.Label>Check Out</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Button variant="dark" type="submit">
            Reserve
          </Button>
        </Form>
      </div>
    </div>
    
  );
}

