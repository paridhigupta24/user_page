import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import './Portfolio.css';

import axios from "axios";

function Portfolio() {
  const [prescriptions, setPrescriptions] = useState([]);
  const apiUrl = "http://localhost:3002";

  async function getAllData() {
    try {
      const response = await axios.get(`${apiUrl}/prescription`);
      const data = response.data;
      setPrescriptions(data);
    } catch (error) {
      console.error("Error fetching prescriptions:", error.message);
    }
  }

  useEffect(() => {
    getAllData();
  }, []);

  const handleViewPrescription = (prescriptionId) => {
    // Navigate to the prescription details page using React Router or any routing library
    // For simplicity, you can use window.location.href
    window.location.href = `/prescription/${prescriptionId}`;
  };

  return (
    <>
      <div className="wrapper">
        <Menu />

        {/* Page Header Start */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>My Health</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Prescription Section Start */}
        <div className="prescription-section">
          <h2>Prescription</h2>

          {/* Display prescriptions with labels */}
          {prescriptions.map((item, index) => (
            <div key={item.id} className="prescription-box">
              <p className="prescription-label">Prescription {index + 1}</p>
              <p className="prescription-text">{item.prescriptionText}</p>
            </div>
          ))}
        </div>
        {/* Prescription Section End */}

        
      </div>
    </>
  );
}

export default Portfolio;
