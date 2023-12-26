import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './DeluxeRoom.css';
import DoubleImg from '../images/img2.png';

export default function DeluxRoom() {
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    phoneNumber: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Double Room',
  });

  const [showModal, setShowModal] = useState(false);
  const [reservationStatus, setReservationStatus] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Display the modal to confirm reservation
    setShowModal(true);
  };

  const handleModalYes = async () => {
    // Log the form data to the console
    console.log('Form Data:', formData);

    try {
      // Make an API call to your server to save the reservation
      const response = await axios.post('http://localhost:3001/api/reservations', formData);

      // Assuming your server responds with a success message
      if (response.data.success) {
        setReservationStatus('success');

        // Close the modal after 3 seconds
        setTimeout(() => {
          // Clear form data after successful submission
          setFormData({
            name: '',
            idNumber: '',
            phoneNumber: '',
            checkIn: '',
            checkOut: '',
            roomType: 'Delux Room',
          });

          // Close the modal
          setShowModal(false);
          // Clear reservation status
          setReservationStatus(null);
        }, 3000);
      } else {
        // Handle the case where the reservation failed
        setReservationStatus('failure');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      // Handle errors, setReservationStatus('failure') or display an error message
    }
  };

  const handleCloseModal = () => {
    // Clear form data after successful submission
    setFormData({
      name: '',
      idNumber: '',
      phoneNumber: '',
      checkIn: '',
      checkOut: '',
      roomType: 'Delux Room',
    });

    // Close the modal
    setShowModal(false);
    // Clear reservation status
    setReservationStatus(null);
  };

  return (
    <div className="room-container">
      <img src={DoubleImg} alt="Background" className="background-image" id='deluxroom' />
      <div className="room-info-container">
        <h2>Delux Single Room</h2>
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

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {reservationStatus === null ? (
            <p>Do you want to reserve?</p>
          ) : (
            <div className={`reservation-status text-center ${reservationStatus}`}>
              <p className="model-class">Reserved successfully!</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {reservationStatus === null ? (
            <>
              <Button variant="secondary" onClick={handleCloseModal}>
                No
              </Button>
              <Button variant="primary" onClick={handleModalYes}>
                Yes
              </Button>
            </>
          ) : null}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
