import React, { useState } from "react";

function FAQSection() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null); // Close the accordion if it's already open
    } else {
      setOpenAccordion(id); // Open the new accordion
    }
  };

  return (
    <div className="container pt-5" style={{ marginTop: "7rem", backgroundColor: '#e7f1ff', maxWidth: '1500px', height: '450px' }}>
      <div className="row mx-5">
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
        <div className="col-3">
          <div
            className="accordion"
            id="faqAccordion"
            style={{ width: "850px", marginLeft: "7rem", marginTop: "2rem" }}
          >
            {/* Question 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  onClick={() => handleAccordionToggle(1)} // Toggle the first accordion
                  aria-expanded={openAccordion === 1 ? "true" : "false"}
                >
                  Does the CSE department have a computer lab?
                </button>
              </h2>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse ${openAccordion === 1 ? "show" : ""}`}
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body" style={{ backgroundColor: "#1152ae", color: "#fff" }}>
                  Yes, the CSE department has state-of-the-art computer labs equipped with the latest hardware and software tools for student use.
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  onClick={() => handleAccordionToggle(2)} // Toggle the second accordion
                  aria-expanded={openAccordion === 2 ? "true" : "false"}
                >
                  Are there any coding workshops available in CSE?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${openAccordion === 2 ? "show" : ""}`}
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body" style={{ backgroundColor: "#1152ae", color: "#fff" }}>
                  Yes, the CSE department frequently organizes coding workshops and hackathons to improve the programming skills of students.
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  onClick={() => handleAccordionToggle(3)} // Toggle the third accordion
                  aria-expanded={openAccordion === 3 ? "true" : "false"}
                >
                  What programming languages are taught in the CSE department?
                </button>
              </h2>
              <div
                id="collapseThree"
                className={`accordion-collapse collapse ${openAccordion === 3 ? "show" : ""}`}
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body" style={{ backgroundColor: "#1152ae", color: "#fff" }}>
                  The CSE department offers courses in a wide range of programming languages, including Python, C++, Java, and JavaScript.
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  onClick={() => handleAccordionToggle(4)} // Toggle the fourth accordion
                  aria-expanded={openAccordion === 4 ? "true" : "false"}
                >
                  Are there any industry collaborations in CSE?
                </button>
              </h2>
              <div
                id="collapseFour"
                className={`accordion-collapse collapse ${openAccordion === 4 ? "show" : ""}`}
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body" style={{ backgroundColor: "#1152ae", color: "#fff" }}>
                  Yes, the CSE department has strong ties with the tech industry, providing students with internships and placement opportunities.
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  onClick={() => handleAccordionToggle(5)} // Toggle the fifth accordion
                  aria-expanded={openAccordion === 5 ? "true" : "false"}
                >
                  What research opportunities are available in the CSE department?
                </button>
              </h2>
              <div
                id="collapseFive"
                className={`accordion-collapse collapse ${openAccordion === 5 ? "show" : ""}`}
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body" style={{ backgroundColor: "#1152ae", color: "#fff" }}>
                  The CSE department offers various research opportunities in fields like AI, Machine Learning, Data Science, and Cybersecurity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;