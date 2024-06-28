import React from 'react'
import assets from '../../assets/icons/icons'
import { Link, NavLink, useLocation } from 'react-router-dom'
// styles are here
import '../../Styles/Navbar.css'
import { Helmet } from 'react-helmet'

export default function Navbar() {
  const location = useLocation();

  // Mapping routes to titles
  const routeTitles = {
    "/": "Buddhadebs Home",
    "/github": "Buddhadebs GitHub",
    "/newsfeed": "Buddhadebs NewsFeed",
    "/login": "Buddhadebs Login",
    "/getstarted": "Buddhadebs EXplore"
  };

  // Get the current title based on the current path
  const currentTitle = routeTitles[location.pathname] || "Buddhadebs Home";

  return (
    <>
      <Helmet>
        <title>{currentTitle}</title>
      </Helmet>
      <div className="navbar-container">
        <Link to="/">
          <img className='homelogo' src={assets.home} alt="logo" />
        </Link>
        <div className="nav-links">
          <NavLink
            to="/github"
            className={({ isActive }) =>
              isActive ? "nav-links-active" : "nav-links-normal"
            }
          >
            GitHub
          </NavLink>

          <NavLink
            to="/newsfeed"
            className={({ isActive }) =>
              isActive ? "nav-links-active" : "nav-links-normal"
            }
          >
            News
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "nav-links-active" : "nav-links-normal"
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/getstarted"
            className='super'
          >
            Get Started
          </NavLink>
        </div>
      </div >
    </>
  )
}
