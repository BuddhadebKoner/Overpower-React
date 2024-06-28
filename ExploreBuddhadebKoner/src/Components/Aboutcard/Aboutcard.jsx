import React, { useState } from 'react';
import '../../Styles/Aboutcard.css';
import assets from '../../assets/icons/icons';
import { AboutKeywords, documentdata } from '../../assets/documentdata';

export default function AboutCard() {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="about-container-fullbox">

        <div className={`about-card ${expanded ? 'expanded' : ''}`}>
          <h3 className='about-heading'>
            About
          </h3>
          <p className={`description ${expanded ? 'expanded' : ''}`}>
            {documentdata.about}
          </p>
          <button onClick={toggleDescription}>
            {expanded ? 'See Less' : 'See More'}
          </button>
          <div className="about-media-links">
            <a href={documentdata.gitlink} target="_blank"> <img src={assets.link} className='link-icons' alt="" />git Hub</a>
            <div className="media-icons-links">
              <a href={documentdata.fblink} target="_blank"><img src={assets.fb} alt="" /></a>
              <a href={documentdata.xlink} target="_blank"><img src={assets.x} alt="" /></a>
              <a href={documentdata.linkedinlink} target="_blank"><img src={assets.linkedin} alt="" /></a>
              <a href={documentdata.gitlink} target="_blank"><img src={assets.github} alt="" /></a>
            </div>
            <div className="about-tags">
              {Object.keys(AboutKeywords).map((key, index) => (
                <p key={index}>{AboutKeywords[key]}</p>
              ))}
            </div>

          </div>

        </div>
      </div>

    </>
  )
}
