import React, { useState } from 'react';
import Menu from './Menu';
import './service.css';
function Service() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    doctor: '',
    // Add other form fields as needed
  });

  const [showBill, setShowBill] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the form, generate the bill, etc.
    setShowBill(true);
  };

  return (
    <div className="wrapper">
      <Menu />

      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Services</h2>
            </div>
            <div className="col-12">
              <a href="">Submit the form to get your receipt</a>
            </div>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="contact wow fadeInUp">
          <div className="container">
            <div className="section-header text-center">
              <p>Submit this form</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="contact-form">
                  <form onSubmit={handleSubmit} noValidate="novalidate">
                    <div className="control-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required="required"
                        data-validation-required-message="Please enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        data-validation-required-message="Please enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                      <select
                        className="form"
                        id="doctor"
                        name="doctor"
                        required
                        data-validation-required-message="Please select a doctor"
                        value={formData.doctor}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a doctor</option>
                        {/* Add options for different doctors */}
                        <option value="Dr. John Doe">Dr. John Doe</option>
                        <option value="Dr. Jane Smith">Dr. Jane Smith</option>
                        {/* Add more options as needed */}
                      </select>
                      <p className="help-block text-danger"></p>
                    </div>
                    {/* Add other form fields as needed */}
                    <div>
                      <button className="btn" type="submit" id="sendMessageButton">
                        Get Receipt
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {showBill && (
                <div className="col-md-12">
                  <div className="bill-details">
                    <h3>Bill Details</h3>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Doctor: {formData.doctor}</p>
                    {/* Add other bill details */}
                    <p>Gender: Male</p>
                    <p>Age: 25</p>
                    <p>Problem: Consultation</p>
                    <p>Phone Number: 123-456-7890</p>
                    <p>Checkup Fee: Rs 500</p>
                    <button className="btn">Get Receipt</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
