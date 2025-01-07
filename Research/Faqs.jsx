import React, { useState } from "react";

function Faqs() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null); // Close the accordion if it's already open
    } else {
      setOpenAccordion(id); // Open the new accordion
    }
  };

  // New FAQ data
  const faqData = [
    {
      question: "How are candidates evaluated for the Ph.D. program in Engineering?",
      answer: "Candidates are evaluated based on academic performance, research experience, a written test, and an interview.",
    },
    {
      question: "What’s the difference between full-time and part-time Ph.D. eligibility?",
      answer: "Full-time candidates need a first-class B.Tech and M.Tech, while part-time candidates can use industry experience.",
    },
    {
      question: "How important is the written test in the Ph.D. admission process?",
      answer: "The written test assesses foundational knowledge and is crucial unless waived for candidates who have cleared GATE or CSIR-NET.",
    },
    {
      question: "How does VFSTR value prior work experience in the Ph.D. selection process?",
      answer: "Relevant work experience adds value, contributing up to 5% of the total evaluation score.",
    },
    {
      question: "What happens after Ph.D. selection, and how are supervisors assigned?",
      answer: "After admission, supervisors are assigned based on research interests and mutual agreement between the student and faculty.",
    },
  ];

  return (
    <div className="container mt-5 p-5" style={{ marginTop: "0",backgroundColor:'white' }}>
      <div className="row mx-5">
        {/* Left Column */}
        <div className="col-2 ml-5" style={{ width: "300px", position: "relative", top: "100px", left: "20px" }}>
          <p
            style={{
              whiteSpace: "nowrap",
              fontFamily: "'DM Serif Display', serif",
              fontSize: "3rem",
              lineHeight: "3rem",
            }}
          >
            Frequently <br /> Asked <br /> Questions
          </p>
        </div>

        {/* Right Column */}
        <div className="col-3" style={{backgroundColor:'white'}}>
          <div
            className="accordion"
            id="faqAccordion"
            style={{ width: "700px", marginLeft: "7rem", marginTop: "2rem" }}
          >
            {faqData.map((faq, index) => (
              <div className="accordion-item" key={index} style={{backgroundColor:'white'}}>
                <h2 className="accordion-header" id={`heading${index}`} style={{backgroundColor:'white'}}>
                  <button
                    className={`accordion-button ${openAccordion === index ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => handleAccordionToggle(index)} // Toggle the accordion
                    aria-expanded={openAccordion === index ? "true" : "false"}
                    
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${openAccordion === index ? "show" : ""}`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body" style={{ backgroundColor: "#1152ae", color: "#fff" }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;