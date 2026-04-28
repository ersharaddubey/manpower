import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import AboutUs from './pages/AboutUs';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Electronics from './pages/Electronics';
import Electrical from './pages/Electrical';
import Chemical from './pages/Chemical';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/industries" element={<Industries />} />
       <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/chemical" element={<Chemical />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
