import React from 'react';
import './index.css'; // or wherever your CSS file is
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import User from './components/User';
import Github from './components/Github';
export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userid" element={<User />} />
        <Route path="/github" element={<Github />} />
        {/* Add more routes if you have other pages */}
      </Routes>
      <Footer />
    </Router>
  );
}