import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

const App = function App() {
    const jsx = (
        <main className="business-card_main">
            <Header />
            <Main />
            <Footer />
        </main>
    );
    return jsx;
};

export default App;
