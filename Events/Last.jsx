

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardContainer() {
  const [modalData, setModalData] = useState(null);

  const cards = [
    {
      tag: 'Cultural Fest',
      image: 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/DSC02552.JPG',
      images: ['https://vignanbuckets.s3.us-east-1.amazonaws.com/public/DANCE.JPG'], // Ensure images array is defined
      alt: 'Newsroom',
      title: 'Stay up-to-date with the latest news',
      description: 'Details about the Cultural Fest.',
    },
    {
      tag: 'Tech Fest',
      image: 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/9.jpeg',
      images: ['https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Placemt.JPG', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s1.JPG', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s2.JPG', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s3.JPG'], // Ensure images array is defined
      alt: 'Press Release',
      title: 'Nuuday and partner for cloud transformation',
      description: 'Details about the Convocation.',
    },
    {
      tag: 'Seminar',
      image: 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/19.jpeg',
      images: ['https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event1.jpg', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event2.jpg', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event3.jpeg'], // Ensure images array is defined
      alt: 'Analyst Relations',
      title: 'Analysts recognize as a cross-industry leader',
      description: 'Details about the Seminar.',
    },
  ];

  const openModal = (card) => {
    setModalData(card);
    const modalElement = new bootstrap.Modal(document.getElementById('cardModal'));
    modalElement.show();
  };

  return (
    <div className='mt-5'>
      <div className="RandI mb-4" style={{marginLeft:'7rem'}}>
            <h1 style={{ fontFamily: "DM Serif Display" }}>
            Other <span style={{ fontFamily: "DM Serif Display" }}>Events</span>
            </h1>
          </div>
      <section
        className="card-container p-4"
        style={{ backgroundColor: '#e7f1ff', maxWidth: '1500px' }}
      >
        {cards.map((card, index) => (
          <div
            className="card ms-3 bg-white"
            key={index}
            onClick={() => openModal(card)}
            style={{ cursor: 'pointer' }}
          >
            <span className="tag mb-1">{card.tag}</span>
            <img src={card.image} alt={card.alt} />
            <h2>{card.title}</h2>
          </div>
        ))}
      </section>

      {/* Bootstrap Modal */}
      <div
  className="modal fade"
  id="cardModal"
  tabIndex="-1"
  aria-labelledby="cardModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg modal-dialog-centered"> {/* modal-lg makes it larger */}
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="cardModalLabel">
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
        <p>{modalData?.description}</p>
        <div className="d-flex flex-wrap justify-content-center">
          {(modalData?.images || []).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={modalData?.alt}
              className="img-fluid m-2"
              style={{ maxWidth: '' }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default CardContainer;