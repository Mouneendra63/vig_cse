
// import React from 'react';
// import './All.css'

// function About() {
//     return ( 
//         <div style={{backgroundColor:'white',height:'400px'}}>
//             <div className='container' style={{backgroundColor:'white',maxWidth:'1300px'}}>
//             <div className="row">
//             <div className="RandI mb-4">
//                 <h1 style={{fontFamily: 'DM Serif Display'}}>
//                     About <span style={{fontFamily: "DM Serif Display"}}>Us</span>
//                 </h1>
//             </div>
//                 <div className="col">
//                     <p className='fs-5'>
//                     The department has a dynamic team of experienced and young faculty members, a
// significant number of them with industry exposure.
// <ul>
    
// </ul>
// • The industry relevant curriculum enhances students’ capabilities to solve complex and
// challenging problems in the field of Computer Science and Engineering
// • Options available for Add on Certifications such as Research Honours / Honours /
// Minors / Add-on Diploma / Add-on Certifications
// • Minors in AI & ML, Data Science, Cyber Security, Internet of Things, Drones, Robotics
// and Automation, Civil Services, Foreign Languages, Precision Agriculture, etc.
// • Modular courses on the latest technologies offered by industry experts.
// • Opportunity for a six-month internship in tier-1 companies such as Amazon, TCS, Accenture,
// CISCO, Lowe’s, Accolite, IBM, Tech Mahindra, HCL, Cap Gemini, NIC, Tacky Root, etc.
// • Support for students in participating in global code challenges such as CodeChef,
// Hacker Rank, and Codevita of TCS. Some of the students secure placements through
// Codevita with an attractive salary package
// • Hands-on exposure in research works of the department, where sponsored / consultancy
// projects worth Rs.120 lakhs are ongoing and in different phases of execution
// • Department imparts necessary technical knowledge through Workshops, Guest
// Lectures and Seminars to make students industry-ready.
//                     </p>
//                 </div>
//             </div>
//         </div>
//         </div>
//      );
// }

// export default About;

// import React from 'react';
// import './All.css'

// function About() {
//     return ( 
//         <div style={{ backgroundColor: 'white', height: '400px',marginBottom:'300px' }} className='ms-5'>
//             <div className='container' style={{ backgroundColor: 'white', maxWidth: '1300px' }}>
//                 <div className="row">
//                     <div className="RandI mb-4">
//                         <h1 style={{ fontFamily: 'DM Serif Display' }}>
//                             About <span style={{ fontFamily: "DM Serif Display" }}>Us</span>
//                         </h1>
//                     </div>
//                     <div className="col">
//                         <p className='fs-3' style={{ fontFamily: "DM Serif Display" }}>
//                             The department has a dynamic team of experienced and young faculty members, a
//                             significant number of them with industry exposure.
//                         </p>
//                         <ul className='fs-7 list-group list-group-vertical'>
//                             <li className='list-group-item mb-3'>The industry-relevant curriculum enhances students’ capabilities to solve complex and challenging problems in the field of Computer Science and Engineering.</li>
//                             <li className='list-group-item mb-3'>Options available for Add-on Certifications such as Research Honours / Honours / Minors / Add-on Diploma / Add-on Certifications.</li>
//                             <li className='list-group-item mb-3'>Minors in AI & ML, Data Science, Cyber Security, Internet of Things, Drones, Robotics and Automation, Civil Services, Foreign Languages, Precision Agriculture, etc.</li>
//                             <li className='list-group-item mb-3'>Modular courses on the latest technologies offered by industry experts.</li>
//                             <li className='list-group-item mb-3'>Opportunity for a six-month internship in tier-1 companies such as Amazon, TCS, Accenture, CISCO, Lowe’s, Accolite, IBM, Tech Mahindra, HCL, Cap Gemini, NIC, Tacky Root, etc.</li>
//                             <li className='list-group-item mb-3'>Support for students in participating in global code challenges such as CodeChef, Hacker Rank, and Codevita of TCS. Some of the students secure placements through Codevita with an attractive salary package.</li>
//                             <li className='list-group-item mb-3'>Hands-on exposure in research works of the department, where sponsored/consultancy projects worth Rs.120 lakhs are ongoing and in different phases of execution.</li>
//                             <li className='list-group-item mb-3'>Department imparts necessary technical knowledge through Workshops, Guest Lectures, and Seminars to make students industry-ready.</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;

import React from 'react';

function About() {
    return ( 
        <div style={{ backgroundColor: 'white', height: '400px', marginBottom: '350px' }} className='ms-5'>
            <div className='container' style={{ backgroundColor: 'white', maxWidth: '1300px' }}>
                <div className="row">
                    <div className="RandI mb-4">
                        <h1 style={{ fontFamily: 'DM Serif Display' }}>
                            About <span style={{ fontFamily: "DM Serif Display" }}>Us</span>
                        </h1>
                    </div>
                    <div className="col justify-content-center">
                        <p className='fs-3' style={{ fontFamily: "DM Serif Display" ,textAlign:'justify'}}>
                            The department has a dynamic team of experienced and young faculty members, a
                            significant number of them with industry exposure.
                        </p>
                        <ol 
                            style={{
                                listStyleType: 'square',
                                paddingLeft: '20px',
                                color: 'black',
                                fontFamily:'Familjen Grotesk',
                                textAlign:'justify'
                            }}
                            className='fs-6 list-group list-group-number'
                        >
                            <li style={{ padding: '5px 0', color: 'black' }} className='list-group-item mb-3'>
                                The industry-relevant curriculum enhances students’ capabilities to solve complex and challenging problems in the field of Computer Science and Engineering.
                            </li>
                            <li style={{ padding: '5px 0', color: 'black' }} className='list-group-item mb-3'>
                                Options available for Add-on Certifications such as Research Honours / Honours / Minors / Add-on Diploma / Add-on Certifications.
                            </li>
                            <li style={{ padding: '5px 0', color: 'black' }} className='list-group-item mb-3'>
                                Minors in AI & ML, Data Science, Cyber Security, Internet of Things, Drones, Robotics and Automation, Civil Services, Foreign Languages, Precision Agriculture, etc.
                            </li>
                            <li style={{ padding: '5px 0', color: 'black' }} className='list-group-item mb-3'>
                                Modular courses on the latest technologies offered by industry experts.
                            </li>
                            <li style={{ padding: '5px 0', color: 'black' }} className='list-group-item mb-3'>
                                Opportunity for a six-month internship in tier-1 companies such as Amazon, TCS, Accenture, CISCO, Lowe’s, Accolite, IBM, Tech Mahindra, HCL, Cap Gemini, NIC, Tacky Root, etc.
                            </li>
                            <li style={{ padding: '5px 0', color: 'black' }} className='list-group-item mb-3'>
                                Support for students in participating in global code challenges such as CodeChef, Hacker Rank, and Codevita of TCS. Some of the students secure placements through Codevita with an attractive salary package.
                            </li>
                            <li style={{ padding: '5px 0', color: 'black' }} className='list-group-item mb-3'>
                                Hands-on exposure in research works of the department, where sponsored/consultancy projects worth Rs.120 lakhs are ongoing and in different phases of execution.
                            </li>
                            <li style={{ padding: '5px 0', color: 'black' }} className='list-group-item mb-3'>
                                Department imparts necessary technical knowledge through Workshops, Guest Lectures, and Seminars to make students industry-ready.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;