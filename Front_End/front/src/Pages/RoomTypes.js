
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './RoomTypes.css';

export default function RoomTypes() {
  const roomTypes = [
    {
      title: 'Single Room',
      description: 'No of Guest:One | $100 Per Night',
      image: './Images/img1.png',
    },
    {
      title: 'Double Room',
      description: 'No of Guests: 2-3 | $200 Per Night.',
      image: './Images/img2.png',
    },
    {
      title: 'Deluxe Single Room',
      description: 'No of Guests: 1 | $150 Per Night.',
      image: './Images/img3.png',
    },
  ];

  return (
    <div className="center-cards">
      <h1 className="name">Accommodations</h1>
      <div className="card-container">
        <Row xs={20} md={10} className="g-4">
          {roomTypes.map((room, idx) => (
            <Col key={idx}>
              <Card className="card">
                <Card.Img variant="top" src={room.image} />
                <Card.Body>
                  <Card.Title>{room.title}</Card.Title>
                  <Card.Text>{room.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
