import React from 'react';
import './Header.css';
// import logo from '../assets/firefly-logo.png'; // Replace with actual path
import logo from '../Assets/logo.png'

const Header = () => (
    <div className="header">
        <div className="logo-div">
            <img src={logo} alt="Firefly Logo"  className='logo'/>
        </div>
        <div className='para-button'>
            <p className='para'>The choise is yours.<br></br> because they dont have one.</p>
            <button className='btn'>Quick View</button>

        </div>
        
  </div>
);

export default Header;
