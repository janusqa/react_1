const Header = function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src="./React Logo.svg"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
