import React, { useState } from "react";
import "./All.css"; // Add your CSS file here

const projects = [
  {
    id: "pro1",
    image: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/research1.jpeg",
    title: "Prof. K V Krishna Kishore",
    description:
      "STI Hub for income generation and livelihood improvement of Scheduled Caste Community of Guntur Dist, AP.",
    modalImage:
      "https://vignan.ac.in/vignantest/departments/dep_assets/images/res_appr_cse_img1.jpeg",
    abstract:
      "Prof. K. V. Krishna Kishore’s project focuses on establishing an STI (Science, Technology, and Innovation) Hub aimed at improving the livelihoods of Scheduled Caste communities in Guntur District, Andhra Pradesh. The initiative seeks to empower marginalized communities through skill development, technology-driven interventions, and income-generation programs. By leveraging modern technologies and sustainable practices, the project addresses socioeconomic challenges, enhances employability, and fosters entrepreneurship within these communities. This initiative is expected to create long-term positive impacts by promoting self-reliance, reducing economic disparities, and contributing to the region’s overall development. The STI Hub stands as a model for inclusive growth and community upliftment.",
    academicExperience: "Over 15 years at Vignan Foundation for Science, Technology, and Research.",
  },
  {
    id: "pro2",
    image: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/research2.jpeg",
    title: "Dr. T Maruthi Padmaja & Dr. N Gnaneswara Rao",
    description:
      "An adaptive classifier for unbalanced evolving streams: An application to fraudulent data streams.",
    modalImage:
      "https://vignan.ac.in/Facultyprofiles/uploads/02181/profilepic02181.JPG",
    abstract:
      "Dr. T. Maruthi Padmaja and Dr. N. Gnaneswara Rao’s research focuses on developing an adaptive classifier specifically designed for unbalanced, evolving data streams, with a primary application in detecting fraudulent activities. In real-world scenarios, fraudulent data often exhibits a highly imbalanced distribution, where fraudulent instances are far less frequent than legitimate ones. This imbalance makes traditional classification techniques less effective. The proposed adaptive classifier continuously learns and adjusts to the evolving nature of the data streams, ensuring that it remains accurate even as the characteristics of fraudulent activities change over time. Their work contributes significantly to improving fraud detection systems, especially in dynamic environments.",
    academicExperience: "Over 15 years at Vignan Foundation for Science, Technology, and Research.",
  },
  {
    id: "pro3",
    image:"https://vignanbuckets.s3.us-east-1.amazonaws.com/public/reserach3.jpeg",
    title: "Prof. K V Krishna Kishore & Dr. Deva Kumar",
    description:
      "Exploring machine learning techniques for climate change adaptation and resilience planning.",
    modalImage: "https://vignan.ac.in/Facultyprofiles/uploads/02181/profilepic02181.JPG",
    abstract: "Prof. K. V. Krishna Kishore and Dr. Deva Kumar are spearheading innovative research on utilizing machine learning techniques to address climate change adaptation and resilience planning. Their work focuses on analyzing vast datasets to predict climate impacts, assess vulnerabilities, and develop strategies for mitigating risks. By leveraging advanced algorithms, the research aims to enhance decision-making processes for sustainable resource management and disaster preparedness. The project also emphasizes the integration of AI-driven insights into local and global policy frameworks, ensuring scalable solutions for climate resilience. Their efforts contribute significantly to addressing environmental challenges and safeguarding communities against the adverse effects of climate change.",
    academicExperience: "Details for this project are currently unavailable.",
  },
  {
    id: "pro4",
    image: "https://vignanbuckets.s3.us-east-1.amazonaws.com/public/research4.jpeg",
    title: "Dr. Jyostna Devi Bodapati",
    description: "Advanced research on sustainable energy solutions for rural communities.",
    modalImage: "https://vignan.ac.in/Facultyprofiles/uploads/02181/profilepic02181.JPG",
    abstract: "Advanced research on sustainable energy solutions for rural communities focuses on addressing energy access challenges through innovative and eco-friendly technologies. This research emphasizes renewable energy sources such as solar, wind, and biomass to create affordable, reliable, and decentralized energy systems tailored to rural needs. Key objectives include improving energy efficiency, reducing carbon footprints, and fostering community participation in energy initiatives. By integrating modern technologies like microgrids and energy storage systems, the research aims to enhance rural electrification, support livelihoods, and promote economic growth. These solutions empower communities, improve quality of life, and contribute to global efforts toward sustainable development and energy equity.",
    academicExperience: "Details for this project are currently unavailable.",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectId) => {
    const project = projects.find((proj) => proj.id === projectId);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="pro" style={{ backgroundColor: "white" }}>
      <div className="RandI" style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "DM Serif Display" }}>
          Research <span style={{ fontFamily: "DM Serif Display" }}>Projects</span>
        </h1>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => openModal(project.id)} // Open modal when clicking anywhere on the project card
          >
            <img src={project.image} alt={project.title} />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                style={{ border: "none", outline: "none", backgroundColor: "white" }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent modal from opening when clicking the button
                  openModal(project.id);
                }}
              >
                View More ⟶
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pro-btn mt-3">  
        <button className="cta">
          <span>View More</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>

      {selectedProject && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {selectedProject.title}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <h3>Research</h3>
                      <p>{selectedProject.description}</p>
                      <hr style={{ width: "500px" }} />
                      <h3>Abstract</h3>
                      <p>{selectedProject.abstract}</p>
                      <hr />
                      <h3>Academic Experience</h3>
                      <p>{selectedProject.academicExperience}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;