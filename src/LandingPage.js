import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Midsection from './components/Midsection';
import FooterSection from './components/Footer/Footer';
import LoginSignup from './components/LoginSignup/LoginSignup1';
import './App.css';

const Landingpage = () => {
    return (

        <div className="app-container">
            <Navbar />
            <Midsection />
            <FooterSection />
        </div>

    );
};

export default Landingpage;
