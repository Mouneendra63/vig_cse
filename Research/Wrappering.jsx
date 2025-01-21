
import React from "react";
import Card from "./Citations"; 

function CitationsWrapper() {
  const cardData = [
    { title: "H Index", value: 34 },
    { title: "Citations", value: 3580 },
    { title: "I10 - Index", value: 95 },
    { title: "Ph.D's Awarded", value: 26 },
  ];

  return (
    <div className="container py-5" style={{width:'100%',backgroundColor: "#e7f1ff" ,maxWidth:'1500px'}} >
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cardData.map((data, index) => (
          <div className="col" key={index}>
            <Card title={data.title} value={data.value} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CitationsWrapper;