import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-box">N</div>
        <div className="logo-text">
          <span className="name">NOOR</span>
          <span className="role">FRONTEND DEVELOPER</span>
        </div>
      </div>

      <ul className="navbar-links">
        <li><a href="#home" className="nav-item">Home</a></li>
        <li><a href="#about" className="nav-item">About</a></li>
        <li><a href="#expertise" className="nav-item">Expertise</a></li>
        <li><a href="#projects" className="nav-item">Projects</a></li>
        <li><a href="#contact" className="nav-item">Contact</a></li>
      </ul>

      <div className="navbar-right">
        <button className="cv-button">
          Download CV <span className="arrow">↗</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;