import React, { useState, useEffect } from "react";
import "./All.css"; // Add appropriate styling

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      imgSrc: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/slide.jpeg",
      title: "Research and Innovation",
      text: "The Department of Computer Science and Engineering (CSE) at Vignan is dedicated to pioneering research that pushes the boundaries of technology.",
      buttonText: "Explore More",
    },
    {
      imgSrc: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/02.JPG",
      title: "Advanced Computing Labs",
      text: "Our state-of-the-art computing facilities provide an ideal environment for students and researchers to engage in hands-on learning and innovation.",
      buttonText: "Explore More",
    },
    {
      imgSrc: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/COLL.jpeg",
      title: "Collaboration & Partnerships",
      text: "Vignan CSE collaborates with industry leaders and academic institutions worldwide to drive cutting-edge research and real-world solutions.",
      buttonText: "Learn More",
    },
    {
      imgSrc: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/slide4.jpg",
      title: "AI and Machine Learning",
      text: "Our research in Artificial Intelligence and Machine Learning aims to create innovative solutions that transform industries and improve lives.",
      buttonText: "Discover More",
    },
    {
      imgSrc: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/1234.jpg",
      title: "Student Research Opportunities",
      text: "We offer numerous research opportunities for students to work alongside faculty on groundbreaking projects that impact society.",
      buttonText: "Find Out More",
    },
    {
      imgSrc: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/slide6.jpg",
      title: "Data Science & Big Data",
      text: "At Vignan, we explore the vast potentials of data science and big data analytics, aiming to uncover insights that drive innovation.",
      buttonText: "Explore Research",
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // 7 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="slide-container mt-2">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slides ${index === activeSlide ? "activeSlide" : ""}`}
          attr={index}
        >
          <div className="img-container">
            <img src={slide.imgSrc} alt={slide.title} />
          </div>
          <div className="slide-text" style={{marginTop:'5rem',marginLeft:'11rem'}}>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <button>{slide.buttonText}</button>
          </div>
        </div>
      ))}

      <div className="btn-dot">
        <span className="prev btn" onClick={handlePrev}>
          &#10094;
        </span>
        <div className="dot-container">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === activeSlide ? "active" : ""}`}
              attr={index}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
        <span className="next btn" onClick={handleNext}>
          &#10095;
        </span>
      </div>
    </div>
  );
};

export default Slider;