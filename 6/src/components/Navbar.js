import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
      React App
    </div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink
          className="nav-link" 
          to="/"
          exact
        >
          Home
        </NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink
          className="nav-link" 
          to="/employees"
        >
          Employees
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;