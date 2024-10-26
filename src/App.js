import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup1';
import Landingpage from './LandingPage';
import './App.css';
import Dashboard from './components/Dashboard/dashboard';

const App = () => {
  return (

    <div className="app-container">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>

  );
};

export default App;
