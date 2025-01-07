

import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  .card {
    position: relative;
    overflow: hidden; /* Ensure content is clipped within the card bounds */
    transition: transform 0.3s, box-shadow 0.3s;
    border: 2px solid black;
    background: transparent;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    &:hover .card-info, 
    &:hover .card-footer {
      color: white; /* Change text color to white on hover */
    }

    &:hover::after {
      transform: scaleY(1); /* Fill the card background from the bottom */
      opacity: 1;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--pColor); /* Use your desired fill color */
      transform: scaleY(0);
      transform-origin: bottom; /* Start fill animation from the bottom */
      transition: transform 0.5s ease-out, opacity 0.5s ease-out;
      z-index: -1; /* Place behind the card content */
      opacity: 0; /* Start with no visibility */
    }
  }

  .card-info {
    position: relative; /* Keep text on top of the hover effect */
    z-index: 1;
    transition: color 0.5s ease; /* Smooth text color transition */
  }

  .card-footer {
    position: relative; /* Keep footer text on top of the hover effect */
    z-index: 1;
    transition: color 0.5s ease; /* Smooth text color transition */
  }

  .card-body {
    width: 100%; /* Ensure the body takes full width */
  }
`;

function Card({ title, value }) {
  return (
    <CardWrapper>
      <div style={{ backgroundColor: '#e7f1ff', width: '100%' }}>
        <div
          className="card text-center mt-5"
          style={{
            color: 'black',
            width: '100%',
            maxWidth: '300px',
            marginLeft: '1.5rem',
            height: '200px',
          }}
        >
          <div className="card-info">
            <p
              className="text-title fs-5 fw-bold fs-4 mb-1"
              style={{ fontFamily: "DM Serif Display" }}
            >
              {title}
            </p>
          </div>
          <div className="card-footer">
            <p className="fw-semibold" style={{ fontSize: '4rem' }}>
              {value}
            </p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

export default Card;