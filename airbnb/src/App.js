import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

const App = function App() {
    const jsx = (
        <div>
            <NavBar />
            <Hero />
            <Footer />
        </div>
    );
    return jsx;
};

export default App;
