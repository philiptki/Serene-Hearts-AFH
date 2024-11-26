import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Navigation Links */}
                <nav className="nav-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;
