import React from 'react';
import './index.css'; // Ensure you import the CSS file

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        <div className="skill">
          <h3>Front-End</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill">
          <h3>Back-End</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="skill">
          <h3>Tools</h3>
          <ul>
            <li>Git/GitHub</li>
            <li>Webpack</li>
            <li>npm/yarn</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
