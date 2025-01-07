import React from 'react';
import Slider from '../Events/Slider';
import Top from '../Events/top';
import Highlight from '../Events/Highlight'
import PastEvents from './PastEvents';
import UpcomingEvents from './Upcoming';
import CardContainer from './Last';
import Navbar from '../CSE/AA';
import './All.css'

function Wrapper() {
    return ( 
        <div>
            <Navbar/>
            <Top/>
            <Slider/>
            <Highlight/>
            <PastEvents/>
            <UpcomingEvents/>
            <CardContainer/>
        </div>
     );
}

export default Wrapper;