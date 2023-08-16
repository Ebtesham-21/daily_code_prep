const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:22017/travelplanner', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const itinerarySchema = new mongoose.Schema({
    destination: String,
    dates: String,
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);



app.post('api/itineraris', async(req, res) => {
    try {
        const itinerary = new Itinerary(
            req.body
        );
        await itinerary.save();
        res.status(201).json(itinerary);
    } catch(error) {
        res.status(500).json({error: 'An error occurred white creating the itinerary.'});
    }
});

app.get('/api/itineraris', async(req, res) => { 
    try{
        const itineraris = await Itinerary.find();
        res.json(itineraris);

}       catch (error) {
    res.status(500).json({error: 'An error occurred white fetching the itineraris.'});
}

});

app.listen(3005, () => {
    console.log('Server is running on port ${port}');
});


const User = mongoose.model('user', new mongoose.Schema({
    username: String,
    password: String,
}));

app.post('/api/register', async (req, res) => {
    try {
        const { username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword});
        await user.save();
        res.status(201).json({ message: 'User registered successfully'});

    } catch (error) {
        res.status(500).json({ message: "An error occurred while registering the user"});

    }
});

app.post('/api/login', async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({ username});
        if(!user) {
            return res.status(401).json({ error: 'Invalid username or password'});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(401).json({error: 'Invalid username or password'});
        }
        const token = jtw.sign({ userId: user._id},  'secret_key');
        res.json({ token });

    } catch (error) {
        res.status(500).json({ error: 'An error occurred while logging in'});
    }
});




