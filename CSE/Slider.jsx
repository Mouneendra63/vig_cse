import React from "react";
import "./All.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect } from "react";
import "./slider.css";

function Slider() {
    useEffect(() => {
        let feedbackIndex = 2; // Start with the 3rd element (index 2)
        const feedbackContainers = $(".feedback-con");
    
        // Set the initial 'active' class to the 3rd container (index 2)
        feedbackContainers.removeClass("active");
        feedbackContainers.eq(feedbackIndex).addClass("active");
    
        // Add mouseover functionality to make one active and others inactive
        feedbackContainers.on("mouseover", function () {
          feedbackContainers.removeClass("active"); // Remove 'active' class from all
          $(this).addClass("active"); // Add 'active' class to the hovered element
          feedbackIndex = $(this).index(); // Update the index based on hover
        });
    
        // Autoplay functionality: Ensure one container is active at a time
        const intervalId = setInterval(function () {
          feedbackContainers.removeClass("active"); // Remove 'active' class from all
          feedbackIndex = (feedbackIndex + 1) % feedbackContainers.length; // Increment index cyclically
          feedbackContainers.eq(feedbackIndex).addClass("active"); // Add 'active' class to the next item
        }, 7000); // 7 seconds interval
    
        // Cleanup function to clear the interval on component unmount
        return () => {
          clearInterval(intervalId); // Clear the interval when the component unmounts
          feedbackContainers.off("mouseover"); // Remove the mouseover event handler
        };
      }, []);
  const [text] = useTypewriter({
    words: ["Facilties"],
    loop: true,
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-5 mt-2">
            <h1>
              <span
                style={{
                  fontFamily: "DM Serif Display",
                  color: "#1152ae",
                  fontSize: "3rem",
                }}
                className="fw-bold"
              >
                CSE{" "}
              </span>
              <span 
                style={{ color: "black", fontSize: "3rem",fontFamily: 'DM Serif Display'}} className="fw-bolder"
              >
                {text}
              </span>
              <Cursor cursorStyle=" " />
            </h1>
            <p className="text-left justify-content-center" 
   style={{fontSize:'18px',lineHeight:'1.9',textAlign:'justify'}}>
   Welcome to the Vignan University Elective Registration Portal. 
   Here, students have the opportunity to explore a wide range 
    of electives designed to enrich their academic journey and 
   foster interdisciplinary knowledge. This platform simplifies 
   the elective selection process, allowing students to browse 
   available courses, understand prerequisites, and choose 
   electives that align with their career goals and personal 
   interests. At Vignan, we believe in empowering students to 
   shape their own learning paths. Whether you’re interested in 
   technical courses, creative subjects, or industry-oriented 
   minors, our electives offer a diverse selection tailored to 
   meet the demands of today's rapidly evolving world. Register 
   today to take the next step in customizing your academic 
   experience and unlock your full potential at Vignan University!
</p>
            <div className="row">
        <div className="col" style={{marginRight:'rem'}}>
        <span className="learnn ">
            <a href="#godown"><button className="learn-more ">
              <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
              </span>
              <span className="button-text" style={{fontFamily: 'DM Serif Display',fontWeight:'500'}} >Explore More</span>
            </button></a>
          </span>
        </div>
      </div>
          </div>
          
          <div className="col-6  ms-5 pt-5">
            <section className="review-container">
              <div className="feedback">

                <div className="feedback-con">
                  <div className="feedbacks mt-5">
                    <p className="mt-4">
                      "Nice Infrastructure and facilities to students."
                    </p>
                    <h4>Akshay Kannuri</h4>
                    <h5>B.Tech First Year</h5>
                  </div>
                  <h1 className="mt-5">Webinars</h1>
                </div>

                <div className="feedback-con">
                  <div className="feedbacks mt-5">
                    <p className="mt-4">"Good and well-maintained labs."</p>
                    <h4>John Doe</h4>
                    <h5>B.Tech Second Year</h5>
                  </div>
                  <h1 className="mt-5 ms-5">CSE</h1>
                </div>

                <div className="feedback-con">
                  <div className="feedbacks mt-5">
                    <p>"Good and well-maintained labs."</p>
                    <h4>Mouneendra Vanka</h4>
                    <h5>B.Tech Third Year</h5>
                  </div>
                  <h1 className="mt-5 ms-4">Labs</h1>
                </div>

                <div className="feedback-con">
                  <div className="feedbacks mt-5">
                    <p>"Vast resources and digital library."</p>
                    <h4>Srinadh Reddy</h4>
                    <h5>B.Tech Second Year</h5>
                  </div>
                  <h1 className="mt-5" style={{marginBottom:'5rem'}}>Library</h1>
                </div>

                <div className="feedback-con">
                  <div className="feedbacks mt-5">
                    <p>""</p>
                    <h4>John Doe</h4>
                    <h5>B.Tech Second Year</h5>
                  </div>
                  <h1 className="mt-5">Reseach</h1>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col ms-5">
        <span className="learnn ms-5">
            <a href="#godown"><button className="learn-more ms-5">
              <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
              </span>
              <span className="button-text" style={{fontFamily: 'DM Serif Display',fontWeight:'500'}} >Explore More</span>
            </button></a>
          </span>
        </div>
      </div> */}
      <hr />
    </div>
  );
}

export default Slider;
