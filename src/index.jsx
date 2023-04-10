import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Housing from './pages/Housing/Housing';
import About from './pages/About/About';
import Header from './components/Header/header';
import Error from './components/Error/error';
import Footer from './components/Footer/footer';

import './assets/minireset/minireset.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
