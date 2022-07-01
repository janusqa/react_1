import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Meme from './components/Meme/Meme';

const App = function App() {
    const jsx = (
        <div className="container">
            <Header />
            <Meme />
        </div>
    );
    return jsx;
};

export default App;
