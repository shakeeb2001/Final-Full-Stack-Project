const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const multer = require('multer');
const SignupModel = require('../back/models/signupmodel');
const EventModel = require('../back/models/eventcardmodel');
const DiningModel = require('../back/models/diningcardmodel');
const BookingModel = require('../back/models/bookinghistrotymodel');

const app = express(); 

app.use(cors(

    {
        origin: ["https://final-full-stack-project-frontend.vercel.app"], 
        methods: ["POST","GET","PUT","DELETE"], 
        credentials: true
    }
));

app.use(express.json({ limit: '20mb' }));
const MONGODB_URI = 'mongodb+srv://shakeeb:226284@mycluster.hitx68p.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI);

const connection = mongoose.connection;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get("/hellow" , (req,res)=>{
    res.json("hellow");
})

app.post('/signup', (req, res) => {
    SignupModel.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.json(err));
});

app.get('/signup/:username', async (req, res) => {
    const { username } = req.params;
  
    try {
      const user = await SignupModel.findOne({ username });
  
      if (user) {
        res.json({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          username: user.username,
          password: user.password, // Note: It's not recommended to send the password to the client
        });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.put('/signup/:username', async (req, res) => {
    const { username } = req.params;
    const updatedUserData = req.body;
  
    try {
      const updatedUser = await SignupModel.findOneAndUpdate(
        { username },
        { $set: updatedUserData },
        { new: true }
      );
  
      if (updatedUser) {
        console.log('User profile updated:', updatedUser);
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.delete('/signup/:username', async (req, res) => {
    const { username } = req.params;
  
    try {
      const deletedUser = await SignupModel.findOneAndDelete({ username });
  
      if (deletedUser) {
        console.log('User profile deleted:', deletedUser);
        res.json({ message: 'User profile deleted successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error deleting user profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
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

app.post('/events', upload.single('image'), (req, res) => {
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

app.post('/dinings', upload.single('image'), (req, res) => {
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

app.get('/events', async (req, res) => {
    try {
      const existingCards = await EventModel.find();
      res.json(existingCards);
    } catch (error) {
      console.error('Error fetching existing cards:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/dinings', async (req, res) => {
    try {
      const existingCards = await DiningModel.find();
      res.json(existingCards);
    } catch (error) {
      console.error('Error fetching existing cards:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.delete('/events/:eventId', async (req, res) => {
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

app.delete('/dinings/:diningId', async (req, res) => {
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

app.post('/reservations', (req, res) => {
    const {
        name,
        idNumber,
        phoneNumber,
        roomType,
        checkIn,
        checkOut
    } = req.body;

    BookingModel.create({
        name,
        idNumber,
        phoneNumber,
        roomType,
        checkIn,
        checkOut,
    })
    .then(newReservation => {
        console.log('Reservation created:', newReservation);
        res.json(newReservation);
    })
    .catch(err => {
        console.error('Error creating reservation:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.get('/reservations', async (req, res) => {
    try {
      const existingReservations = await BookingModel.find();
      res.json(existingReservations);
    } catch (error) {
      console.error('Error fetching existing reservations:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Update reservation by ID
app.put('/reservations/:reservationId', async (req, res) => {
    const { reservationId } = req.params;
    const {
        name,
        idNumber,
        phoneNumber,
        roomType,
        checkIn,
        checkOut
    } = req.body;

    try {
        const updatedReservation = await BookingModel.findByIdAndUpdate(
            reservationId,
            {
                name,
                idNumber,
                phoneNumber,
                roomType,
                checkIn,
                checkOut,
            },
            { new: true }
        );

        if (updatedReservation) {
            console.log('Reservation updated:', updatedReservation);
            res.json(updatedReservation);
        } else {
            res.status(404).json({ error: 'Reservation not found' });
        }
    } catch (error) {
        console.error('Error updating reservation:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete reservation by ID
app.delete('/reservations/:reservationId', async (req, res) => {
    const { reservationId } = req.params;

    try {
        const deletedReservation = await BookingModel.findByIdAndDelete(reservationId);
        if (deletedReservation) {
            console.log('Reservation deleted successfully');
            res.json({ message: 'deleted successfully' });
        } else {
            res.status(404).json({ error: 'Reservation not found' });
        }
    } catch (error) {
        console.error('Error deleting reservation:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Find booking by ID number
app.get('/reservations/:idNumber', async (req, res) => {
    const { idNumber } = req.params;

    try {
        const bookings = await BookingModel.find({ idNumber });
        res.json(bookings);
    } catch (error) {
        console.error('Error finding reservations:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(3001, () => {
    console.log("server is running");
});
