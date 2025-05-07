import { useState } from 'react';
import './index.css';
import Hero from './components/Hero';
import Service from './components/Service';
import Slider from './components/Slider';
import AimlPage from './components/courses/aimlcrs.jsx';
import WebdevPage from './components/courses/Webdevcrs.jsx';
import DatascPage from './components/courses/Datasccrs.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <main className='overflow-x-hidden bg-white text-[#333333]'>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Service />
                {/* Add <Slider /> here if needed */}
              </>
            }
          />
          {/* Adjusted lowercase route for /service */}
          <Route path='/service' element={<Service />} />  
          
          {/* Ensure these routes match navbar links */}
          <Route path='/aimlPage' element={<AimlPage />} />
          <Route path='/webdevPage' element={<WebdevPage />} />
          <Route path='/datascPage' element={<DatascPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
