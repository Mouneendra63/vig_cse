import React from 'react';
import './Events.css'; // Optional: Add a CSS file for styling

function VideoHeader  () {
  return (
    <header className="video-header">
      <div className="video-overlay"></div>
      <video autoPlay muted loop id="headerVideo">
        <source src="https://vignanbuckets.s3.us-east-1.amazonaws.com/public/cse.mp4" type="video/mp4" />
      </video>
      <div className="header-content">
        <div className="container">
          <h1 className='mt-5 pt-5'>Events Hosted By The CSE</h1>
          <p className="header-description">
          Discover opportunities through CSE events at Vignan University. Enhance skills, enjoy campus life, and thrive in a diverse community.</p>
        <button className="cta-button">Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default VideoHeader;