import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './roomtypes.css';
import img1 from '../component/images/img1.png';
import img2 from '../component/images/img2.png';
import img3 from '../component/images/img3.png';

export default function RoomTypes() {
  const roomTypes = [
    {
      title: 'Single Room',
      description: 'No of Guest: One | $100 Per Night',
      image: img1,
      link: '/singleroom', // Add the link to Single Room component
    },
    {
      title: 'Double Room',
      description: 'No of Guests: 2-3 | $200 Per Night.',
      image: img2,
    },
    {
      title: 'Deluxe Single Room',
      description: 'No of Guests: 1 | $150 Per Night.',
      image: img3,
    },
  ];

  return (
    <div className="rooms">
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src="./vedio.mp4" type='video/mp4'></source>
        </video>
      </div>

      <div className="center-cards">
        <h1 className="name">Accommodations</h1>
        <div className="card-container">
          <Row xs={20} md={10} className="g-4">
            {roomTypes.map((room, idx) => (
              <Col key={idx}>
                <Link to={room.link || '/default-route'}>
                  {/* Use Link to create a link to the specified route */}
                  <Card className="card">
                    <Card.Img variant="top" src={room.image} />
                    <Card.Body>
                      <Card.Title>{room.title}</Card.Title>
                      <Card.Text>{room.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

