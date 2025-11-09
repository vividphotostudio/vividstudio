import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Photography from './pages/Photography';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GalleryDetail from './pages/GalleryDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/photography-detail/:id" element={<GalleryDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}

        {/* Social Media Icons */}
        <div className="social-icons-fixed">
          <a
            href="tel:+919789911305"
            className="social-icon phone-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/phone.png" alt="Phone" />
          </a>
          <a
            href="https://www.instagram.com/vivid__foto__studio/"
            className="social-icon instagram-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/insta.webp" alt="Instagram" />
          </a>
          <a
            href="https://wa.me/919789911305?text=Hello%20VIVID%20Photo%20Studio"
            className="social-icon whatsapp-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/whatsapp.webp" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
