

// import React from "react";
// import "./All.css";

// function Indexes() {
//   return (
//     <div className="w-100" style={{ backgroundColor: '#fcba03' }}>
//       <div className="container">
//         <div className="row">
//           <div className="RandI mb-4">
//             <h1 style={{ fontFamily: "DM Serif Display" }}>
//               Publications <span>In CSE</span>
//             </h1>
//           </div>
//           <div className="col-sm-6 mb-3 mb-sm-0">
//             <div className="card hover-card ms-4 ps-3" style={{ backgroundColor: "#1152ae" }}>
//               <div className="card-body">
//                 <h5 className="card-title fs-2 text-white">Journals</h5>
//                 <p className="card-text fs-5 text-white">SCI/ E - 80+</p>
//                 <p className="card-text text-white">Scopus - 275+</p>
//                 <a href="#" className="btn btn-primary">
//                   View More
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-sm-6 mb-3 mb-sm-0">
//             <div className="card hover-card ms-4 ps-3" style={{ backgroundColor: "#1152ae" }}>
//               <div className="card-body">
//                 <h5 className="card-title fs-2 text-white">Conferences</h5>
//                 <p className="card-text text-white">IEEE/ Springer - 220+</p>
//                 <p className="card-text text-white">Book Chapters - 40+</p>
//                 <a href="#" className="btn btn-primary">
//                   View More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Indexes;

import React from "react";
import "./All.css";

function Indexes() {
  return (
    <div className="w-100" style={{ backgroundColor: "#e7f1ff" }}>
      <div className="container">
        <div className="row">
          <div className="RandI mb-4">
            <h1 style={{ fontFamily: "DM Serif Display" }}>
              Publications <span style={{fontFamily: "DM Serif Display"}}>In CSE</span>
            </h1>
          </div>

          {/* Journals Card */}
          <div className="col-sm-6 mb-3 mb-sm-0 ">
            <div className="card hover-card ms-4 ps-3" style={{ backgroundColor: "#1152ae",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        width: "80%"}}>
              <div className="card-body">
                <h5 className="card-title fs-2 text-white">Journals</h5>
                <p className="card-text fs-5 text-white">SCI/ E - 60+</p>
                <p className="card-text text-white">Scopus - 150+</p>
                <button
                  type="button"
                  className="btn bg-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#journalsModal"
        
                >
                  View More
                </button>
              </div>
            </div>
          </div>

          

          {/* Conferences Card */}
          <div className="col-sm-6 mb-5">
          <div className="card hover-card ms-4 ps-3" style={{ backgroundColor: "#1152ae",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        width: "80%"}}>              <div className="card-body">
                <h5 className="card-title fs-2 text-white">Conferences</h5>
                <p className="card-text text-white">IEEE/ Springer - 400+</p>
                <p className="card-text text-white">Book Chapters - 60+</p>
                <button
                  type="button"
                  className="btn bg-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#conferencesModal"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Journals Modal */}
      <div
        className="modal fade"
        id="journalsModal"
        tabindex="-1"
        aria-labelledby="journalsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="journalsModalLabel">Journals</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
        <h6>Machine Learning</h6>
        <h6>Deep Learning</h6>
        <h6>Network Security</h6>
        <hr />
        <h5>Applications Areas</h5>
        <ul>
          <li>Medical Image Processing</li>
          <li>Data Analytics</li>
          <li>Predictive Analysis</li>
          <li>Text Mining</li>
          <li>Document and Image Processing</li>
          <li>Speech and Signal Processing</li>
          <li>Machine Vision</li>
          <li>Information Security</li>
          <li>Cloud Computing and Cloud Security</li>
          <li>Vehicle Networks</li>
          <li>Ad-Hoc Networks</li>
          <li>Wireless Networks</li>
        </ul>
      </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Conferences Modal */}
      <div
        className="modal fade"
        id="conferencesModal"
        tabindex="-1"
        aria-labelledby="conferencesModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="conferencesModalLabel">Conferences</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Details about Conferences:</p>
              <ul>
                <li>Evolving Systems</li>
                <li>Concurrency and Computation: Practice and Experience</li>
                <li>Signal, Image, and Video Processing</li>
                <li>Wireless Networks</li>
                <li>Soft Computing</li>
                <li>Medical and Biological Engineering and Computing</li>
                <li>Optical and Quantum Electronics</li>
                <li>Earth Science Informatics</li>
                <li>The Journal of Supercomputing</li>
                <li>Measurement</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Indexes;