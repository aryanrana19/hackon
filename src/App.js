// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DuelsPage from './components/DuelsPage';
import NftPage from './components/NftPage';
import './index.css'; // Adjust if necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/duels" element={<DuelsPage />} />
        <Route path="/nfts" element={<NftPage />} />
      </Routes>
    </Router>
  );
};

export default App;
