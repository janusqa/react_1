import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { produce } from 'immer';

export default function Navbar(props) {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const handleOnClick = (e) => {
        setDarkMode((prevState) => {
            const nexState = produce(prevState, (draft) => {
                draft = !draft;
                return draft;
            });
            return nexState;
        });
    };

    return (
        <nav className={darkMode ? 'dark' : ''}>
            <img
                className="nav--logo_icon"
                src="./images/react-icon-small.png"
                alt=""
            />
            <h3 className="nav--logo_text">ReactFacts</h3>

            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={handleOnClick}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    );
}
