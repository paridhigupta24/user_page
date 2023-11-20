// PatientHistory.js

import React, { useState } from 'react';
import './PatientHistory.css';
import Menu from "./Menu3";
const samplePatientData = [
    {
      id: 1,
      name: 'Paridhi Gupta',
      age: 25,
      gender: 'Feale',
      problem: 'Cough',
      prescription: 'Cough Syrup',
      contactNumber: '987-654-3210',
    },
    {
      id: 2,
      name: 'Dhruv Sharma',
      age: 32,
      gender: 'Male',
      problem: 'Back Pain',
      prescription: 'Painkillers',
      contactNumber: '123-456-7890',
    },
    {
      id: 3,
      name: 'Harsh Agarwal',
      age: 40,
      gender: 'Male',
      problem: 'Migraine',
      prescription: 'Migraine Medication',
      contactNumber: '876-543-2109',
    },
    {
      id: 4,
      name: 'Ritesh Singh',
      age: 28,
      gender: 'Male',
      problem: 'Allergies',
      prescription: 'Antihistamines',
      contactNumber: '234-567-8901',
    },
    {
      id: 5,
      name: 'Saakshi Chauhan',
      age: 22,
      gender: 'Female',
      problem: 'Stomachache',
      prescription: 'Digestive Medicine',
      contactNumber: '789-012-3456',
    },
    {
      id: 6,
      name: 'Ishita Verma',
      age: 35,
      gender: 'Female',
      problem: 'Fever',
      prescription: 'Antibiotics',
      contactNumber: '345-678-9012',
    },
    {
      id: 7,
      name: 'Arjun Yadav',
      age: 30,
      gender: 'Male',
      problem: 'Joint Pain',
      prescription: 'Anti-Inflammatory',
      contactNumber: '567-890-1234',
    },
    {
      id: 8,
      name: 'Kavya Reddy',
      age: 26,
      gender: 'Female',
      problem: 'Cold',
      prescription: 'Cold Medicine',
      contactNumber: '901-234-5678',
    },
    {
      id: 9,
      name: 'Vihaan Sharma',
      age: 38,
      gender: 'Male',
      problem: 'Insomnia',
      prescription: 'Sleeping Pills',
      contactNumber: '654-321-0987',
    },
    {
      id: 10,
      name: 'Aadhya Bansal',
      age: 31,
      gender: 'Female',
      problem: 'Diabetes',
      prescription: 'Insulin',
      contactNumber: '210-987-6543',
    },
  ];
  

const PatientHistory = () => {
  const [expandedPatientId, setExpandedPatientId] = useState(null);

  const togglePatientDetails = (patientId) => {
    setExpandedPatientId(expandedPatientId === patientId ? null : patientId);
  };

  return (
    <div className="wrapper">
                <Menu />
    <div className="patient-history">
      {samplePatientData.map((patient) => (
        <div key={patient.id} className={`patient-card ${expandedPatientId === patient.id ? 'expanded' : ''}`}>
          <div className="patient-summary">
            <h3>{patient.name}</h3>
            <p>Age: {patient.age}</p>
            <button onClick={() => togglePatientDetails(patient.id)}>
              {expandedPatientId === patient.id ? 'Hide Details' : 'View Patient'}
            </button>
          </div>

          {expandedPatientId === patient.id && (
            <div className="patient-details">
              <p>Gender: {patient.gender}</p>
              <p>Problem: {patient.problem}</p>
              <p>Prescription: {patient.prescription}</p>
              <p>Contact Number: {patient.contactNumber}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default PatientHistory;
