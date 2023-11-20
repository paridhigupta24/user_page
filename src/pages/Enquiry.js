// Enquiry.js
import React, { useState } from 'react';
import Menu from './Menu'; // Import the Menu component
import './Enquiry.css'; // Import your Enquiry-specific CSS file

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phoneNumber: '',
    inquiryType: 'Appointment',
    query: '',
  });
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (you can send the data to a server or perform other actions)
    console.log('Form submitted:', formData);

    // Display submission success message
    setSubmissionMessage('Query has been submitted successfully!');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmissionMessage('');
  
    // Clear form data using the previous state values
    setFormData(prevFormData => ({
      ...prevFormData,
      name: '',
      age: ' ',
      gender: '',
      email: '',
      phoneNumber: '',
      inquiryType: 'Appointment',
      query: '',
    }));
  };
  

  return (
    <div className="wrapper">
      <Menu />
      <div className="enquiry-form">
        <h2>Enquiry Form</h2>
        {submissionMessage && (
          <div className="modal1">
            <div className="modal-content">
              <p>{submissionMessage}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Patient's Name:</label>
            <input type="text" id="name" name="name" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" required onChange={handleChange}>
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="number" id="phoneNumber" name="phoneNumber" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="inquiryType">Inquiry For:</label>
            <select id="inquiryType" name="inquiryType" required onChange={handleChange}>
              <option value="Appointment">Appointment</option>
              <option value="Payment">Payment</option>
              <option value="Reports">Reports</option>
              <option value="Orders">Orders</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="query">Query:</label>
            <textarea id="query" name="query" required onChange={handleChange}></textarea>
          </div>

          {/* Add the rest of your form elements */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
