import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faFacebookSquare,
    faGithubSquare,
    faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

const Footer = function Footer() {
    const jsx = (
        <footer className="business-card_footer">
            <div className="business-card-footer_social">
                <FontAwesomeIcon
                    className="social-icons"
                    icon={faTwitterSquare}
                />

                <FontAwesomeIcon
                    className="social-icons"
                    icon={faFacebookSquare}
                />

                <FontAwesomeIcon
                    className="social-icons"
                    icon={faInstagramSquare}
                />

                <FontAwesomeIcon
                    className="social-icons"
                    icon={faGithubSquare}
                />
            </div>
        </footer>
    );
    return jsx;
};

export default Footer;
