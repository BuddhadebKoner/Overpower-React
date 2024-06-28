import React, { useState } from 'react';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import assets from '../../assets/icons/icons';
import { documentdata } from '../../assets/documentdata';
import { NavLink } from 'react-router-dom';
import Model from './ProfilePhoto/Model/Model';
import { Dropdown } from "flowbite-react";

// styles are here 
import '../../Styles/Profile.css';

export default function Profile() {

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

               <div className="Dropdown-Container">
                  <Dropdown className='follow-me-btn' label="Follow me" dismissOnClick={false}>
                     <a href={documentdata.fblink} target='_blank'>
                        <Dropdown.Item
                           className='dropdown-items'>
                           Facebook
                        </Dropdown.Item>
                     </a>
                     <a href={documentdata.xlink} target='_blank'>
                        <Dropdown.Item
                           className='dropdown-items'>
                           X
                        </Dropdown.Item>
                     </a>
                     <a href={documentdata.linkedinlink} target='_blank'>
                        <Dropdown.Item
                           className='dropdown-items'>
                           Linkedin
                        </Dropdown.Item>
                     </a>
                     <a href={documentdata.gitlink} target='_blank'>
                        <Dropdown.Item
                           className='dropdown-items'>
                           Github
                        </Dropdown.Item>
                     </a>
                  </Dropdown>
               </div>

               <div className="main-btn-container">
                  <a className='mail-btn hover-btn' href="mailto:iambuddhadebkoner@gmail.com">
                     <img src={assets.mail} alt="" className='mail-icon' />
                  </a>
               </div>

               <div className="">
                  <NavLink
                     to={'/aboutwebinfo'}
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
         {showModal && <Model onClose={toggleModal} />}
      </>
   );
}
