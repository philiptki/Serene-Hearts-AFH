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
                            className={`nav-links ${location.pathname === '/' && location.hash === '' ? 'active' : ''}`}
                            onClick={() => {
                                window.scrollTo(0, 0);  // Scroll to top of the page
                                closeMobileMenu();
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <a
                            href="#services"
                            className={`nav-links ${location.hash === '#services' ? 'active' : ''}`}  // Add active class
                            onClick={closeMobileMenu}
                        >
                            Services
                        </a>
                    </li>
                    {/*<li className='nav-item'>*/}
                    {/*    <Link*/}
                    {/*        to="/about"*/}
                    {/*        className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`}  // Add active class*/}
                    {/*        onClick={closeMobileMenu}*/}
                    {/*    >*/}
                    {/*        About*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                    <li className='nav-item'>
                        <a
                            href="#contact"
                            className={`nav-links ${location.hash === '#contact' ? 'active' : ''}`} // Checking the hash to add the active class
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </a>

                    </li>
                </ul>

                {/*<Button*/}
                {/*    buttonStyle="btn--primary"*/}
                {/*    buttonSize="btn--large"*/}
                {/*    buttonLink="/contact"*/}
                {/*>*/}
                {/*    Schedule a Tour*/}
                {/*</Button>*/}

                <div className="schedule-button">
                    <Button
                        // buttonLink="/contact"
                    >
                        {/*Schedule a Tour*/}
                        <a href="#contact"> {/* Scroll to the section with id="contact" */}
                            Schedule a Tour
                        </a>
                    </Button>
                </div>

            </div>
        </header>
    );
}

export default Navbar;
