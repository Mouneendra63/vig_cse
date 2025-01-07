import React from "react";
import "./All.css"; // Add your CSS file here

function Innovation (){
  return (
    // <div className="RandI mt-5" style={{marginLeft:'2rem',backgroundImage:'linear-gradient(to right top, #1152ae, #586dbb, #8389c8, #a8a8d6, #cac8e3, #cac8e3, #cac8e3, #cac8e3, #a8a8d6, #8389c8, #586dbb, #1152ae'}}>
    <div className="RandI" style={{backgroundColor:'#e7f1ff',maxWidth:'1500px'}}>

      <div>
      <h1 style={{fontFamily: "DM Serif Display"}}>
        Research and <span style={{fontFamily: "DM Serif Display"}}>Innovation</span>
      </h1>
  <div className="content-section research ms-5">
        <p className="me-5 fs-7 pe-5" style={{fontFamily:'Familjen Grotesk'}}>
          The Department of Computer Science and Engineering (CSE) at Vignan University is dedicated to pioneering
          research that drives technological advancement. Our department explores a broad range of cutting-edge
          fields, including Artificial Intelligence, Machine Learning, Data Science, Cybersecurity, and the
          Internet of Things (IoT). Through a strong focus on foundational theory and practical applications, our
          faculty and students tackle complex challenges that shape industries and society.
        </p>
        <img src="https://vignanbuckets.s3.us-east-1.amazonaws.com/public/RESEA.JPG" alt="Research related" className="me-5 mb-5" />
      </div>

    
      <div className="content-section innovation ms-5">
        <img src="https://vignanbuckets.s3.us-east-1.amazonaws.com/public/INNO.JPG" alt="Innovation related"className="ms-2 mb-3"  />
        <p className="ms-5 fs-7" style={{marginLeft:'1rem',fontFamily:'Familjen Grotesk'}}>
          At Vignan’s CSE department, innovation is at the heart of what we do. Our community is actively involved
          in transformative projects, pushing the boundaries in areas like big data analytics, cloud computing,
          and neural networks. We believe that technology should be a force for positive change, and our team is
          dedicated to advancing its role in creating a more connected, secure, and efficient world.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Innovation;