import React from 'react'
import './ProfileDetails.css'
import assets from '../../../assets/icons/icons';



export default function ProfileDetails(props) {
  const { media, Medialink ,postdate} = props;
  return (
    <>
      <div className="main-container-profile-details">
        <div className="feed-post-profile">
            <img className='post-profile-icon' src={media} alt="" />
          <h4>Buddhadeb Koner</h4>
          <a href={Medialink} className='see-original-post' target="_blank">See Original Post</a>
        </div>
        <div className="image-profile-threedot-container">
          <p>{postdate}</p>
          <button>
          <img src={assets.threeDot} className='post-profile-threedots' alt="" />
          </button>
        </div>
      </div>
    </>
  )
}
