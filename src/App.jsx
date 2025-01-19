import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Reasearch from '../Research/Wrapper'
import Facility from '../CSE/Wrapper';
import Events from '../Events/Wrapper'
import Allresearch from '../Research/All_research';
import Gallery from '../Events/Gallery'
function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Reasearch/>} />
        <Route path="/facilities" element={<Facility />} />
        <Route path="/events" element={<Events />} />
        <Route path="/showAll" element={<Allresearch/>} />
        <Route path="/showevents" element={<Gallery/>} />
      </Routes>
    </Router>
    
  );
}

export default App;