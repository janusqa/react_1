import React from 'react';
import './Header.css';
import trollFace from './Troll Face.png';

const Header = function Header() {
    const jsx = (
        <header className="meme--header">
            <img
                className="meme--header-logo"
                src={trollFace}
                alt="Troll Face"
            />
            <h2>Meme Generator</h2>
            <h4>React Course - Project 3</h4>
        </header>
    );
    return jsx;
};

export default Header;
