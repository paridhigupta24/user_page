// components/PatientProfile.js
import React, { useState } from 'react';
import Menu from './Menu';
import './profile.css';

const Profile = () => {
  const [isEditing, setEditing] = useState(false);

  // Sample patient data
  const [patientDetails, setPatientDetails] = useState({
    name: 'Paridhi',
    age: '20',
    gender: 'Female',
    contact: '123-456-7890',
    email: 'paridhi@gmail.com',
    bloodGroup: 'B+',
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Add logic to save the updated details
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="wrapper">
      <Menu />

      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Your Profile</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Profile Section */}
      <div className="patient-profile-section">
        <div className="container">
          <div className="patient-profile-container">
            {/* Patient Details */}
            <div className={`patient-details ${isEditing ? 'editing-mode' : ''}`}>
              <h3>{isEditing ? 'Edit Your Details' : 'Your Details'}</h3>
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={patientDetails.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="text"
                    name="age"
                    value={patientDetails.age}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <input
                    type="text"
                    name="gender"
                    value={patientDetails.gender}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label>Contact</label>
                  <input
                    type="text"
                    name="contact"
                    value={patientDetails.contact}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={patientDetails.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                {/* Blood Group input field */}
                <div className="form-group">
                  <label>Blood Group</label>
                  <input
                    type="text"
                    name="bloodGroup"
                    value={patientDetails.bloodGroup}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
              </form>
              {isEditing ? (
                <button className="save-button" onClick={handleSaveClick}>
                  Save
                </button>
              ) : (
                <button className="edit-button" onClick={handleEditClick}>
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
