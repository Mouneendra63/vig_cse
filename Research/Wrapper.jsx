import React from 'react';
import Navbar from '../CSE/AA'
import Slider from './Slider';
import Innvotion from './Innovation';
import Projects from './Projects';
import Faculty from './Faculty';
import Facility from './Facilities';
import Appreciation from './Appearciation';
import Feedback from './Feedback';
import Faqs from './Faqs';
import About from './About';
import Indexes from './Indexes';
import CitationsWrappers from './Wrappering'
import Completed from './Completed';
import Students from './Student';

function Wrapper() {
    return ( 
        <div>
            <Navbar/>
            <Slider/>
            <About/>
            <Innvotion/>
            <Projects/>
            <Indexes/>
            <Completed/>
            <CitationsWrappers/>
            <Faculty/>
            <Facility/>
            <Students/>
            <Appreciation/>
            <Feedback/>
            <Faqs/>
        </div>
     );
}

export default Wrapper;