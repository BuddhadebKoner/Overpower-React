import React from 'react'
import './Navbar.css'
import assets from '../../assets/icons/icons'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <Link to={""}>
          <img className='homelogo' src={assets.home} alt="logo" />
        </Link>
        <div className="nav-links">

          <NavLink
            to={"github"}
            className={({ isActive, isPending }) =>
              isActive ? "nav-links-active" : "nav-links-normal"
            }
          >
            GitHub
          </NavLink>

          <NavLink
            to={"newsfeed"}
            className={({ isActive, isPending }) =>
              isActive ? "nav-links-active" : "nav-links-normal"
            }
          >
            News
          </NavLink>

          <NavLink
            to={"login"}
            className={({ isActive, isPending }) =>
              isActive ? "nav-links-active" : "nav-links-normal"
            }
          >
            Login
          </NavLink>

          <NavLink to={"getstarted"} className='super'>Get Started</NavLink>

        </div>
      </div>
    </>
  )
}
