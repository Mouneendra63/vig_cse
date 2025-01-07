import React from 'react';
import './Events.css';
import './All.css'


function VideoSection (){
  return (
    <section className="video-section ms-3" style={{backgroundColor:'#fff'}}>
      <div className="container">
      <div className="RandI mb-4 me-5">
            <h1 style={{ fontFamily: "DM Serif Display" }}>
            Event <span style={{ fontFamily: "DM Serif Display" }}> Highlights</span>
            </h1>
          </div>
        <div className="video-grid">
          {/* Video Card 1 */}
          <div className="video-card me-3">
            <div className="video-container">
              <video
                src="https://vignanbuckets.s3.us-east-1.amazonaws.com/public/DSC_4326.MOV"
                title="Cultural Fest Highlights"
                muted
                autoPlay
                loop
                className='video-full'
              />
            </div>
            <h3>Cultural Fest Highlights</h3>
          </div>

          {/* Video Card 2 */}
          <div className="video-card me-3">
            <div className="video-container">
            <video
                src="https://vignanbuckets.s3.us-east-1.amazonaws.com/public/tech_MSR53uoq.mp4"
                title="Tech Summit Keynote"
                muted
                autoPlay
                loop
                className="video-full"
              />
            </div>
            <h3>Tech Summit Keynote</h3>
          </div>

          {/* Video Card 3 */}
          <div className="video-card">
            <div className="video-container">
              <video
                src="https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Vignan's University (Deemed to be) Guntur Campus Tour 2022.mp4"
                title="Campus Life"
                muted
                autoPlay
                loop
                className='video-full'
              />
            </div>
            <h3>Campus Life</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;