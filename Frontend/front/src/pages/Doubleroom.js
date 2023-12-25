import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Doubleroom.css";
import DoubleImg from '../images/img2.png';
import BookingHistory from './BookingHistory';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    phoneNumber: "",
    checkIn: "",
    checkOut: "",
    roomType: "Double Room",
  });

  const [bookingHistory, setBookingHistory] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const reservation = {
        name: formData.name,
        idNumber: formData.idNumber,
        phoneNumber: formData.phoneNumber,
        roomType: formData.roomType,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
    };

    try {
        // Send a POST request to save the reservation data
        const response = await fetch('http://localhost:3001/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservation),
        });

        if (response.ok) {
            console.log('Reservation saved successfully');
        } else {
            console.error('Failed to save reservation');
        }
    } catch (error) {
        console.error('Error saving reservation:', error);
    }

    // Update booking history locally
    setBookingHistory((prevHistory) => [...prevHistory, reservation]);

    // Clear form data after submission
    setFormData({
        name: "",
        idNumber: "",
        phoneNumber: "",
        checkIn: "",
        checkOut: "",
        roomType: "Double Room",
    });
};

  return (
    <div className="room-container">
      <img src={DoubleImg} alt="Background" className="background-image" id='singleroom' />
      <div className="room-info-container">
        <h2>{formData.roomType}</h2>
        <p>
          Deluxe Single Room is only reserved for one guest. There is a bedroom with a
          small double-size bed and a private bathroom.
        </p>
        <div className="room-details">
          <p className="guest-info">
            No of Guests: <span>1</span>| Room Size: <span>20 m²</span>|Bed
            Size: <span>Small Double</span> |Private Bath: <span>1</span>
          </p>
          <ul>
            <li>Wifi</li>
            <li>Mini Bar</li>
            <li>Breakfast</li>
            <li>Room Service</li>
            <li>Air-Conditioner</li>
            <li>Smoke-Free</li>
            <li>Pet Friendly</li>
          </ul>
        </div>
        <img src={DoubleImg} alt="Additional" className="additional-image" id='deluxroom' />
      </div>
      <div className="reservation-form-container">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="idNumber">
            <Form.Label>National ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter The NIC Number"
              value={formData.idNumber}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="phoneNumber">
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="checkIn">
            <Form.Label>Check In</Form.Label>
            <Form.Control
              type="date"
              value={formData.checkIn}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="checkOut">
            <Form.Label>Check Out</Form.Label>
            <Form.Control
              type="date"
              value={formData.checkOut}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="roomType" style={{ display: "none" }}>
            <Form.Control type="text" value={formData.roomType} readOnly />
          </Form.Group>

          <Button variant="dark" type="submit">
            Reserve
          </Button>
        </Form>
      </div>
      <BookingHistory bookingHistory={bookingHistory} />
    </div>
  );
}
