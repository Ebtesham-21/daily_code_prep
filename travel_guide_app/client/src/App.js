import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [destination, setDestination] = useState('');
 
  const [dates, setDates] = useState('');
  const [itineraries, setItineraries] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);

 
  






  const fetchItineraries = async () => {
    try {
      const response = await axios.get('/api/itineraries');
      setItineraries(response.data);
    } catch (error) {
      console.error('Error fetching itineraries:', error);
    }
  };

  useEffect(() => {
    fetchItineraries();
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/itineraries', { destination, dates });
      setItineraries([...itineraries, response.data]);
      setDestination('');
      setDates('');
    } catch (error) {
      console.error('Error creating itinerary:', error);
    }
  };
  const authenticateUser = async (username, password) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      setToken(response.data.token);
    } catch (error) {
      console.error('Error authenticating user:', error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get('/api/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    authenticateUser(username, password);
  };


  return (
    <div>
      <h1>Travel Planning App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dates"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
        />
        <button type="submit">Add Itinerary</button>
      </form>
      <div>
        <h2>Itineraries</h2>
        <ul>
          {itineraries.map((itinerary) => (
            <li key={itinerary._id}>
              <strong>{itinerary.destination}</strong> - {itinerary.dates}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
