import React, { useState } from 'react';
import '../styles/Header.css';
import zyskimage from '../images/home-image.png';
import profileimage from '../images/pro.png';

const Header = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="logo">
          <h1>zysk</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>

          {/* Products Dropdown */}
          <li 
            className="dropdown"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <a href="#products">Products ▼</a>
            {productsOpen && (
              <ul className="dropdown-menu">
              </ul>
            )}
          </li>

          {/* Resources Dropdown */}
          <li 
            className="dropdown"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <a href="#resources">Resources ▼</a>
            {resourcesOpen && (
              <ul className="dropdown-menu"></ul>
            )}
          </li>

          <li><a href="#pricing">Pricing</a></li>
        </ul>

        <div className="profile">
          <img src={profileimage} alt="Profile-Image" className="profile-img" />
        </div>
      </nav>
      <hr className="custom-line" />


      <div className="header-content">
        <button className='buton'>
        <p className="new-feature">New feature</p>
        <a href="#team-dashboard" className="dashboard-link">Check out the team dashboard →</a></button>
        <h2 className="header-title">Beautiful analytics to grow smarter</h2>
        <p className="header-description">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="header-buttons">
          <button className="btn-demo">Demo</button>
          <button className="btn-signup">Sign up</button>
        </div>
        <div className="header-image">
          <img src={zyskimage} alt="Front-Image" className='front-img' />
        </div>
      </div>
    </header>
  );
};

export default Header;
