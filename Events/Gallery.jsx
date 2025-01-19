// import LightGallery from "lightgallery/react";

// // import styles
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-fullscreen.css";
// import "lightgallery/css/lg-share.css";
// import "lightgallery/css/lg-rotate.css";

// // import plugins if you need
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgShare from "lightgallery/plugins/share";
// import lgRotate from "lightgallery/plugins/rotate";
// import './Gallery.css'
// const images = [
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/eve_wrkshp_01062022.jpeg", alt: "The workshop focused on CyberSecurity, covering the current threat landscape, attack methods, mitigation strategies, and best practices. The session, led by Mr. Deepak Talwar, National Security Officer at Microsoft, provided students with practical insights into securing digital environments." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_17102024.jpg", alt: "The Department of CSE at Vignan University organized an Industry-Institute Interaction with alumnus Mr. Koushik Karthik, currently working as a Senior Business Analyst at Allianz Services. The seminar, held on 17th and 18th October 2024, emphasized the importance of Database Management Systems (DBMS) in modern industries and explored career opportunities in Data Engineering and Database Administration." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_18102024.jpg", alt: "The Department of CSE at Vignan University organized an Industry Interaction Session on 18th and 19th October 2024 with Mr. Ancha Rajendra, an alumnus of the 2014-2018 batch and currently an Information Security Analyst at Infosys Ltd. The session focused on practical insights into cybersecurity essentials, industry frameworks, and career-building tips for aspiring security professionals." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_18102024_1.jpg", alt: "The Department of Computer Science and Engineering conducted an Industry Interaction Seminar on 15th October 2024. The session aimed to expose students to real-world applications of Object-Oriented Programming (OOPS) and backend development practices in the IT industry. The event featured Mr. Rohith Maddu, an alumnus of VFSTR and a System Engineer at TCS, who shared his expertise on backend technologies and career-building strategies." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_18102024_2.jpg", alt: "The Department of CSE at Vignan University organized an Industry-Institute Interaction with alumnus Mr. Sk Mohammed Mujamill, currently working as a Senior Database Administrator at IBM. The seminar, held on 18th and 19th October 2024, emphasized the critical role of DBMS in finance and healthcare sectors and focused on SQL and relational database skills." },
//   {
//     src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events172.png",
//     alt: "The Department of CSE at Vignan University organized an Industry-Institute Interaction on 18th and 19th October 2024 with alumnus Mr. Raghava Manchala, currently working as Data Engineer 3 at Deloitte. The seminar focused on DBMS, Databricks, and real-world applications of big data, equipping students with practical skills for data-related careers. ",
//   },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events180.jpg", alt: "The five-day Faculty Development Program (FDP) provided participants with a comprehensive understanding of cloud-native application development using Red Hat OpenShift. Sessions covered front-end development, database integration, and cloud deployment, culminating in a hands-on project where participants built a student assessment website, integrating front-end, back-end, and cloud deployment techniques." },
//   {
//     src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events179.png",
//     alt: "The Department of CSE at VFSTR organized a notebook donation drive, distributing 900 notebooks to four government schools in celebration of the Chairman's 73rd birthday. The event was coordinated by the NSS Coordinator and BoSA Team, aiming to enhance educational access for underprivileged students.",
//   },
//   {
//     src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events170.png",
//     alt: "The seminar, organized by the Entrepreneurship Cell and IIC at VFSTR, focused on Intellectual Property Rights (IPR) with a special emphasis on patenting computer-related inventions. Conducted in collaboration with the NIPAM Indian Patent Office, the session provided insights into the patent filing process and its importance for innovation in the tech industry.",
//   },
// ];

// export default function Gallery() {
//   const onInit = () => {
//     console.log("lightGallery has been initialized");
//   };
//   return (
//     <div className="App py-2 container d-flex" style={{ padding: "" }}>
//       <LightGallery
//         onInit={onInit}
//         speed={500}
//         plugins={[
//           lgThumbnail,
//           lgZoom,
//           lgAutoplay,
//           lgFullscreen,
//           lgRotate,
//           lgShare,
//         ]}
//       >
//         {images.map((image, index) => {
//           return (
//             <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//           {images.map((image, index) => (
//             <div key={index} className="col-12 col-sm-6 col-md-4" style={{ flex: '0 0 32%' }}>
//               <a href={image.src}>
//                 <img alt={image.alt} src={image.src} className="gimage" />
//               </a>
//             </div>
//           ))}
//         </div>
        
