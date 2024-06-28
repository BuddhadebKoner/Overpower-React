import React from 'react';
import currentpagecontent from '../../assets/documentdata.js';
import '../../Styles/Currentproject.css';

const Currentproject = () => {
  const { welcomeMessage, introduction, projects } = currentpagecontent;

  return (
    <div className="current-project-box">
      <div className="current-project-container">
        <h2>{welcomeMessage}</h2>
        <p>{introduction}</p>
        
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.technologiesUsed}</p>
            <a href={project.projectLink} target='_blank'>See Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Currentproject;
