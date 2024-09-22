import React from 'react';
import './index.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-background">
        <div className="home-content">
          <h1 className="home-title">Hello, I'm <span className="name">Nazeer Shaik</span></h1>
          <p className="home-intro">A Passionate Full Stack Developer</p>
          <p className="home-description">
            I specialize in creating modern, responsive web applications with a focus on clean design and user experience.
            Explore my portfolio to see my skills and projects.
          </p>
          <a href="contact" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </section>
    
  );
};

export default Home;
