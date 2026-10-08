import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        <NavLink to="/" className="logo">
          <span className="logo-box">IP</span>

          <div>
            <h2>Interview Tracker</h2>
            <p>Practice. Track. Improve.</p>
          </div>
        </NavLink>

        <nav className="nav">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/dsa"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            DSA
          </NavLink>

          <NavLink
            to="/git"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Git & GitHub
          </NavLink>

          <NavLink
            to="/full-stack"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Full Stack
          </NavLink>

          <NavLink
            to="/machine-coding"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Machine Coding
          </NavLink>

        </nav>

      </div>
    </header>
  );
};

export default Header;