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
                    `${isActive ? "active-link" : ""}`
                }
            >
                Make Card
            </NavLink>

            <NavLink
                to="/about"
                className={({ isActive }) =>
                    `${isActive ? "active-link" : ""}`
                }
            >
                About
            </NavLink>

            <NavLink
                to="/contribute"
                className={({ isActive }) =>
                    `${isActive ? "active-link" : ""}`
                }
            >
                Contribute
            </NavLink>
        </div>
    );
}
