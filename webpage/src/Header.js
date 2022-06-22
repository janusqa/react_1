import React from 'react';
import logo from './assets/react-logo.svg';

const Header = function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src={logo} alt="logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
