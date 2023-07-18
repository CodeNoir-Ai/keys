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
      <Route path='/' element={<PageReveal />} />
      <Route path='/home' element={<Home />} />
      <Route path='/education' element={<Education />} />
      <Route path='/high-level-conversations' element={<HighLevelConversation />} />
      <Route path='/expertise' element={<Expertise />} />
      <Route path='/booking' element={<Booking />} />
    </Routes>
  );
}

export default App