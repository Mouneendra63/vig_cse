// import React from "react";

// function Reviews() {
//   const reviews = [
//     {
//       text: "VFSTR offers exceptional facilities, fostering creativity and learning. The support from faculty and peers encouraged me to take on challenges confidently and excel in my studies.",
//       author: "Ms. PRIYA SRIDHAR",
//       role: "Scholar",
//     },
//     {
//       text: "The research labs at VFSTR are world-class. With cutting-edge technology and a collaborative environment, I was able to explore new ideas and build innovative solutions.",
//       author: "Mr. RAJESH KUMAR",
//       role: "Student",
//     },
//     {
//       text: "VFSTR’s library resources and serene study spaces helped me focus deeply on my work. The constant encouragement from mentors was a driving force throughout my journey.",
//       author: "Ms. ANITA REDDY",
//       role: "Scholar",
//     },
//   ];

//   return (
//     <div className="container py-2 mt-5">
//       {/* Title Section */}
//       <div className="row">
//         <div className="col-12 text-left">
//           <p
//             className="fs-1 fw-normal"
//             style={{
//               fontFamily: 'DM Serif Display',
//               lineHeight: "1.2",
//               color: "#000",
//             }}
//           >
//             What People Say
//           </p>
//         </div>
//       </div>

//       <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
//         {reviews.map((review, index) => (
//           <div className="col" key={index}>
//             <div className="card border-0 bg-transparent h-100 w-100">
//               <div className="card-body">
//               <i className="fa-solid fa-quote-left" style={{ color: '#1152ae',fontSize:'4rem' }}></i>                <p className="card-text mt-3 fs-5">{review.text}</p>
//                 <p className="card-title fw-bold">
//                   {review.author}
//                   <br />
//                   {review.role}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Reviews;

import React from "react";

function Reviews() {
  const reviews = [
    {
      text: "VFSTR offers exceptional facilities, fostering creativity and learning. The support from faculty and peers encouraged me to take on challenges confidently and excel in my studies.",
      author: "Ms. PRIYA SRIDHAR",
      role: "Scholar",
    },
    {
      text: "The research labs at VFSTR are world-class. With cutting-edge technology and a collaborative environment, I was able to explore new ideas and build innovative solutions.",
      author: "Mr. RAJESH KUMAR",
      role: "Student",
    },
    {
      text: "VFSTR’s library resources and serene study spaces helped me focus deeply on my work. The constant encouragement from mentors was a driving force throughout my journey.",
      author: "Ms. ANITA REDDY",
      role: "Scholar",
    },
  ];

  return (
    <div className="container mt-5" style={{marginRight:'10rem',backgroundColor:'white'}}>
      <div className="row">
        <div className="col-12 text-left">
          <p
            className="fs-1 fw-normal mb-5"
            style={{
              fontFamily: 'DM Serif Display',
              lineHeight: "1.2",
              color: "#000",
            }}
          >
            What People Say
          </p>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4" style={{backgroundColor:'white'}}>
        {reviews.map((review, index) => (
          <div className="col" key={index} style={{backgroundColor:'white'}}>
            <div
              className="card  h-100"
              style={{
                width: "24rem",
                textAlign: "justify", 
                padding: "2rem",
                backgroundColor:'white'
              
              }}
            >
              <div className="card-body" style={{backgroundColor:'white'}}>
                <i
                  className="fa-solid fa-quote-left"
                  style={{ color: "#1152ae", fontSize: "4rem" }}
                ></i>
                <p
                  className="card-text mt-3 fs-5"
                  style={{ lineHeight: "1.6", marginBottom: "1.5rem" }}
                >
                  {review.text}
                </p>
                <p
                  className="card-title fw-bold"
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  {review.author}
                  <br />
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;