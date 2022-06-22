import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import './css/index.css';

const App = function App() {
    const content = (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
    return content;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
