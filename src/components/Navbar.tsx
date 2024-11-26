import React, {useEffect} from "react";
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation hook
import { Button } from './Button'

function Navbar() {
    const [click, setClick] = React.useState(false);
    const [button, setButton] = React.useState(true);
    const location = useLocation();  // Get the current route

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
            closeMobileMenu();
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* menu icon from = to x */}
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                </div>

                {/* Toggle class name for the menu based on the state */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link
                            to="/"
                            className={`nav-links ${location.pathname === '/' ? 'active' : ''}`}  // Add active class when the path matches
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to="/services"
                            className={`nav-links ${location.pathname === '/services' ? 'active' : ''}`}  // Add active class
                            onClick={closeMobileMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to="/about"
                            className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`}  // Add active class
                            onClick={closeMobileMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to="/contact"
                            className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`}  // Add active class
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
