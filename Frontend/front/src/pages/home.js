import React from 'react';
import './home.css';
import Background from '../images/Hotel.png';

export default function Home() {
  return (
    <div className="Container">
      <img src={Background} alt="Background" className="background-image" />
      <div className="contentContainer">
        <h1 className="homeTitle">Welcome to Crystel Cascade Hotel</h1>
        <div className="backgroundImage">
          <h2><i>
            Perched on the pristine shores of Mount Lavinia Beach, Hotel Crystel Cascade
            stands as a beacon of hospitality along the coastline of Colombo.
            </i></h2>
        </div>
        <br />
        <div className="centered-content">
          <button className="btn btn-secondary">Book Now</button>
        </div>
      </div>
    </div>
  );
}
