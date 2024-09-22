import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/skills" Component={Skills} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
  );
}

export default App;
