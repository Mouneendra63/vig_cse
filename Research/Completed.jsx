

import React from "react";
import "./All.css";

function Completed() {
  return (
    <div className="w-100 " style={{ backgroundColor: '#e7f1ff' }}>
      <div className="container">
        <div className="row">
          <div className="RandI mb-4">
            <h1 style={{ fontFamily: "DM Serif Display" }}>
              Projects <span style={{ fontFamily: "DM Serif Display" }}>In CSE</span>
            </h1>
          </div>
          <div className="col-sm-6 mb-5 mb-sm-0">
            <div className="card hover-card ms-4 ps-3" style={{ backgroundColor: "#1152ae",width:'80%' }}>
              <div className="card-body">
                <h5 className="card-title fs-2 text-white">Projects Completed</h5>
                <p className="card-text fs-5 text-white">Number of projects: 2</p>
                <p className="card-text text-white">Funding : 45 Lakhs</p>
                
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-5 mb-sm-0">
            <div className="card hover-card ms-4 ps-3" style={{ backgroundColor: "#1152ae" ,width:'80%'}}>
              <div className="card-body">
                <h5 className="card-title fs-2 text-white">Projects In Progress</h5>
                <p className="card-text text-white">Number of projects: 1</p>
                <p className="card-text text-white">Funding : 160 Lakhs</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed;