//           );
//         })}
//       </LightGallery>
//     </div>
//   );
// }

// import LightGallery from "lightgallery/react";

// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-fullscreen.css";
// import "lightgallery/css/lg-share.css";
// import "lightgallery/css/lg-rotate.css";
// import Navbar from '../CSE/AA'

// // import plugins
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgShare from "lightgallery/plugins/share";
// import lgRotate from "lightgallery/plugins/rotate";
// import './Gallery.css'


// const images = [
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/eve_wrkshp_01062022.jpeg", alt: "The workshop focused on CyberSecurity, covering the current threat landscape, attack methods, mitigation strategies, and best practices. The session, led by Mr. Deepak Talwar, National Security Officer at Microsoft, provided students with practical insights into securing digital environments." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_17102024.jpg", alt: "The Department of CSE at Vignan University organized an Industry-Institute Interaction with alumnus Mr. Koushik Karthik, currently working as a Senior Business Analyst at Allianz Services. The seminar, held on 17th and 18th October 2024, emphasized the importance of Database Management Systems (DBMS) in modern industries and explored career opportunities in Data Engineering and Database Administration." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_18102024.jpg", alt: "The Department of CSE at Vignan University organized an Industry Interaction Session on 18th and 19th October 2024 with Mr. Ancha Rajendra, an alumnus of the 2014-2018 batch and currently an Information Security Analyst at Infosys Ltd. The session focused on practical insights into cybersecurity essentials, industry frameworks, and career-building tips for aspiring security professionals." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_18102024_1.jpg", alt: "The Department of Computer Science and Engineering conducted an Industry Interaction Seminar on 15th October 2024. The session aimed to expose students to real-world applications of Object-Oriented Programming (OOPS) and backend development practices in the IT industry. The event featured Mr. Rohith Maddu, an alumnus of VFSTR and a System Engineer at TCS, who shared his expertise on backend technologies and career-building strategies." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_18102024_2.jpg", alt: "The Department of CSE at Vignan University organized an Industry-Institute Interaction with alumnus Mr. Sk Mohammed Mujamill, currently working as a Senior Database Administrator at IBM. The seminar, held on 18th and 19th October 2024, emphasized the critical role of DBMS in finance and healthcare sectors and focused on SQL and relational database skills." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events172.png", alt: "The Department of CSE at Vignan University organized an Industry-Institute Interaction on 18th and 19th October 2024 with alumnus Mr. Raghava Manchala, currently working as Data Engineer 3 at Deloitte. The seminar focused on DBMS, Databricks, and real-world applications of big data, equipping students with practical skills for data-related careers." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events180.jpg", alt: "The five-day Faculty Development Program (FDP) provided participants with a comprehensive understanding of cloud-native application development using Red Hat OpenShift. Sessions covered front-end development, database integration, and cloud deployment, culminating in a hands-on project where participants built a student assessment website, integrating front-end, back-end, and cloud deployment techniques." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events179.png", alt: "The Department of CSE at VFSTR organized a notebook donation drive, distributing 900 notebooks to four government schools in celebration of the Chairman's 73rd birthday. The event was coordinated by the NSS Coordinator and BoSA Team, aiming to enhance educational access for underprivileged students." },
//   { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events170.png", alt: "The seminar, organized by the Entrepreneurship Cell and IIC at VFSTR, focused on Intellectual Property Rights (IPR) with a special emphasis on patenting computer-related inventions. Conducted in collaboration with the NIPAM Indian Patent Office, the session provided insights into the patent filing process and its importance for innovation in the tech industry." },
// ];

// export default function Gallery() {
//     const onInit = () => {
//       console.log("lightGallery has been initialized");
//     };
  
//     return (
//         <Navbar/>
//       <div className="App py-2 container d-flex" style={{ padding: "" }}>
//         <LightGallery
//           onInit={onInit}
//           speed={500}
//           plugins={[
//             lgThumbnail,
//             lgZoom,
//             lgAutoplay,
//             lgFullscreen,
//             lgRotate,
//             lgShare,
//           ]}
//         >
//           <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//             {images.map((image, index) => (
//               <div key={index} className="col-12 col-sm-6 col-md-4" style={{ flex: '0 0 32%' }}>
//                 <a href={image.src} data-src={image.src} data-lightbox="gallery">
//                   <img alt={image.alt} src={image.src} className="gimage" />
//                 </a>
//               </div>
//             ))}
//           </div>
//         </LightGallery>
//       </div>
//     );
//   }


