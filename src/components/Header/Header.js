import React from 'react';
import './Header.css';
// import logo from '../assets/firefly-logo.png'; // Replace with actual path
import logo from '../Assets/logo.png'

const Header = () => (
    <header className="header">
        <div className='logo-div'>
            <img src={logo} alt="Firefly Logo"  className='logo'/>
        </div>
        <div className='para-button'>
            <p className='para'>The choise is yours because they dont hace one.</p>
            <button>Quick View</button>

        </div>
        
  </header>
);

export default Header;
