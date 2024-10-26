import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "./Assets/Logo.png";
import "../App.css";

const Navbardashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="container_Navbar">
            <nav className="navbar">
                <a className="navbar-brand" href="/">
                    <img src={Logo} className="logo" alt="Logo" />
                </a>
                <ul className="navbar-nav">
                    <a className="align-items" style={{ color: 'beige' }} href="/">Home</a>
                    <a className="align-items" style={{ color: 'beige' }} href="#">About</a>
                    <a className="align-items" style={{ color: 'beige' }} href="#">Contact</a>
                    <a className="align-items" style={{ color: 'beige' }} href="#">Services</a>

                    <button
                        className="Login_Landing"
                        type="button"
                        onClick={() => navigate('/LoginSignup')}
                    >
                        Logout
                    </button>
                </ul>
            </nav>
        </div>
    );
}

export default Navbardashboard;
