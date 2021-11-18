import React from 'react';
import logo from '../../logo.png';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt="logo"/>
                <h2>Online Shoping Center</h2>
            </div>
        </header>
    );
};

export default Header;