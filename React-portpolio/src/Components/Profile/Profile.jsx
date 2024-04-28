import React, { useState } from 'react';
import './Profile.css';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import assets from '../../assets/icons/icons';
import { documentdata } from '../../assets/documentdata';
import { NavLink } from 'react-router-dom';
import Model from './ProfilePhoto/Model/Model';

export default function Profile() {
    const [showlinks, setShowLinks] = useState(false);
    const toggleLink = () => setShowLinks(!showlinks);

    const [showModal, setShowModal] = useState(false); // State for modal visibility
    const toggleModal = () => setShowModal(!showModal); // Function to toggle modal visibility

    const [showText, setShowText] = useState(false);
    const handleMouseEnter = () => setShowText(true);
    const handleMouseLeave = () => setShowText(false);

    return (
        <>
            <div className={`profile-container ${showModal ? 'blur-background' : ''}`}>
                <div className="profile-photo">
                    <ProfilePhoto />
                </div>
                <div className="follow-me">
                    <button className='super-follow-btn' onClick={toggleModal}>
                        <img src={assets.Donate} alt="" className='donate-icon' />
                        <h4 className='donate-text'>Donate</h4>
                    </button>

                    <div className="mail-btn-show-follow-container">
                        <div className="">
                            <button
                                className='follow-btn hover-btn'
                                onClick={toggleLink}
                            >
                                Follow
                            </button>
                        </div>

                        <div className="show-follow-container">
                            {showlinks && (
                                <div className="btn-boxs">
                                    <div className="media-icons-links">
                                        <a href={documentdata.fblink} target="_blank"><img src={assets.fb} alt="" /></a>
                                        <a href={documentdata.xlink} target="_blank"><img src={assets.x} alt="" /></a>
                                        <a href={documentdata.linkedinlink} target="_blank"><img src={assets.linkedin} alt="" /></a>
                                        <a href={documentdata.gitlink} target="_blank"><img src={assets.github} alt="" /></a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="main-btn-container">
                        <a className='mail-btn hover-btn' href="mailto:iambuddhadebkoner@gmail.com">
                            <img src={assets.mail} alt="" className='mail-icon' />
                        </a>
                    </div>

                    <div className="">
                        <NavLink
                            to={'/React-portpolio/aboutwebinfo'}
                            className='threedot-btn hover-btn'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={assets.threeDot} alt="" className='mail-icon' />
                        </NavLink>

                        <div className="show-threedot-container">
                            {showText && (
                                <div className="threedots-popup">
                                    <p>Create Your own<br />Website !</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <Model onClose={toggleModal} />} {/* Render the modal if showModal is true */}
        </>
    );
}
