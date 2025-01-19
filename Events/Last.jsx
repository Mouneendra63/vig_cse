

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function CardContainer() {
//   const [modalData, setModalData] = useState(null);

//   const cards = [
//     {
//       tag: 'Cultural Fest',
//       image: 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/DSC02552.JPG',
//       images: ['https://vignanbuckets.s3.us-east-1.amazonaws.com/public/DANCE.JPG'], // Ensure images array is defined
//       alt: 'Newsroom',
//       title: 'Celebrate, Connect, Create!',
//       description: 'Details about the Cultural Fest.',
//     },
//     {
//       tag: 'Placments',
//       image: ' https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Placemt.JPG',
//       images: ['https://vignanbuckets.s3.us-east-1.amazonaws.com/public/9.jpeg ', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s1.JPG', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s2.JPG', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s3.JPG'], // Ensure images array is defined
//       alt: 'Press Release',
//       title: 'Opportunities, Growth, Success, Careers, Achievements!',
//       description: 'Details about the Convocation.',
//     },
//     {
//       tag: 'Seminar',
//       image: 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/19.jpeg',
//       images: ['https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event1.jpg', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event2.jpg', 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event3.jpeg'], // Ensure images array is defined
//       alt: 'Analyst Relations',
//       title: 'Innovation, Technology, Future, Leadership, Insights!',
//       description: 'Details about the Seminar.',
//     },
//   ];

//   const openModal = (card) => {
//     setModalData(card);
//     const modalElement = new bootstrap.Modal(document.getElementById('cardModal'));
//     modalElement.show();
//   };

//   return (
//     <div className='mt-5'>
//       <div>
//       <div className="RandI mb-4" style={{marginLeft:'7rem'}}>
//             <h1 style={{ fontFamily: "DM Serif Display" }}>
//             Other <span style={{ fontFamily: "DM Serif Display" }}>Events</span>
//             </h1>
//           </div>
//       <section
//         className="card-container p-4"
//         style={{ backgroundColor: '#e7f1ff', maxWidth: '1500px' }}
//       >
//         {cards.map((card, index) => (
//           <div
//             className="card ms-3 bg-white"
//             key={index}
//             onClick={() => openModal(card)}
//             style={{ cursor: 'pointer' }}
//           >
//             <span className="tag mb-1">{card.tag}</span>
//             <img src={card.image} alt={card.alt} />
//             <h2>{card.title}</h2>
//           </div>
//           </div>
//           <div className="pro-btn mt-3">  
//           <button className="cta">
//             <span>View More</span>
//             <svg width="15px" height="10px" viewBox="0 0 13 10">
//               <path d="M1,5 L11,5"></path>
//               <polyline points="8 1 12 5 8 9"></polyline>
//             </svg>
//           </button>
//         </div>

          

          
//         ))}
        
//       </section>

//       {/* Bootstrap Modal */}
//       <div
//   className="modal fade"
//   id="cardModal"
//   tabIndex="-1"
//   aria-labelledby="cardModalLabel"
//   aria-hidden="true"
// >
//   <div className="modal-dialog modal-lg modal-dialog-centered"> {/* modal-lg makes it larger */}
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="cardModalLabel">
//           {modalData?.title}
//         </h5>
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="modal"
//           aria-label="Close"
//         ></button>
//       </div>
//       <div className="modal-body">
//         <p>{modalData?.description}</p>
//         <div className="d-flex flex-wrap justify-content-center">
//           {(modalData?.images || []).map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={modalData?.alt}
//               className="img-fluid m-2"
//               style={{ maxWidth: '' }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
//   );
// }

// export default CardContainer;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Gallery.css'

function CardContainer() {
  const [modalData, setModalData] = useState(null);

  const cards = [
    {
      tag: 'Cultural Fest',
      image: 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/DSC02552.JPG',
      images: ['https://vignanbuckets.s3.us-east-1.amazonaws.com/public/DANCE.JPG'],
      alt: 'Newsroom',
      title: 'Celebrate, Connect, Create!',
      description: 'Details about the Cultural Fest.',
    },
    {
      tag: 'Placements',
      image: 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Placemt.JPG',
      images: [
        'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/9.jpeg',
        'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s1.JPG',
        'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s2.JPG',
        'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/s3.JPG',
      ],
      alt: 'Press Release',
      title: 'Opportunities, Growth, Success, Careers, Achievements!',
      description: 'Details about the Convocation.',
    },
    {
      tag: 'Seminar',
      image: 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/19.jpeg',
      images: [
        'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event1.jpg',
        'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event2.jpg',
        'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Event3.jpeg',
      ],
      alt: 'Analyst Relations',
      title: 'Innovation, Technology, Future, Leadership, Insights!',
      description: 'Details about the Seminar.',
    },
  ];

  const openModal = (card) => {
    setModalData(card);
    const modalElement = new window.bootstrap.Modal(document.getElementById('cardModal'));
    modalElement.show();
  };

  return (
    <div className="mt-5">
      <div>
        <div className="RandI mb-4" style={{ marginLeft: '7rem' }}>
          <h1 style={{ fontFamily: 'DM Serif Display' }}>
            Other <span style={{ fontFamily: 'DM Serif Display' }}>Events</span>
          </h1>
        </div>
        <section
          className="card-container p-4 "
          style={{ backgroundColor: '#e7f1ff', maxWidth: '1500px' }}
        >
          {cards.map((card, index) => (
            <div
              className="card ms-3 bg-white ms-5"
              key={index}
              onClick={() => openModal(card)}
              style={{ cursor: 'pointer', width: '400px', marginBottom: '20px' }}
            >
              <span className="tag mb-1">{card.tag}</span>
              <img src={card.image} alt={card.alt} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <h2>{card.title}</h2>
            </div>
          ))}
        </section>

        {/* View More Button */}
        <div className="d-flex justify-content-center mt-4">
           <Link className="nav-link mb-4" to="/showevents" style={{fontFamily: 'DM Serif Display'}}>
                  <button className="cta">
                    <span>View All</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                  </Link>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="cardModal"
        tabIndex="-1"
        aria-labelledby="cardModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
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