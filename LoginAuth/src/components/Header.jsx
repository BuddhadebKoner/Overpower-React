import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Header = () => {
    const navigate = useNavigate()
    const {user, logoutUser} = useAuth()

    const logoutClick = () => {
        navigate('/login')
    }

  return (
    <div className="header">
        <div className='header-logo-container' >
            <Link id="header-logo" to="/">Lets Login</Link>
        </div>

        <div className="links--wrapper">
            {user ? (
            <>
                <Link to="/" className="header--link btn">Home</Link>
                <Link to="/profile" className="header--link btn">Devaloper</Link>

                <button onClick={logoutUser} className="btn">Logout</button>
            </>
            ):(
 
                <Link className="btn" to="/login">Login</Link>
            )}
            
        </div>
    </div>
  )
}

export default Header
