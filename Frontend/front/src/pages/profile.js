import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import './profile.css';
//import Man from '../Component/images/man.png';
import { Search } from '@mui/icons-material';

const Profile = () => {
  return (
    <Container >
      <Row>
        <Col>
          <h2>Customer Profile</h2>
          <Form.Group controlId="formSearchId" className="mb-3">
            <InputGroup>
              <Form.Control type="text" placeholder="Enter ID" className='enterid' />
              <InputGroup.Text>
                <Search />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          
        </Col>
        <Col>
          <Form>
            <Form.Group as={Row} controlId="formName" className="mb-3">
              <Form.Label column sm={3}>
                Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formId" className="mb-3">
              <Form.Label column sm={3}>
                ID
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter ID" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPhoneNumber" className="mb-3">
              <Form.Label column sm={3}>
                Phone Number
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Enter phone number" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formEmail" className="mb-3">
              <Form.Label column sm={3}>
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="email" placeholder="Enter email" />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-right">
          <Button variant="primary" className="mr-2">
            Edit
          </Button>
          <Button variant="danger">Delete</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;