import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import Navbar from '../CSE/AA';  // Ensure this is the correct import path for your Navbar

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import './Gallery.css';

const images = [
      { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/eve_wrkshp_01062022.jpeg", alt: "The workshop focused on CyberSecurity, covering the current threat landscape, attack methods, mitigation strategies, and best practices. The session, led by Mr. Deepak Talwar, National Security Officer at Microsoft, provided students with practical insights into securing digital environments." },
      { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_17102024.jpg", alt: "The Department of CSE at Vignan University organized an Industry-Institute Interaction with alumnus Mr. Koushik Karthik, currently working as a Senior Business Analyst at Allianz Services. The seminar, held on 17th and 18th October 2024, emphasized the importance of Database Management Systems (DBMS) in modern industries and explored career opportunities in Data Engineering and Database Administration." },
      { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_18102024.jpg", alt: "The Department of CSE at Vignan University organized an Industry Interaction Session on 18th and 19th October 2024 with Mr. Ancha Rajendra, an alumnus of the 2014-2018 batch and currently an Information Security Analyst at Infosys Ltd. The session focused on practical insights into cybersecurity essentials, industry frameworks, and career-building tips for aspiring security professionals." },
      { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_18102024_1.jpg", alt: "The Department of Computer Science and Engineering conducted an Industry Interaction Seminar on 15th October 2024. The session aimed to expose students to real-world applications of Object-Oriented Programming (OOPS) and backend development practices in the IT industry. The event featured Mr. Rohith Maddu, an alumnus of VFSTR and a System Engineer at TCS, who shared his expertise on backend technologies and career-building strategies." },
      { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_eve_18102024_2.jpg", alt: "The Department of CSE at Vignan University organized an Industry-Institute Interaction with alumnus Mr. Sk Mohammed Mujamill, currently working as a Senior Database Administrator at IBM. The seminar, held on 18th and 19th October 2024, emphasized the critical role of DBMS in finance and healthcare sectors and focused on SQL and relational database skills." },
      { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events172.png", alt: "The Department of CSE at Vignan University organized an Industry-Institute Interaction on 18th and 19th October 2024 with alumnus Mr. Raghava Manchala, currently working as Data Engineer 3 at Deloitte. The seminar focused on DBMS, Databricks, and real-world applications of big data, equipping students with practical skills for data-related careers." },
      { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events180.jpg", alt: "The five-day Faculty Development Program (FDP) provided participants with a comprehensive understanding of cloud-native application development using Red Hat OpenShift. Sessions covered front-end development, database integration, and cloud deployment, culminating in a hands-on project where participants built a student assessment website, integrating front-end, back-end, and cloud deployment techniques." },
      { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events179.png", alt: "The Department of CSE at VFSTR organized a notebook donation drive, distributing 900 notebooks to four government schools in celebration of the Chairman's 73rd birthday. The event was coordinated by the NSS Coordinator and BoSA Team, aiming to enhance educational access for underprivileged students." },
      { src: "https://vignan.ac.in/newvignan/departments/dep_assets/images/cse_events170.png", alt: "The seminar, organized by the Entrepreneurship Cell and IIC at VFSTR, focused on Intellectual Property Rights (IPR) with a special emphasis on patenting computer-related inventions. Conducted in collaboration with the NIPAM Indian Patent Office, the session provided insights into the patent filing process and its importance for innovation in the tech industry." },
    ];

export default function Gallery() {
    const onInit = () => {
      console.log("lightGallery has been initialized");
    };
  
    return (
      <>
        <Navbar />
        <div className="App py-2 container d-flex" style={{ padding: "" }}>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[
              lgThumbnail,
              lgZoom,
              lgAutoplay,
              lgFullscreen,
              lgRotate,
              lgShare,
            ]}
          >
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {images.map((image, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4" style={{ flex: '0 0 32%' }}>
                  <a href={image.src} data-src={image.src} data-lightbox="gallery">
                    <img alt={image.alt} src={image.src} className="gimage" />
                  </a>
                </div>
              ))}
            </div>
          </LightGallery>
        </div>
      </>
    );
}