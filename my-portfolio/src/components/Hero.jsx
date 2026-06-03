import React from 'react';
import './Hero.css';
// 1. Picture ko yahan import karein
import myPic from '../assets/qwerty.jpg'; 

function Hero() {
  return (
    // 2. Inline style mein picture apply karein
    <div className="hero-main" style={{ backgroundImage: `url(${myPic})` }}>
      <div className="hero-overlay">
        <p className="green-text">WE CREATE WEBSITES FOR YOU</p>
        <h1 className="big-title">WEB<br/>DESIGNER</h1>
        <p className="description">
          Frontend Developer | React & React Native Specialist. 
          Expert in building high-end user experiences.
        </p>
        <button className="contact-btn">Contact Us ➜</button>
      </div>
      
      <div className="stats-bar">
        <div className="stat-item"><span>90+</span><p>Award Win</p></div>
        <div className="stat-item"><span>3000+</span><p>Successful Projects</p></div>
        <div className="stat-item"><span>20+</span><p>Years Experience</p></div>
      </div>
    </div>
  );
}

export default Hero;