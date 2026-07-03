import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingElements from './components/home/FloatingElements';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
        <Footer />
        <FloatingElements />
      </BrowserRouter>
    </div>
  );
}

export default App;
