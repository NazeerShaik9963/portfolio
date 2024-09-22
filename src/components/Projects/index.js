import React from 'react';
import './index.css';

const projectData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects.',
    link: 'https://github.com/NazeerShaik9963',
  },
  {
    title: 'Tourism Website',
    description: 'A static tourism site using HTML, CSS, and Bootstrap.',
    link: 'https://github.com/NazeerShaik9963',
  },
  {
    title: 'FoodMunch Website',
    description: 'A responsive site for FoodMunch using HTML, CSS, and Bootstrap.',
    link: 'https://github.com/NazeerShaik9963',
  },
  {
    title: 'Todo List App',
    description: 'A simple Todo List app using HTML, CSS, and JavaScript.',
    link: 'https://github.com/NazeerShaik9963',
  },
  {
    title: 'Wikipedia Search App',
    description: 'A search app for Wikipedia using the Wikipedia API, built with HTML, CSS, and JavaScript.',
    link: 'https://github.com/NazeerShaik9963',
  },
  {
    title: 'React Website with Authentication',
    description: 'A React app with user registration, login, home, about, and contact pages.',
    link: 'https://github.com/NazeerShaik9963',
  },
  {
    title: 'Node.js Backend with Authentication',
    description: 'A backend with Node.js, Express.js, and SQL, including authentication APIs.',
    link: 'https://github.com/NazeerShaik9963',
  },
];

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="project-list">
      {projectData.map(({ title, description, link }) => (
        <div className="project" key={title}>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
