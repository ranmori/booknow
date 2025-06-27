import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const { roomId } = useParams();
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Voucher will be sent to your email!');
  };

  return (
    <div className="booking-form-container">
      <h2>Booking Form (Room ID: {roomId})</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input name="mobile" type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <button type="submit" className="book-btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
