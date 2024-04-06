import React from 'react';
import '../../styles/CustomNavbar.css'; // Import CSS file

const CustomNavbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="container">
        <label htmlFor="navbar-toggle" className="navbar-toggle-label">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="navbar-menu">
          <h1 className='main-headg'>Blogs.</h1>
          <li><a href="#home">Home</a></li>
          <li><a href="#link">Culture</a></li>
          <li className="dropdown">
            <a href="#dropdown" className="dropdown-toggle">Pages</a>
            <ul className="dropdown-menu">
              <li><a href="#action/3.2">Search Result</a></li>
              <li><a href="#action/3.2">Blog</a></li>
              <li><a href="#action/3.2">Blog Single</a></li>
              <li><a href="#action/3.2">Category</a></li>
              <li><a href="#action/3.2">About</a></li>
              <li><a href="#action/3.2">Contact Us</a></li>
              <li><a href="#action/3.2">Menu One</a></li>
              <li><a href="#action/3.2">Menu Two</a></li>

           
            </ul>
          </li>
          <li className="dropdown">
            <a href="#dropdown" className="dropdown-toggle">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a href="#action/3.1">Sub Menu One</a></li>
              <li><a href="#action/3.2">Sub Menu Two</a></li>
              <li><a href="#action/3.2">Sub Menu Three</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
