import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RoomCard from './components/RoomCard';
import BookingForm from './pages/BookingForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Home() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/rooms')
      .then(res => setRooms(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Book a Room</h1>
      <div className="room-container">
        {rooms.map(room => <RoomCard key={room.id} room={room} />)}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:roomId" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
