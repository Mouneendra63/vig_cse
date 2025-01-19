
import React from "react";
import "./All.css"; // Ensure this file contains the necessary styles.

function Facility() {
  const facilities = [
    {
      id: 1,
      imgSrc: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/f1.png", // Adjusted image paths
      title: "Project Lab",
      modalId: "exampleModal4",
      modalTitle: "Project Lab",
      modalImages: ["/images/lab1.jpg", "/images/lab2.jpg", "/images/lab3.jpg", "/images/lab4.jpg", "/images/lab5.jpg"],
    },
    {
      id: 2,
      imgSrc: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/f2.png",
      title: "Conference Hall",
      modalId: "exampleModal-fac2",
      modalTitle: "Conference Hall",
      modalImages: ["/images/con-1.jpg", "/images/con-2.jpeg", "/images/con-3.jpg", "/images/lab4.jpg", "/images/lab5.jpg"],
    },
    {
      id: 3,
      imgSrc: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/f3.png",
      title: "Library",
      modalId: "exampleModal-fac3",
      modalTitle: "Library",
      modalImages: ["/images/dlib-1.jpg", "/images/dlib-2.jpg", "/images/dlib-3.jpg", "/images/dlib-4.jpg"],
    },
    {
      id: 4,
      imgSrc: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/f4.png",
      title: "Research Center",
      modalId: "exampleModal-fac4",
      modalTitle: "Research Center",
      modalImages: ["/images/dlib-1.jpg", "/images/dlib-2.jpg", "/images/dlib-3.jpg", "/images/dlib-4.jpg"],
    },
  ];

  return (
    <div className="outer-container re-facility mb-4 ps-4 mt-5 pt-5" style={{ backgroundColor: "#e7f1ff", zIndex: "1000", maxWidth: '1500px' }}>
      <div className="RandI mb-4" style={{marginLeft:'5rem'}}>
            <h1 style={{ fontFamily: "DM Serif Display" }}>
            Research <span style={{ fontFamily: "DM Serif Display" }}> Facilities</span>
            </h1>
          </div>
      <div className="container" style={{ marginLeft: "10rem" }}>
        <div className="row">
          {facilities.map((facility) => (
            <div
              className="col-md-6 col-lg-3 mb-4"
              key={facility.id}
            >
              <div className="fCard text-center">
                <div className="fCard-img">
                  <img
                    src={facility.imgSrc}
                    alt={facility.title}
                    className="img-fluid"
                  />
                </div>
                <div className="fCard-txt">
                  <h4>{facility.title}</h4>
                </div>
              </div>

              {/* Modal (Now with hover expansion) */}
              <div
                className={`modal fade hover-expand ${facility.id}`}
                id={facility.modalId}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        {facility.modalTitle}
                      </h1>
                      <button type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="container-fluid">
                        <div className="row">
                          {facility.modalImages.map((imgSrc, index) => (
                            <div className="col-md-4 mb-3" key={index}>
                              <div className="card">
                                <img
                                  src={imgSrc}
                                  alt={`Image ${index + 1}`}
                                  className="card-img-top"
                                  style={{ height: "200px", objectFit: "cover" }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-5">
                        <h5>{facility.modalTitle} Overview</h5>
                        <p>The {facility.modalTitle} is equipped with modern facilities to support research and development activities.</p>
                        <hr />
                        <h5>Facilities</h5>
                        <p>Features high-end equipment and resources tailored for various research needs.</p>
                        <hr />
                        <h5>Usage Guidelines</h5>
                        <p>Follow the center's code of conduct and maintain cleanliness.</p>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facility;