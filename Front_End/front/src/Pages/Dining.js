import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Dining.css';

export default function Dining() {
  return (
    <div className="page-background">
      <div className="container">
        <Card className="card1">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'Images/img6.png'} />
          <Card.Body className='cardbody'>
            <Card.Title>Lounge Bar</Card.Title>
            <Card.Text>
              The spot to wind down after an adventurous day.<br></br>
              Nestled against the picturesque coastline with stunning views of the azure waters, the Beachside Bar is a haven that encapsulates the allure of the beachfront. Whether you're unwinding after a day of seaside adventures or yearning for a serene evening, the Beachside Bar invites you to escape as you savor its distinctive drinks, letting the rhythmic waves set the pace for a truly relaxing experience.
            </Card.Text>
            <Button variant="primary" className='button1'>Edit</Button>
          </Card.Body>
        </Card>

        <Card className="card1">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'Images/img7.png'} />
          <Card.Body className='cardbody'>
            <Card.Title>Cafe C</Card.Title>
            <Card.Text>
              Cafe C - Crystal Cascade<br></br>
              Set along the sun-kissed shores, Beachside Bistro offers a tranquil, intimate, and romantic ambiance, providing the perfect setting for a delightful dining experience – an ideal choice for a romantic evening with your special someone. With a relaxed beachside vibe that creates the perfect backdrop for an intimate meal, Beachside Bistro is not only a charming spot for romantic dinners but also serves as an exclusive venue for private beachfront parties and intimate corporate gatherings, accommodating up to 60 guests.
            </Card.Text>
            <Button variant="primary" className='button1'>Edit</Button>
          </Card.Body>
        </Card>

        <Card className="card1">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'Images/img8.png'} />
          <Card.Body className='cardbody'>
            <Card.Title>Panorama</Card.Title>
            <Card.Text>
              An oceanfront feast with mesmerizing views.<br></br>
              Set against the backdrop of breathtaking ocean vistas, Seaview Buffet presents a diverse selection of culinary delights, featuring a fusion of coastal-inspired dishes. Indulge in a culinary journey that includes fresh seafood, tropical flavors, and international cuisines such as Mediterranean, Asian, and local specialties. The focal point of our buffets, held throughout the day, is the interactive culinary stations, offering delights from the beachside grill, a vibrant salad bar, and a pasta counter. 
            </Card.Text>
            <Button variant="primary" className='button1'>Edit</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
