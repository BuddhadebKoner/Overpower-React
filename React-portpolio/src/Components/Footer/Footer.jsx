import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            31st march 2024 <br/> this is the first project of my road to lerning my react js<br/> to build my own portpolio, creadit to some youtube chanals 
            <br/>
            <div className="creadit-links">
            1. <a href="https://www.youtube.com/@KG_Coding" target='blank'>Prasant Sir</a> &nbsp;
            2. <a href="https://www.youtube.com/@ThapaTechnical" target='blank'>Thapa Sir</a> &nbsp;
            3. <a href="https://www.youtube.com/@chaiaurcode" target='blank'>Hitesh Sir</a>&nbsp;
            </div>
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to={""}>Home</Link>
            </li>
            <li>
              <Link to={"/React-portpolio/about"}>About</Link>
            </li>
            <li>
              <Link to={""}>Services</Link>
            </li>
            <li>
              <Link to={"aboutwebinfo"}>Contribute</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/jeet.koner.36" target='blank'>Facebook</a></li>
            <li><a href="https://twitter.com/buddhadeb_koner" target='blank'>X</a></li>
            <li><a href="https://www.instagram.com/buddhadeb.exe/" target='blank'>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
