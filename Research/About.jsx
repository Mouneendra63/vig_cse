
import React from 'react';
import './All.css'

function About() {
    return ( 
        <div style={{backgroundColor:'white',height:'400px'}}>
            <div className='container' style={{backgroundColor:'white',maxWidth:'1300px'}}>
            <div className="row">
            <div className="RandI mb-4">
                <h1 style={{fontFamily: 'DM Serif Display'}}>
                    About <span style={{fontFamily: "DM Serif Display"}}>Us</span>
                </h1>
            </div>
                <div className="col">
                    <p className='fs-5'>
                    Vignan University, officially Vignan’s Foundation for Science, Technology, and Research (VFSTR), is a deemed university located in Guntur, Andhra Pradesh, established in 2008. It offers various undergraduate, postgraduate, and doctoral programs in engineering, science, management, and humanities. Known for its quality education, the university has A+ NAAC and NBA accreditations. Vignan ranks 72nd in the NIRF engineering category and has five ABET-accredited programs. The university emphasizes practical learning through internships and projects while fostering a vibrant campus life.
                    </p>
                </div>
            </div>
        </div>
        </div>
     );
}

export default About;