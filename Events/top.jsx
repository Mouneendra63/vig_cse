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
          <h1 className='mt-5 pt-5'>Events Of Vignan University</h1>
          <p className="header-description">
            Discover a world of opportunities, experience vibrant campus life, and
            achieve academic excellence. Join us at Vignan University to become part
            of a diverse community where you can grow and thrive.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default VideoHeader;