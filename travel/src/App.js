import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = function App() {
    const jsx = (
        <div className="page">
            <Header />
            <Main />
        </div>
    );
    return jsx;
};
export default App;
