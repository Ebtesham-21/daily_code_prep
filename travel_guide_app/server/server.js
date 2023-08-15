const express = require('express');
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



