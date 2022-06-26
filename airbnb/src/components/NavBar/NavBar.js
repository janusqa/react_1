import React from 'react';
import './NavBar.css';
import logo from './airbnb 1.png';

const NavBar = function NavBar() {
    const jsx = (
        <nav>
            <div className="container">
                <img src={logo} alt="Airbnb Logo" />
            </div>
        </nav>
    );
    return jsx;
};

export default NavBar;
