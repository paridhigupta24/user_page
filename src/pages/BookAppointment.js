import React, { useState } from 'react';
import axios from 'axios';
import './Book.css';

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentTime: '',
    doctor: 'Mr Khan', // Default doctor value, you can change it based on your requirement
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/feedback', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
    }
  };

  return (
    <div>
      <h1>Book an appointment</h1>

      <form method="POST" className="Main" onSubmit={handleSubmit}>
        <div className="control-group">
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
          <input
            type="text"
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
          <label>
            Your Health Issue:<br />
            <textarea
              name="message"
              className="health"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <br />
        <div>
          <button className="btn" type="submit">
            Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookAppointment;
