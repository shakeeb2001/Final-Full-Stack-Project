import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="homeContainer">
      <h1 className="homeTitle">Welcome to Hotel ABC</h1>
        <div className="backgroundImage">
          <h2>Perched on the pristine shores of Mount Lavinia Beach, Hotel ABC stands as a beacon of hospitality along the coastline of Colombo. This renowned hotel, with a history as rich as the sea it faces, invites guests to indulge in the captivating beauty of Mount Lavinia Beach. As one of the esteemed establishments in this coastal haven, Hotel ABC seamlessly blends tradition and modernity to craft memorable experiences for guests, weaving a story that resonates with both seasoned travelers and those embarking on new adventures.</h2>
        </div>
        <div><button className="bookNowButton">Book Now</button></div>

    </div>
  );
}

