import React from 'react';
import profileImage from '../imagesorfiles/profile-jp.jpg';
import './index.css'
const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <img src={profileImage} alt="Nazeer Shaik" className="profile-image" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a dedicated and enthusiastic Full Stack Developer with a strong foundation in both front-end and back-end development.
            I have recently completed my B.Tech in Electronics and Communication Engineering (ECE), and I am eager to apply my skills in building intuitive and responsive web applications.
          </p>
          <h3>Education & Skills</h3>
          <p>
            During my academic journey, I have developed a deep understanding of core technologies like HTML, CSS, JavaScript, React, Node.js, and SQL.
            I am committed to continuous learning and staying updated with the latest trends in web development.
          </p>
          <h3>Work Philosophy</h3>
          <p>
            As a fresher, I believe in writing clean, maintainable code and working collaboratively to achieve shared goals.
            I am passionate about delivering applications that offer a smooth user experience and solve real-world problems.
          </p>
          <h3>Interests & Hobbies</h3>
          <p>
            Outside of coding, I enjoy contributing to open-source projects, playing chess, hiking, and exploring new technologies. 
            These activities help me stay curious and develop new skills that I can bring to my professional work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
