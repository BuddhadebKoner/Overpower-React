import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="nav-container">
            <NavLink
                exact
                to="/"
                className={({ isActive }) =>
                    `${isActive ? "active-link navLinks" : "navLinks"}`
                }
            >
                Make Card
            </NavLink>

            <NavLink
                to="/about"
                className={({ isActive }) =>
                    `${isActive ? "active-link navLinks" : "navLinks"}`
                }
            >
                About
            </NavLink>

            <NavLink
                to="/contribute"
                className={({ isActive }) =>
                    `${isActive ? "active-link navLinks" : "navLinks"}`
                }
            >
                Contribute
            </NavLink>
        </div>
    );
}
