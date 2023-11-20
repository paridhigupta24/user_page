// BookAppointment.js
import React, { useState } from 'react';
import axios from 'axios';
import './Book.css';
import Menu from './Menu'; 

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentTime: '',
    specialization: 'General',
    doctor: 'Mr Khan', // Default doctor value, you can change it based on your requirement
    message: '',
  });

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = () => {
    // Display a Windows alert
    alert('Successfully booked!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/feedback', formData);
      console.log('Response:', response.data);

     
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        appointmentTime: '',
        specialization: 'General',
        doctor: 'Mr Khan',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
    }
  };

  return (
    <div className='wrapper'>
      <Menu />
      <h1>Book an appointment</h1>

      <form method="POST" className="Main" onSubmit={handleSubmit}>
        <div className="control-group">
        <label className="label">Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            className="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="control-group">
        <label className="label">Email:</label>
          <input
            type="text"
            className="Email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="control-group">
        <label className="label">Phone:</label>
          <input
            type="number"
            className="Phone"
            placeholder="Your Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="control-group">
        <label className="label">Appointment Time:</label>
          <input
            type="text"
            className="AppointmentTime"
            placeholder="Appointment Time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="control-group">
        <label className="label">Specialization:</label>
        <select
            className="Specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          >
            <option value="General">General</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            {/* Add more specialization options as needed */}
          </select>
          </div>
          <div className="input-group">
          <label className="label">Doctor:</label>
          <select
            className="Doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="Mr Khan">Mr Khan</option>
            <option value="Mrs Prerna">Mrs Prerna</option>
            <option value="Mr Singh">Mr Singh</option>
            <option value="Mr Sharma">Mr Sharma</option>
          </select>
        </div>
        <br />
        <div className="control-group">
        <label className="label">Your Health Issue:</label>
            
            <textarea
              name="message"
              className="health"
              value={formData.message}
              onChange={handleChange}
              required
            />
          
        </div>

        <br />
        <div>
      <button className="btn" type="submit" onClick={handleBooking}>
        Book
      </button>
    </div>
      </form>
      
    </div>
  );
}

export default BookAppointment;

