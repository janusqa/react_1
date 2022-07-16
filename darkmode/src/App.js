import React, { createContext, useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

export const ThemeContext = createContext();

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <div className="container">
                <Navbar />
                <Main />
            </div>
        </ThemeContext.Provider>
    );
}
