import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Main.css';

const Main = function Main() {
    const jsx = (
        <section className="business-card_info">
            <h1>Laura Smith</h1>
            <h4>Frontend Developer</h4>
            <p className="business-card_info-website">laurasmith.website</p>
            <div className="business-card_info--contact">
                <div className="businss-card_info--contact_button button-email">
                    <FontAwesomeIcon
                        className="contact-icon"
                        icon={faEnvelope}
                    />
                    Email
                </div>
                <div className="businss-card_info--contact_button button-linkedin">
                    <FontAwesomeIcon
                        className="contact-icon"
                        icon={faLinkedin}
                    />
                    LinkedIn
                </div>
            </div>
            <h3>About</h3>
            <p>
                I am a frontend developer with a particular interest in
                makingthings simple and automating daily tasks. I try to keep up
                with security and best pratices, and am always looking for new
                things to learn.
            </p>
            <h3>Interest</h3>
            <p>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Cofee
                fanatic.
            </p>
        </section>
    );
    return jsx;
};

export default Main;
