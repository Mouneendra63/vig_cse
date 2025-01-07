import React, { useState, useEffect } from 'react';

const FeedbackCard = ({ name, description, rating }) => (
  <div className="feedback-card ms-5">
    <span className="feedback-name">{name}</span>
    <p className="feedback-description">{description}</p>
    <div className="star-rating">{rating}</div>
  </div>
);

function Feedback() {
  const feedbacks = [
    {
      name: 'Dr. Rajesh Kumar',
      description: `"Vignan University's emphasis on research-driven education is remarkable. Their innovative approach fosters both learning and discovery."`,
      rating: '★★★★★',
    },
    {
      name: 'Dr. Bhargavi Maridu',
      description: `"The state-of-the-art facilities at Vignan University are unparalleled. The lab infrastructure has greatly enhanced the quality of our experiments."`,
      rating: '★★★★★',
    },
    {
      name: 'Dr. Suvarna Devi',
      description: `"The collaborative atmosphere at Vignan University is truly inspiring. Faculty and students work together seamlessly to achieve excellence."`,
      rating: '★★★★★',
    },
    {
      name: 'Dr. Jhansi Lakshmi',
      description: `"The dedication of the faculty at Vignan University is commendable. Their guidance has been instrumental in our academic growth."`,
      rating: '★★★★★',
    },
    {
      name: 'Dr. Gandhi Ongole',
      description: `"Vignan University has set a benchmark in providing quality education and research opportunities. The academic resources here are outstanding."`,
      rating: '★★★★★',
    },
    {
      name: 'Dr. Vijay Babu',
      description: `"The workshops and seminars organized by Vignan University are highly informative and have broadened our perspectives significantly."`,
      rating: '★★★★★',
    },
    {
      name: 'Dr. Sunil Babu',
      description: `"The culture of innovation at Vignan University is unmatched. It encourages students and faculty alike to think outside the box."`,
      rating: '★★★★★',
    },
    {
      name: 'Dr. Balu Narasimha Rao',
      description: `"The focus on holistic development at Vignan University is impressive. It nurtures not only academic but also personal growth."`,
      rating: '★★★★★',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 10000); 

    return () => clearInterval(interval); 
  }, [feedbacks.length]);

  return (
    <div className="feedback-slider mt-5 p-5" style={{ marginTop: '2rem' }}>
      <div className="feedback-container" id="feedback-container">
        {feedbacks.map((feedback, index) => (
          <div
            className={`feedback-card ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <FeedbackCard
              name={feedback.name}
              description={feedback.description}
              rating={feedback.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const FeedbackSection = () => (
  <div>
    <h1 style={{ marginTop: '5rem', textAlign: 'center' }}>Feedback</h1>
    <FeedbackSlider />
  </div>
);

export default Feedback;