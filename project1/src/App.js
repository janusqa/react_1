import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';

const App = function App() {
    const jsx = (
        <div className="container">
            <NavBar />
            <Main />
        </div>
    );
    return jsx;
};

export default App;
