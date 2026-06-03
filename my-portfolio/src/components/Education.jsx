import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-section" id="education">
      <div className="education-header">
        <p className="edu-subtitle">My Academic Journey</p>
        <h2 className="edu-title">Education & <span>Learning</span></h2>
      </div>

      <div className="education-container">
        {/* University of Gujrat Card */}
        <div className="education-card premium-card">
          <div className="card-dot"></div>
          <div className="edu-year">2022 - 2026 (Expected)</div>
          <h3 className="edu-degree">BS in Computer Science</h3>
          <h4 className="edu-institute">University of Gujrat</h4>
          <p className="edu-details">
            Currently in my 8th semester, specializing in Frontend Development and AI. 
            Working on a high-impact Final Year Project **"Smart Visa"** – an AI-integrated 
            platform for immigration streamlining.
          </p>
          <div className="edu-tags">
            <span>Core: DSA & OOP</span>
            <span>Focus: React & AI</span>
          </div>
        </div>

        {/* Punjab Group of Colleges Card */}
        <div className="education-card">
          <div className="card-dot"></div>
          <div className="edu-year">2020 - 2022</div>
          <h3 className="edu-degree">Intermediate in Computer Science (ICS)</h3>
          <h4 className="edu-institute">Punjab Group of Colleges, Gujrat</h4>
          <p className="edu-details">
            Developed a strong foundation in programming logic and computer architecture. 
            Was actively involved in tech-related college activities and coding basics.
          </p>
          <div className="edu-tags">
            <span>Logical Thinking</span>
            <span>Programming Basics</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;