// import React from 'react';
// import './AA.css'
// import './All.css'

// function CSE_DEPT() {
//     return ( 
//         <div>
//            <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="#"><img src={'public/Logo.png'} alt="" style={{width:"170px",height:"60px"}} className='ms-3'/></Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
//                 <ul className="navbar-nav">
//                     <li className="nav-item ms-5 me-3 mt-2">
//                     <Link className="nav-link active" aria-current="page" to="#" style={{fontFamily: 'DM Serif Display'}}>Home</Link>
//                     </li>
//                     <li className="nav-item ms-5 me-3 mt-2">
//                     <Link className="nav-link" to="#" style={{fontFamily: 'DM Serif Display'}}>Faculty</Link>
//                     </li>
//                     <li className="nav-item ms-5 me-3 mt-2">
//                     <Link className="nav-link" to="#" style={{fontFamily: 'DM Serif Display'}}>Facilities</Link>
//                     </li>
//                     <li className="nav-item ms-5 me-3 mt-2">
//                     <Link className="nav-link" to="#" style={{fontFamily: 'DM Serif Display'}}>Appericiations</Link>
//                     </li>
//                     <li className="nav-item ms-5  mt-2">
//                     <Link className="nav-link" to="#" style={{fontFamily: 'DM Serif Display'}}>Alumini</Link>
//                     </li>
                    

//                     <li className="nav-item " style={{marginLeft:"230px"}}>
//                     <Link className="nav-link" to="#">
//                         <button className="button" style={{fontFamily: 'DM Serif Display'}}>
//                         Apply Now
//                         <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
//                             <path
//                             fill-rule="evenodd"
//                             d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
//                             clip-rule="evenodd"
//                             ></path>
//                         </svg>
//                         </button>

//                     </Link>
//                     </li>

//                 </ul>
//                 </div>
//             </div>
//             </nav>
//         </div>
//      );
// }
// export default CSE_DEPT;
import React, { useState } from 'react';
import './AA.css'
import './All.css'
import { Link } from 'react-router-dom';

function CSE_DEPT() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    // Handle navbar toggling (open/close)
    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    // Handle closing the navbar when a link is clicked
    const handleLinkClick = () => {
        setIsNavbarOpen(false);
    };

    return ( 
        <div>
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#"><img src={'https://vignanbuckets.s3.us-east-1.amazonaws.com/public/Logo.png'} alt="" style={{width:"170px",height:"60px"}} className='ms-3'/></Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={handleNavbarToggle}  // Toggle navbar state
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavDropdown" 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded={isNavbarOpen ? "true" : "false"} 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item" style={{marginLeft:'13rem',marginRight:'3rem',marginTop:'0.5rem'}}>
                            <Link className="nav-link active" aria-current="page" to="https://dashing-kelpie-a20323.netlify.app/" style={{fontFamily: 'DM Serif Display'}} onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li className="nav-item" style={{marginTop:'0.5rem'}}>
                            <Link className="nav-link" to="/facilities" style={{fontFamily: 'DM Serif Display'}} onClick={handleLinkClick}>Facilities</Link>
                        </li>
                        <li className="nav-item ms-5 me-3 mt-2">
                            <Link className="nav-link" to="/" style={{fontFamily: 'DM Serif Display'}} onClick={handleLinkClick}>Research</Link>
                        </li>
                        <li className="nav-item ms-5 me-3 mt-2">
                            <Link className="nav-link" to="/events" style={{fontFamily: 'DM Serif Display'}} onClick={handleLinkClick}>Events</Link>
                        </li>
                        <li className="nav-item ms-5  mt-2">
                            <Link className="nav-link" to="https://preeminent-narwhal-d732a5.netlify.app/" style={{fontFamily: 'DM Serif Display'}} onClick={handleLinkClick}>Alumini</Link>
                        </li>

                        <li className="nav-item " style={{marginLeft:"230px"}}>
                            <Link className="nav-link" to="#" onClick={handleLinkClick}>
                                <button className="button" style={{fontFamily: 'DM Serif Display'}}>
                                    Apply Now
                                    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                        fillRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                        clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
     );
}
export default CSE_DEPT;