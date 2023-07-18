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
      <Route path='/keysv2/' element={<PageReveal />} />
      <Route path='/keysv2/home' element={<Home />} />
      <Route path='/keysv2/education' element={<Education />} />
      <Route path='/keysv2/high-level-conversations' element={<HighLevelConversation />} />
      <Route path='/keysv2/expertise' element={<Expertise />} />
      <Route path='/keysv2/booking' element={<Booking />} />
    </Routes>
  );
}

export default App