import React from 'react';
import './Projects.css';
// Agar aapke paas screenshot hai toh yahan import karein, warna placeholder chalay ga
// import smartVisaImg from '../assets/smartvisa.png';

function Projects() {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-header">
        <p className="proj-subtitle">My Creative Work</p>
        <h2 className="proj-title">Featured <span>Projects</span></h2>
      </div>

      <div className="projects-container">
        {/* Smart Visa Project Card */}
        <div className="project-card-premium">
          <div className="project-image-box">
             {/* Jab aap screenshot lagayengi toh yahan img tag aayega */}
             <div className="image-overlay">
                <span>View Case Study</span>
             </div>
             <p className="placeholder-text">Smart Visa Dashboard Preview</p>
          </div>

          <div className="project-info-box">
            <h3 className="p-title">Smart Visa Platform</h3>
            <div className="p-tags">
              <span>React.js</span>
              <span>React Native</span>
              <span>AI Integration</span>
              <span>Django</span>
            </div>
            <p className="p-desc">
              An integrated web and mobile ecosystem designed to automate and streamline the immigration process. 
              Featuring AI-driven document verification and real-time application tracking.
            </p>
            <div className="p-buttons">
              <a href="#" className="p-link">Live Demo</a>
              <a href="#" className="p-link secondary">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;