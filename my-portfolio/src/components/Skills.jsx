import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "React.js", level: "90%" },
        { name: "JavaScript (ES6+)", level: "85%" },
        { name: "Tailwind CSS", level: "80%" }
      ]
    },
    {
      title: "Mobile & Apps",
      skills: [
        { name: "React Native", level: "85%" },
        { name: "Mobile UI/UX", level: "75%" },
        { name: "App Lifecycle", level: "80%" }
      ]
    },
    {
      title: "Integrations & Tools",
      skills: [
        { name: "AI API Integration", level: "85%" },
        { name: "Git & GitHub", level: "90%" },
        { name: "Firebase/APIs", level: "75%" }
      ]
    }
  ];

  return (
    <div className="skills-section" id="skills">
      <div className="skills-header">
        <p className="skills-subtitle">My Tech Stack</p>
        <h2 className="skills-title">Technical <span>Superpowers</span></h2>
      </div>

      <div className="skills-container">
        {skillCategories.map((cat, idx) => (
          <div className="skill-category-card" key={idx}>
            <h3 className="cat-name">{cat.title}</h3>
            <div className="skills-list">
              {cat.skills.map((skill, sIdx) => (
                <div className="skill-item" key={sIdx}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;