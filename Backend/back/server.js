const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const multer = require('multer');
const SignupModel = require('../back/models/signupmodel');
const EventModel = require('../back/models/eventcardmodel');
const DiningModel = require('../back/models/diningcardmodel');

const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb' }));

mongoose.connect("mongodb://localhost:27017/HotelBookingSystem");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/signup', (req, res) => {
    SignupModel.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.json(err));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    SignupModel.findOne(req.body)
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json('success');
                } else {
                    res.json('Incorrect Password..');
                }
            } else {
                res.json('No Record Existing..');
            }
        })
        .catch(err => res.json(err));
});

app.post('/api/events', upload.single('image'), (req, res) => {
    EventModel.create({
        title: req.body.title,
        description: req.body.description,
        image: req.file.buffer.toString('base64'),
    })
        .then(newEvent => {
            console.log('Created new event:', newEvent);
            res.json(newEvent);
        })
        .catch(err => {
            console.error('Error creating event:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.post('/api/dinings', upload.single('image'), (req, res) => {
    DiningModel.create({
        title: req.body.title,
        description: req.body.description,
        image: req.file.buffer.toString('base64'),
    })
        .then(newEvent => {
            console.log('Created new event:', newEvent);
            res.json(newEvent);
        })
        .catch(err => {
            console.error('Error creating event:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.get('/api/events', async (req, res) => {
    try {
      const existingCards = await EventModel.find();
      res.json(existingCards);
    } catch (error) {
      console.error('Error fetching existing cards:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/api/dinings', async (req, res) => {
    try {
      const existingCards = await DiningModel.find();
      res.json(existingCards);
    } catch (error) {
      console.error('Error fetching existing cards:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Handle DELETE request to delete an event card
app.delete('/api/events/:eventId', async (req, res) => {
    const { eventId } = req.params;
    
    try {
        const deletedEvent = await EventModel.findByIdAndDelete(eventId);
        if (deletedEvent) {
            res.json({ message: 'Event card deleted successfully' });
        } else {
            res.status(404).json({ error: 'Event card not found' });
        }
    } catch (error) {
        console.error('Error deleting event card:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/api/dinings/:diningId', async (req, res) => {
    const { diningId } = req.params;
    
    try {
        const deletedDining = await DiningModel.findByIdAndDelete(diningId);
        if (deletedDining) {
            res.json({ message: 'Dining card deleted successfully' });
        } else {
            res.status(404).json({ error: 'Dining card not found' });
        }
    } catch (error) {
        console.error('Error deleting Dining card:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3001, () => {
    console.log("server is running");
});
