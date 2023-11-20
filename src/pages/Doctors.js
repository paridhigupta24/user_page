// components/Doctors.js
import React, { useState } from 'react';
import Menu from './Menu';
import './Doctors.css';

import docImage from './doc.jpeg';
const Doctors = () => {
  // Sample data for 10 doctors
  const doctorsData = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?size=626&ext=jpg&ga=GA1.1.2115358232.1700398804&semt=sph',
      specialization: 'Orthopedic Surgeon',
      experience: '15 years',
      phone: '+91 9876543210',
      email: 'rajesh.kumar@example.com',
      age: 45,
    },
    {
      id: 2,
      name: 'Dr. Ananya Sharma',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?size=626&ext=jpg&ga=GA1.1.2115358232.1700398804&semt=sph',
      specialization: 'Dermatologist',
      experience: '12 years',
      phone: '+91 9876543211',
      email: 'ananya.sharma@example.com',
      age: 38,
    },
    {
      id: 3,
      name: 'Dr. Vikram Singh',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?size=626&ext=jpg&ga=GA1.1.2115358232.1700398804&semt=sph',
      specialization: 'Pediatrician',
      experience: '18 years',
      phone: '+91 9876543212',
      email: 'vikram.singh@example.com',
      age: 50,
    },
    {
      id: 4,
      name: 'Dr. Priya Gupta',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?size=626&ext=jpg&ga=GA1.1.2115358232.1700398804&semt=sph',
      specialization: 'Cardiologist',
      experience: '20 years',
      phone: '+91 9876543213',
      email: 'priya.gupta@example.com',
      age: 55,
    },
    {
      id: 5,
      name: 'Dr. Sanjay Verma',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?size=626&ext=jpg&ga=GA1.1.2115358232.1700398804&semt=sph',
      specialization: 'Neurologist',
      experience: '22 years',
      phone: '+91 9876543214',
      email: 'sanjay.verma@example.com',
      age: 58,
    },
    {
      id: 6,
      name: 'Dr. Nisha Patel',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?size=626&ext=jpg&ga=GA1.1.2115358232.1700398804&semt=sph',
      specialization: 'Ophthalmologist',
      experience: '14 years',
      phone: '+91 9876543215',
      email: 'nisha.patel@example.com',
      age: 42,
    },
    {
      id: 7,
      name: 'Dr. Rahul Kapoor',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?size=626&ext=jpg&ga=GA1.1.2115358232.1700398804&semt=sph',
      specialization: 'Gynecologist',
      experience: '16 years',
      phone: '+91 9876543216',
      email: 'rahul.kapoor@example.com',
      age: 48,
    },
    {
      id: 8,
      name: 'Dr. Arjun Singhania',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?size=626&ext=jpg&ga=GA1.1.2115358232.1700398804&semt=sph',
      specialization: 'ENT Specialist',
      experience: '19 years',
      phone: '+91 9876543217',
      email: 'arjun.singhania@example.com',
      age: 52,
    },
    {
      id: 9,
      name: 'Dr. Meera Reddy',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?size=626&ext=jpg&ga=GA1.1.2115358232.1700398804&semt=sph',
      specialization: 'Psychiatrist',
      experience: '17 years',
      phone: '+91 9876543218',
      email: 'meera.reddy@example.com',
      age: 46,
    },
    {
      id: 10,
      name: 'Dr. Karishma Gupta',
      image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?size=626&ext=jpg&ga=GA1.1.2115358232.1700398804&semt=sph',
      specialization: 'Dentist',
      experience: '13 years',
      phone: '+91 9876543219',
      email: 'karishma.gupta@example.com',
      age: 40,
    },
    // Add more sample data for other doctors
  ];
  

  // State to track which card's details are expanded
  const [expandedCard, setExpandedCard] = useState(null);

  // Function to handle the click on the "View Details" button
  const handleViewDetailsClick = (doctorId) => {
    setExpandedCard(expandedCard === doctorId ? null : doctorId);
  };

  return (
    <div className="wrapper">
      <Menu />

      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Doctors</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Cards Section */}
      <div className="doctors-section">
        <div className="container">
          <div className="doctors-container">
            {/* Map through the doctorsData array to render cards for each doctor */}
            {doctorsData.map((doctor) => (
              <div className="doctor-card" key={doctor.id}>
                <img
                  src={doctor.image}
                  alt={`Dr. ${doctor.name}`}
                  className="doctor-image"
                />
                <div className="doctor-details">
                  <h3>{doctor.name}</h3>
                  <p>{doctor.specialization}</p>
                  {expandedCard === doctor.id && (
                    <div className="additional-details">
                      <p>Experience: {doctor.experience}</p>
                      <p>Phone: {doctor.phone}</p>
                      <p>Email: {doctor.email}</p>
                      <p>Age: {doctor.age}</p>
                    </div>
                  )}
                  <button onClick={() => handleViewDetailsClick(doctor.id)}>
                    {expandedCard === doctor.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
