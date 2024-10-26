import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Logo from "./Assets/Logo.png";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="container_Navbar">
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img src={Logo} className="logo" alt="Logo" />
        </a>
        <ul className="navbar-nav">
          <a className="align-items" style={{ color: 'beige' }} href="#">Home</a>
          <a className="align-items" style={{ color: 'beige' }} href="#">About</a>
          <a className="align-items" style={{ color: 'beige' }} href="#">Contact</a>
          <a className="align-items" style={{ color: 'beige' }} href="#">Services</a>
          <button
            className="Login_Landing"
            type="button"
            onClick={() => navigate('/LoginSignup')}
          >
            Login/Signup
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
