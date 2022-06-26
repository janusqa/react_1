import React from 'react';
import './Header.css';
import logo from './logo.png';

const Header = function Header() {
    const jsx = (
        <header className="header container">
            <img src={logo} alt="" />
            <p>my travel journal.</p>
        </header>
    );
    return jsx;
};

export default Header;
