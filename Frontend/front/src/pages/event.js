import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './event.css'; // Import the CSS file

const Event = ({ isAdmin }) => {
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({ title: '', description: '', image: null });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCard((prevCard) => ({ ...prevCard, [name]: reader.result }));
      };
      if (files.length > 0) {
        reader.readAsDataURL(files[0]);
      }
    } else {
      setNewCard((prevCard) => ({ ...prevCard, [name]: value }));
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleAddCard = async () => {
    try {
      const formData = new FormData();
      formData.append('title', newCard.title);
      formData.append('description', newCard.description);

      if (newCard.image) {
        formData.append('image', dataURItoBlob(newCard.image));
      }

      const response = await fetch('https://final-full-stack-project-backend.vercel.app/events', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const addedEvent = await response.json();
        setCards([...cards, addedEvent]);
        setNewCard({ title: '', description: '', image: null });
        handleCloseModal();
      } else {
        console.error('Failed to add a new event card:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('https://final-full-stack-project-backend.vercel.app/events');
        if (response.ok) {
          const existingCards = await response.json();
          setCards(existingCards);
        } else {
          const errorData = await response.json();
          console.error('Failed to fetch existing cards:', response.status, response.statusText, errorData);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCards();
  }, []);

  const handleDeleteCard = async (cardId) => {
    try {
      const response = await fetch(`https://final-full-stack-project-backend.vercel.app/events/${cardId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedCards = cards.filter((card) => card._id !== cardId);
        setCards(updatedCards);
      } else {
        console.error('Failed to delete event card:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="container-add-btn">
        {isAdmin && (
          <div className="button-container event-div">
            <button className='button event-add' onClick={handleShowModal}>Add</button>
          </div>
        )}
      </div>
      <div className="container">
        {cards.map((card) => (
           <Card key={card._id} className="card1">
           <Card.Img variant="top" src={`data:image/png;base64,${card.image}`} alt={card.title} />
           <Card.Body>
             <Card.Title>{card.title}</Card.Title>
             <Card.Text>{card.description}</Card.Text>
           </Card.Body>
           {isAdmin && (
             <div className="button-container event-delete-div">
               <button className='button event-delete' onClick={() => handleDeleteCard(card._id)}>Delete</button>
             </div>
           )}
         </Card>
        ))}

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  value={newCard.title}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter description"
                  name="description"
                  value={newCard.description}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" name="image" onChange={handleInputChange} accept="image/*" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <div className="button-container event-card-div">
              <button className='button event-close-card' onClick={handleCloseModal}>Close</button>
              <button className='button event-add-card' onClick={handleAddCard}>Add Card</button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Event;
