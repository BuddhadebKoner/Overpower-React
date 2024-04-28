import React from 'react'
import './Hero.css'
import Profile from '../Profile/Profile'
import Feednavbar from '../Feednavbar/Feednavbar'
import assets from '../../assets/icons/icons'

export default function Hero() {
    return (
        <>
            <div className="hero-container">
                <div className="hero-container-bg">
                    <img src={assets.heroBanner} alt="" />
                </div>
                <div className="profile-feednav">
                    <Profile />
                    <Feednavbar />
                </div>
            </div>
        </>
    )
}
