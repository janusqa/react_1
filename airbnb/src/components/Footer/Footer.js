import React from 'react';
import './Footer.css';
import Card from '../Card/Card';
import experiences_data from '../../assets/data';

const Footer = function Footer() {
    const experiences = experiences_data.map((experience) => (
        <Card {...experience} />
    ));

    const jsx = (
        <footer className="footer">
            <div className="container">{experiences}</div>
        </footer>
    );
    return jsx;
};

export default Footer;
