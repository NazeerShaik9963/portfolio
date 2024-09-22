import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Nazeer Shaik</div>
        <nav className={isMenuOpen ? 'nav open' : 'nav'}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/skills" onClick={toggleMenu}>Skills</Link>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? 'bar bar1 open' : 'bar bar1'}></div>
          <div className={isMenuOpen ? 'bar bar2 open' : 'bar bar2'}></div>
          <div className={isMenuOpen ? 'bar bar3 open' : 'bar bar3'}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
