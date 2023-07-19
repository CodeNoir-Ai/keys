import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageReveal from './pages/PageReveal';
import Expertise from './pages/Expertise';
import Booking from './pages/Booking';
import Education from './pages/Education';
import HighLevelConversation from './pages/HighLevelConversation';


const App = () => {
  return (
    <Routes>
      <Route path='/keys/' element={<PageReveal />} />
      <Route path='/keys/home' element={<Home />} />
      <Route path='/keys/education' element={<Education />} />
      <Route path='/keys/high-level-conversations' element={<HighLevelConversation />} />
      <Route path='/keys/expertise' element={<Expertise />} />
      <Route path='/keys/booking' element={<Booking />} />
    </Routes>
  );
}

export default App