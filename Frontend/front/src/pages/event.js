import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './event.css'; // Import the CSS file
import Weddingimg from '../component/images/wedding.png';
import Engagementimg from '../component/images/engagement.png';
import Birthdayimg from '../component/images/birthday.png';
import Meetingimg from '../component/images/meeting.png';

const Event = ({ isAdmin }) => {

  return (
    <div className="container">
         
        <div className="btn-btn-add">
          <Button variant="primary" className="add-button">
            Add
          </Button>
        </div>
      
      <Card className="card1">
        <Card.Img variant="top" src={Weddingimg} alt='wedding'/>
        <Card.Body>
          <Card.Title>Weddings</Card.Title>
          <Card.Text>
            Crystal Cascade Hotel is the epitome of elegance and sophistication, making it the ideal venue for your dream wedding.<br/>
            Nestled amidst breathtaking natural beauty, this exquisite hotel offers a picturesque backdrop for your special day.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card1">
        <Card.Img variant="top" src={Engagementimg} alt='engagement'/>
        <Card.Body>
          <Card.Title>Engagements</Card.Title>
          <Card.Text>
            Crystal Cascade Hotel is the perfect venue for hosting memorable engagement events.<br/>
            With versatile event spaces, state-of-the-art facilities, and a dedicated team of professionals.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card1">
        <Card.Img variant="top" src={Birthdayimg} alt='birthday'/>
        <Card.Body>
          <Card.Title>Birthdays</Card.Title>
          <Card.Text>
          Crystal Cascade Hotel is the perfect venue for hosting unforgettable birthday events. Our exquisite facilities, combined with personalized service, create an enchanting atmosphere for celebrating special moments with spacious event spaces and breathtaking views, your birthday celebration at Crystal Cascade Hotel will be a cherished memory 
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card1">
        <Card.Img variant="top" src={Meetingimg} alt='meeting'/>
        <Card.Body>
          <Card.Title>Meetings</Card.Title>
          <Card.Text>
          Located in a picturesque setting, Crystal Cascade Hotel adds a touch of elegance to your events<br/> 
          Creating a conducive environment for productive discussions and successful gatherings. 
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}


export default Event;

