import React from 'react';
import './Hero.css';
import img22 from './image 22.png';
import img23 from './image 23.png';
import img24 from './image 24.png';
import img25 from './image 25.png';
import img26 from './image 26.png';
import img27 from './image 27.png';
import img28 from './image 28.png';
import img29 from './image 29.png';
import img30 from './image 30.png';

const Hero = function Hero() {
    const jsx = (
        <section className="hero">
            <div className="container">
                <div className="image--grid">
                    <div>
                        <img src={img28} alt="" />
                    </div>
                    <div>
                        <img src={img30} alt="" />
                        <img src={img26} alt="" />
                    </div>
                    <div>
                        <img src={img27} alt="" />
                        <img src={img29} alt="" />
                    </div>
                    <div>
                        <img src={img22} alt="" />
                        <img src={img23} alt="" />
                    </div>
                    <div>
                        <img src={img25} alt="" />
                        <img src={img24} alt="" />
                    </div>
                </div>
                <h1>Online Experiences</h1>
                <p className="hero--text">
                    Join unique interactive activities led by one-of-a-kind
                    hosts - all without leaving home.
                </p>
            </div>
        </section>
    );
    return jsx;
};

export default Hero;
