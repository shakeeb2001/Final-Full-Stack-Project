import React, { useState, useEffect } from 'react';
import './BookingHistory.css';

export default function BookingHistory() {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [searchId, setSearchId] = useState('');

useEffect(() => {
  const fetchBookingHistory = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/reservations');
      if (response.ok) {
        const data = await response.json();
        console.log('Fetched data:', data); // Check if data is being fetched
        setBookingHistory(data);
      } else {
        console.error('Failed to fetch booking history');
      }
    } catch (error) {
      console.error('Error fetching booking history:', error);
    }
  };

  fetchBookingHistory();
}, []);


  const handleDelete = async (reservationId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/reservations/${reservationId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted reservation from state
        setBookingHistory((prevHistory) => prevHistory.filter((reservation) => reservation._id !== reservationId));
        console.log(`Reservation with ID ${reservationId} deleted successfully`);
      } else {
        console.error(`Failed to delete reservation with ID ${reservationId}`);
      }
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  const handleEdit = (index) => {
    console.log(`Edit reservation at index ${index}`);
    // Implement logic for editing reservation
  };

  const handleFindById = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/reservations/${searchId}`);
      if (response.ok) {
        const data = await response.json();
        console.log(`Reservations found for ID number ${searchId}:`, data);
        // Handle the found reservations as needed
      } else {
        console.error(`Failed to find reservations for ID number ${searchId}`);
      }
    } catch (error) {
      console.error('Error finding reservations:', error);
    }
  };

  return (
    <div className='container-xl'>
      <h1>Booking History</h1>
      <div className="form-control sm-2 d-flex">
        <input 
          type="text"
          className="form-control"
          placeholder="Search by ID Number"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleFindById}
        >
          Search
        </button>
      </div>
      <br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className='thead' scope="col">Name</th>
            <th className='thead' scope="col">National ID</th>
            <th className='thead' scope="col">Contact Number</th>
            <th className='thead' scope="col">Room Type</th>
            <th className='thead' scope="col">Check In</th>
            <th className='thead' scope="col">Check Out</th>
            <th className='thead' scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {bookingHistory.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation.name}</td>
              <td>{reservation.idNumber}</td>
              <td>{reservation.phoneNumber}</td>
              <td>{reservation.roomType}</td>
              <td>{reservation.checkIn}</td>
              <td>{reservation.checkOut}</td>
              <td>
                <button className='btn btn-danger' id='booking-delete' onClick={() => handleDelete(reservation._id)}>
                  Delete
                </button>
                <button className='btn btn-warning' id='booking-edit' onClick={() => handleEdit(reservation._id)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
