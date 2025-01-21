import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import './All.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const researchData = [
  {
    title: "Harnessing Machine Learning for Accurate Water Quality Monitoring and Prediction",
    author: "Sri Latha CSE-III",
    conference: "CSCT (NIT Sikkim)",
    abstract: "Machine learning improves water quality monitoring for public health.",
    details: "This research focuses on using advanced machine learning techniques to accurately predict water quality based on various parameters. It aims to aid public health officials in making better decisions."
  },
  {
    title: "Predicting Employee Attrition with Deep Learning for Workforce Optimization",
    author: "Chandana CSE - III",
    conference: "AI for Good (MIT)",
    abstract: "Using AI to predict climate change and its impacts on agriculture.",
    details: "The study uses deep learning to analyze employee data and predict attrition trends, enabling organizations to optimize workforce planning and retention strategies."
  },
  {
    title: "Predictive Analytics for Customer Risk and Revenue Insights",
    author: "Vimala Seggam",
    conference: "ICCI (NIT Suart)",
    abstract: "Leveraging deep learning for faster and more accurate on customer Risk.",
    details: "This paper explores the application of predictive analytics to assess customer risk and predict revenue potential, helping financial institutions make informed decisions."
  }
];

function Students() {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleShow = (data) => {
    setSelectedData(data);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      {/* Container */}
      <div className="container hovering" style={{ margin: "0 10px 0 60px" }}>
      <div className="RandI mb-4 ms-5">
            <h1 style={{ fontFamily: "DM Serif Display" }}>
              Students <span>Research</span>
            </h1>
          </div>
        <div className="container d-flex gap-4 mt-5">
          {researchData.map((data, index) => (
            <div key={index} className="col-md-4 me-5">
              <Card border="#1152ae" style={{ width: "25rem", height: '25rem' }} className="me-5 bg-white">
                <Card.Header style={{ fontFamily: "DM Serif Display", backgroundColor: '#1152ae' }} className="fs-5 mb-3 text-white text-start">
                  {data.title}
                </Card.Header>
                <Card.Body className="me-5">
                  <Card.Title style={{ fontFamily: "DM Serif Display", color: '#1152ae' }} className="mb-3">
                    Author: <p className="d-inline text-black" style={{ fontFamily: 'Familjen Grotesk' }}>{data.author}</p>
                  </Card.Title>
                  <Card.Title style={{ fontFamily: "DM Serif Display", color: '#1152ae' }} className="mb-3">
                    Conference: <p className="d-inline text-black" style={{ fontFamily: 'Familjen Grotesk' }}>{data.conference}</p>
                  </Card.Title>
                  <Card.Title style={{ fontFamily: "DM Serif Display", color: '#1152ae' }} className="mb-3">
                    Abstract: <p className="d-inline text-black" style={{ fontFamily: 'Familjen Grotesk' }}>{data.abstract}</p>
                  </Card.Title>
                </Card.Body>
                <button
                  type="button"
                  className="btn btn-primary w-50 bg-transparent text-primary fill"
                  style={{ marginLeft: '5rem', color: '#1152ae' }}
                  onClick={() => handleShow(data)}
                >
                  View More
                </button>
                
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Button below container */}
      <div className="pro-btn text-center mt-4 mb-5 mt-5">
        
        <Link className="nav-link" to="/showAll" style={{fontFamily: 'DM Serif Display'}}>
        <button className="cta">
          <span>View All</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
        </Link>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        {selectedData && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><strong>Author:</strong> {selectedData.author}</p>
              <p><strong>Conference:</strong> {selectedData.conference}</p>
              <p><strong>Abstract:</strong> {selectedData.abstract}</p>
              <p><strong>Details:</strong> {selectedData.details}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} className="text-white bg-danger">
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Students;