import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  position: relative; // Added for tooltip positioning

  .tooltip {
    visibility: hidden;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    z-index: 10;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 5px;
      border-style: solid;
      border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
    }
  }

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }

  .card {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 2px solid black;
    background: transparent;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    &:hover .card-info, 
    &:hover .card-footer {
      color: white;
    }

    &:hover::after {
      transform: scaleY(1);
      opacity: 1;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--pColor);
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.5s ease-out, opacity 0.5s ease-out;
      z-index: -1;
      opacity: 0;
    }
  }

  .card-info {
    position: relative;
    z-index: 1;
    transition: color 0.5s ease;
  }

  .card-footer {
    position: relative;
    z-index: 1;
    transition: color 0.5s ease;
  }

  .card-body {
    width: 100%;
  }
`;

const getTooltipText = (title) => {
  const tooltips = {
    "H Index": "Measures productivity and impact of publications",
    "Citations": "Times work cited by others",
    "I10 - Index": "Publications with 10+ citations",
    "Ph.D's Awarded": "Ph.D. students supervised to completion"
};
  return tooltips[title] || "Information about " + title;
};

function Card({ title, value }) {
  return (
    <CardWrapper>
      <div className="tooltip">{getTooltipText(title)}</div>
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