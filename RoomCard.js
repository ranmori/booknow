import React from 'react';
import './RoomCard.css';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.type} />
      <h2>{room.type}</h2>
      <p>{room.description}</p>
      <ul>
        {room.features.map((feature, i) => <li key={i}>{feature}</li>)}
      </ul>
      <Link to={`/book/${room.id}`} className="book-btn">Book Now</Link>
    </div>
  );
};

export default RoomCard;
