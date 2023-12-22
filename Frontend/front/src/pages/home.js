import React from 'react';
import './home.css';
import Background from '../component/images/Hotel.png';

export default function Home() {
  return (
    <div className="Container">
      <img src={Background} alt="Background" className="background-image" />
      <div className="contentContainer">
        <h1 className="homeTitle">Welcome to <br /> Crystel Cascade<br/> Hotel</h1>
        <div className="backgroundImage">
          <h2><i>
            Perched on the pristine shores of Mount Lavinia Beach, <br/>Hotel Crystel Cascade
            stands as a beacon of hospitality<br/> along the coastline of Colombo.
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
