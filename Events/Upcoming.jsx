import React from 'react';
import './Events.css'; // Ensure your styles are imported

function UpcomingEvents  (){
  const events = [
    {
      title: 'Stack Hack 2025',
      date: 'March 20-27, 2025',
      description: 'Annual inter-college sports competition featuring multiple sports disciplines',
    },
    {
      title: 'Pwc Cyber Security Challenge',
      date: 'February 5, 2025',
      description: 'Showcase of groundbreaking research by faculty and students',
    },
    {
      title: 'Alumni Meet 2025',
      date: 'April 15, 2025',
      description: 'Annual gathering of university alumni with networking opportunities',
    },
  ];

  return (
    <section className="upcoming-events" style={{backgroundColor:'#fff'}}>
      <div className="container">
      <div className="RandI mb-4 me-5">
            <h1 style={{ fontFamily: "DM Serif Display" }}>
            Upcoming <span style={{ fontFamily: "DM Serif Display" }}>Events</span>
            </h1>
          </div>
        <div className="upcoming-grid">
          {events.map((event, index) => (
            <div className="upcoming-card" key={index}>
              <h3>{event.title}</h3>
              <p className="date">{event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;