import React from 'react';
import resumeData from '../../assets/Resume';

// Styles are here 
import '../../Styles/Resume.css'

export default function Resume() {
    return (
        <>
            <div className="resume-main-container">


                <div className="resume-container">
                    <div className="header-section">
                        <h1 className="name">{resumeData.resumeData.name}</h1>
                        <p className="job-title">{resumeData.resumeData.jobTitle}</p>
                    </div>
                    <div className="education-section">
                        <h2 className="section-title">Education</h2>
                        <ul className="education-list">
                            <li className="education-item">{resumeData.resumeData.education.degree}</li>
                            <li className="education-item">{resumeData.resumeData.education.university}, {resumeData.resumeData.education.duration}</li>
                        </ul>
                    </div>
                    <div className="experience-section">
                        <h2 className="section-title">Experience</h2>
                        <ul className="experience-list">
                            <li className="experience-item">{resumeData.resumeData.experience.position}</li>
                            <li className="experience-item">{resumeData.resumeData.experience.company}, {resumeData.resumeData.experience.duration}</li>
                            <li className="responsibilities-title">Responsibilities:</li>
                            <ul className="responsibilities-list">
                                {resumeData.resumeData.experience.responsibilities.map((responsibility, index) => (
                                    <li className="responsibility-item" key={index}>{responsibility}</li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                    <div className="skills-section">
                        <h2 className="section-title">Skills</h2>
                        <ul className="skills-list">
                            {resumeData.resumeData.skills.map((skill, index) => (
                                <li className="skill-item" key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="contact-section">
                        <h2 className="section-title">Contact</h2>
                        <ul className="contact-list">
                            <li className="contact-item">Email: {resumeData.resumeData.contact.email}</li>
                            <li className="contact-item">
                                Linkedin:
                                <a href={resumeData.resumeData.contact.linkedin} target='blank'>Buddhadeb Koner</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
