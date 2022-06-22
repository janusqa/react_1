import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

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
const root = ReactDOM.createRoot(container);
root.render(<App />);
