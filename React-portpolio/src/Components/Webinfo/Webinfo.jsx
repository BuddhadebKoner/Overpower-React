import React from 'react';
import './Webinfo.css';

export default function Webinfo() {
  return (
    <div className="webinfo-container">
      <div className="webinfo-content">
        <h1 className="webinfo-title">React Portfolio Website</h1>
        <p className="webinfo-description">Welcome to my React portfolio website! This repository contains the code for my personal portfolio website built using React and Vite.</p>
        <p className="webinfo-link">You can view the live website <a href="https://buddhadebkoner.github.io/React-portpolio/">here</a>.</p>
        <div className="webinfo-section">
          <h2 className="webinfo-section-title">Installation</h2>
          <p className="webinfo-section-description">To run this project locally, follow these steps:</p>
          <ol className="webinfo-list">
            <li className="webinfo-list-item">Clone the repository to your local machine:</li>
          </ol>
          <pre className="webinfo-code"><code>git clone https://github.com/buddhadebkoner/React-portpolio.git</code></pre>
        </div>
        <div className="webinfo-section">
          <h2 className="webinfo-section-title">Navigate to the project directory</h2>
          <pre className="webinfo-code"><code>cd React-portpolio</code></pre>
        </div>
        <div className="webinfo-section">
          <h2 className="webinfo-section-title">Install dependencies using npm</h2>
          <pre className="webinfo-code"><code>npm install react react-dom react-router-dom</code></pre>
          <pre className="webinfo-code"><code>npm install --save-dev vite @vitejs/plugin-react</code></pre>
        </div>
        <div className="webinfo-section">
          <h2 className="webinfo-section-title">Usage</h2>
          <p className="webinfo-section-description">Once you've installed the dependencies, you can start the development server by running:</p>
          <pre className="webinfo-code"><code>npm run dev</code></pre>
          <p className="webinfo-section-description">This command will start the development server and open the website in your default web browser. You can then make changes to the code and see the results in real-time.</p>
        </div>
        <div className="webinfo-section">
          <h2 className="webinfo-section-title">Build</h2>
          <p className="webinfo-section-description">To build the project for production, run:</p>
          <pre className="webinfo-code"><code>npm run build</code></pre>
          <p className="webinfo-section-description">This command will create an optimized build of the website in the dist directory.</p>
        </div>
        <div className="webinfo-section">
          <h2 className="webinfo-section-title">Contributing</h2>
          <p className="webinfo-section-description">Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.</p>
        </div>
      </div>
    </div>
  );
}
