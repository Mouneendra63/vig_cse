
import React, { useState } from 'react';
import './Events.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PastEvents() {
  const [modalData, setModalData] = useState(null); // State to manage modal data

  const events = [
    {
      id: 1,
      title: 'Annual Cultural Fest 2024',
      date: 'February 15-17, 2024',
      description: 'A celebration of art, music, and dance.',
      image: 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/DSC02509.JPG',
      img: ['https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event1.jpg', 'phttps://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event2.jpg', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event3.jpeg'],
      details: 'Experience an exhilarating blend of music, dance, and art at our Annual Cultural Fest.',
      matter: 'Join us for an unforgettable experience at our Annual Cultural Fest, where the magic of music, dance, and art come together to create an exhilarating atmosphere. This vibrant event showcases a wide array of performances, from traditional dances to contemporary music, bringing together talents from diverse cultures and backgrounds. Immerse yourself in the captivating world of artistic expression, where creativity knows no bounds. Whether you’re enjoying the rhythmic beats, mesmerizing dances, or thought-provoking art displays, the festival promises something for everyone. Don’t miss out on this celebration of culture, unity, and creativity — a truly spectacular experience awaits!.'
    },
    {
      id: 2,
      title: 'Srujanankura Tech Fest',
      date: 'January 10-12, 2024',
      description: 'Exploring the future of technology.',
      image: 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s3.JPG',
      img: ['https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s1.JPG', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s2.JPG', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s3.JPG', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s4.JPG', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s5.JPG'],
      details: 'Join us for an inspiring journey into the world of cutting-edge technology and innovation.',
      matter: 'Srujanankura is a national-level festival organized by Vignan’s Foundation for Science, Technology and Research (VFSTR) Deemed to be University. This event combines art and science, providing a platform for students to showcase their creativity and technical skills. The most recent event, Srujanankura 2023, took place in March 2023 and featured participation from 15,000 students from various states. The festival offered cash prizes worth Rs 9 lakh and ran for two days. It included a range of activities and competitions aimed at fostering innovation and collaboration among students.'
    }
  ];

  const openModal = (event) => {
    setModalData(event);
    const modalElement = new bootstrap.Modal(document.getElementById('eventModal'));
    modalElement.show();
  };

  return (
    <section className="past-events" style={{ backgroundColor: '#e7f1ff' }}>
      <div className="container">
      <div className="RandI mb-4 me-5">
            <h1 style={{ fontFamily: "DM Serif Display" }}>
            Past <span style={{ fontFamily: "DM Serif Display" }}>Events</span>
            </h1>
          </div>
        <div className="row">
          {events.map((event) => (
            <div className="col-12 col-md-6 mb-4" key={event.id}>
              <div className="event-card h-100 me-3">
                <img src={event.image} alt={event.title} className="img-fluid" />
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="date">{event.date}</p>
                  <p>{event.description}</p>
                  <button
                    className="btn btn-primary"
                    style={{ backgroundColor: '#1152ae' }}
                    onClick={() => openModal(event)}
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div
  className="modal fade"
  id="eventModal"
  tabIndex="-1"
  aria-labelledby="eventModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title fs-2" id="eventModalLabel">
          {modalData?.title}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <p>
          <strong>Date:</strong> {modalData?.date}
        </p>
        <p>{modalData?.details}</p>

        {/* Photos in 3x3 grid */}
        <div className="modal-images mt-3 d-flex flex-wrap">
          <h6>Event Photos:</h6>
          <div className="row g-3">
            {modalData?.img.map((photo, index) => (
              <div key={index} className="col-md-12 col-12 mb-3">
                <img
                  src={photo}
                  alt={`Event Photo ${index + 1}`}
                  className="img-fluid img-thumbnail"
                  style={{ width: '100%',height:'100%' }} // Ensure images are responsive
                />
              </div>
            ))}
          </div>
        </div>

        {/* Event Matter */}
        <div className="mt-4">
          <p>{modalData?.matter}</p>
        </div>
      </div>
    </div>
  </div>
      </div>
    </section>
  );
}

export default PastEvents;