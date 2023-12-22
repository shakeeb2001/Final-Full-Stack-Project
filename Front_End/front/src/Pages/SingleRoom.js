// ReservationForm.jsx
import React from "react";
import { Form, Button } from "react-bootstrap";
import "./SingleRoom.css";

export default function ReservationForm() {
  return (
    <div className="single-room-container">
      {/* Background Image */}
      <img
        src={process.env.PUBLIC_URL + "Images/img1.png"}
        alt="Background"
        className="background-image"
      />

      {/* Single Room Information */}
      <div className="room-info-container">
        <h2>Single Room</h2>
        <p>
          Single Room is only reserved for one guest. There is a bedroom with a
          small single size bed and a private bathroom.
        </p>
        <div className="room-details">
          <p className="guest-info">
            No of Guests: <span>1</span>| Room Size: <span>20 m²</span>|Bed
            Size: <span>Small Bed</span> |Private Bath: <span>1</span>
          </p>
          <ul>
            <li>Wifi</li>
            <li>Breakfast</li>
            <li>Room Service</li>
            <li>Air-Conditioner</li>
            <li>Smoke-Free</li>
            <li>Pet Friendly</li>
          </ul>
        </div>
        {/* Additional Image */}
        <img
          src={process.env.PUBLIC_URL + "Images/img1.png"}
          alt="Additional"
          className="additional-image"
        />
      </div>

      {/* Reservation Form */}
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
