import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from '../context/ThemeContext';



// add <button onClick={toggle}>{theme === 'light' ? '🌙' : '☀️'}</button>


function Navbar() {
    const { theme, toggle } = useTheme();
  return (
    <nav className="navbar">
      <h1 className="logo">MyPortfolio</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
