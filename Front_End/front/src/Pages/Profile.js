import React from 'react';
import { Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <Row>
        <Col>
          <h2 className='profile-title'>Customer Profile</h2>
        </Col>
      </Row>
      <Row>
        <Col className="mx-auto">
          <Form>
            <Form.Group as={Row} controlId="formName" className="mb-3">
              <Form.Label column sm={2}>
                First Name
              </Form.Label>
              <Col sm={3}>
                <Form.Control type="text" placeholder="Enter First Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formlastname" className="mb-3">
              <Form.Label column sm={2}>
                Last Name
              </Form.Label>
              <Col sm={3}>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formemail" className="mb-3">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={3}>
                <Form.Control type="text" placeholder="Enter Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formusername" className="mb-3">
              <Form.Label column sm={2}>
                Username
              </Form.Label>
              <Col sm={3}>
                <Form.Control type="text" placeholder="Enter Username" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPassword" className="mb-3">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={3}>
                <Form.Control type="text" placeholder="Enter Password" />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-right">
          <div className="d-flex align-items-center">
            <Button variant="primary" className="mr-2">
              Edit
            </Button>
            <Button variant="danger">Delete</Button>
            <Dropdown className="dropdownmenu">
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                John Doe
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
               
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
