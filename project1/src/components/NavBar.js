import React from 'react';
import logo from '../assets/react-logo.svg';
import './NavBar.css';

const NavBar = function NavBar() {
    const jsx = (
        <nav>
            <img className="nav--icon" src={logo} alt="logo"></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    );
    return jsx;
};

export default NavBar;
