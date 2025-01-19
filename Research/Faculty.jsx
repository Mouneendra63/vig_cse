import React, { useState } from "react";
import './All.css'
function Faculty() {
  const facultyData = [
    {
      id: "card1",
      name: "Dr.M. Sunil Babu",
      designation: "ASSISSTANT PROFESSOR - Department of CSE",
      image: "https://vignan.ac.in/vignantest/departments/dep_assets/images/Dr.M.%20Sunil%20Babu.jpg",
      researchInterests:
        "Signal and Image Processing using Machine Learning, Distributed Systems, IoT.",
      teachingEngagements: "Teaches AI, Compiler Design, and Software Engineering.",
      academicExperience: "Over 15 years at Vignan Foundation for Science, Technology and Research.",
    },
    {
      id: "card2",
      name: "Dr.M.Umadevi",
      designation: "ASSOCIATE PROFESSOR - Department of CSE",
      image: "https://vignan.ac.in/vignantest/departments/dep_assets/images/event167_cse_coord2.jpg",
      researchInterests:
        "Signal and Image Processing using Machine Learning, Distributed Systems, IoT.",
      teachingEngagements: "Teaches AI, Compiler Design, and Software Engineering.",
      academicExperience: "Over 15 years at Vignan Foundation for Science, Technology and Research.",
    },
    {
      id: "card3",
      name: "Dr Jhansi Lakshmi Potharlanka",
      designation: "ASSISSTANT PROFESSOR - Department of CSE",
      image: "https://vignan.ac.in/Facultyprofiles/uploads/01702/profilepic01702.JPG",
      researchInterests:
        "Machine Learning ,Deep Learning ,Image Processing",
      teachingEngagements: "C ,Java , DBMS, Machine Learning, TOC, COA ,DLD",
      academicExperience: "vignan's Foundation for Science Technology and Research (Deemed to be University), Vadlamudi 2017 December to 2023 January",
    },
  ];

  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleModalToggle = (faculty) => {
    setSelectedFaculty(faculty ? faculty : null);
  };

  return (
    <div className="outer-container mt-5 pt-5">
      <div className="RandI mb-4 ms-5">
            <h1 style={{ fontFamily: "DM Serif Display" }}>
            Research <span style={{ fontFamily: "DM Serif Display" }}> Faculty</span>
            </h1>
          </div>
      <div className="container">
        {facultyData.map((faculty) => (
          <div className="card" id={faculty.id} key={faculty.id}>
            <div className="card-img">
              <img src={faculty.image} alt={faculty.name} />
            </div>
            <div className="card-text">
              <h1>{faculty.name}</h1>
              <p>{faculty.designation}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleModalToggle(faculty)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedFaculty && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          role="dialog"
          aria-labelledby={selectedFaculty.id}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{selectedFaculty.name}</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => handleModalToggle(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={selectedFaculty.image}
                        alt={selectedFaculty.name}
                        style={{ width: "100%", height: "100%" }}
                        className="rounded-circle"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <h3>Research Interests</h3>
                        <p>{selectedFaculty.researchInterests}</p>
                        <hr />
                      </div>
                      <div className="row">
                        <h3>Teaching Engagements</h3>
                        <p>{selectedFaculty.teachingEngagements}</p>
                        <hr />
                      </div>
                      <div className="row">
                        <h3>Academic Experience</h3>
                        <p>{selectedFaculty.academicExperience}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleModalToggle(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;