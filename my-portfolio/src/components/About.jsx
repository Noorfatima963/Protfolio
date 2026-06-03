import React from 'react';
import './About.css';
import myProfilePic from '../assets/qwerty.jpg'; // Apni picture ka sahi path aur naam yahan likhein

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        {/* Left Side: Text Details */}
        <div className="about-content">
          <p className="section-subtitle">About Me</p>
          <h2 className="section-title">Are you looking for a creative developer? Let me help you!</h2>
          <p className="section-description">
            I am Noor, a specialized Frontend Developer focused on creating modern, high-end user experiences. Currently completing my BS in Computer Science, I bridge the gap between complex software requirements and intuitive design.
          </p>
          
          {/* Expertise Checkmarks */}
          <div className="expertise-grid">
            <div className="expertise-item"><span className="checkmark">✔</span> Full-Stack Development Enthusist</div>
            <div className="expertise-item"><span className="checkmark">✔</span> Core Concept Proficiency (DSA, OOP)</div>
            <div className="expertise-item"><span className="checkmark">✔</span> React & React Native Specialist</div>
            <div className="expertise-item"><span className="checkmark">✔</span> AI Integrations Enthusiast</div>
          </div>
          
          <button className="more-about-btn">More About Me ➜</button>
        </div>

        {/* Right Side: Picture in unique shape frame */}
        <div className="about-image-area">
          <div className="experience-badge">
            <span className="exp-number">1+</span>
            <p>Year Of <br/>Experience</p>
          </div>
          <div className="unique-frame">
            <img src={myProfilePic} alt="Noor" className="about-profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;