import React from 'react';

const AppreciationCard = ({ name, imgSrc }) => (
  <div className="a-card ms-2" style={{background:'#1152ae'}}>
    <div className="a-card-img">
      <img src={imgSrc} alt={name} />
    </div>
    <div className="a-card-txt">
      <p className='fs-5'>{name}</p>
      <p></p>
    </div>
  </div>
);

function Appreciation (){
  const appreciations = [
    {
      name: 'Dr.K.V.Krishna Kishore',
      imgSrc: 'https://vignan.ac.in/vignantest/departments/dep_assets/images/res_appr_cse_img1.jpeg',
    },
    {
      name: 'Dr. Venkatrama Phani Kumar',
      imgSrc: 'https://vignan.ac.in/vignantest/departments/dep_assets/images/res_appr_cse_img2.jpeg',
    },
    {
      name: 'Dr. D.Yakobu',
      imgSrc: 'https://vignan.ac.in/vignantest/departments/dep_assets/images/res_appr_cse_img5.jpeg',
    },
    {
      name: 'Dr. S.Deva Kumar',
      imgSrc: 'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/deva.jpg', // Adjust the image path as needed
    },
  ];

  return (
    <div style={{background:'white'}}>
<div className="RandI mb-3 ms-5 text-center" style={{background:'white'}}>
                <h1 className='ms-5 ps-5' style={{fontFamily: "DM Serif Display"}}>
                Appreciations
                </h1>
            </div> 
                  <div className="appreciation p-5" style={{background:'white'  }}>
        {appreciations.map((appreciation, index) => (
          <AppreciationCard
            key={index}
            name={appreciation.name}
            imgSrc={appreciation.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Appreciation;