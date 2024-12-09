import {React,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Service from './components/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/assets/main.css';
import { initializeCustomScripts } from './components/assets/main.js';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    const cleanup = initializeCustomScripts();
    return cleanup;
  }, []);

  useEffect(() => {
   
    AOS.init({
      duration: 1200, 
      once: true,     
    });

    return () => {
      AOS.refresh(); 
    };
  }, []);  useEffect(() => {
   
    AOS.init({
      duration: 600,     
      easing: 'ease-in-out', 
      once: true,       
      mirror: false,     
    });

 
    return () => {
      AOS.refresh(); 
    };
  }, []); 
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <BrowserRouter basename="/desn3035-a3">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
