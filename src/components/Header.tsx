import React from "react";
import './Header.css';  // Import the CSS for the Header component

function Header() {
    return (
        <header className="header">
            <div className="header-container">

                {/* Logo */}
                <div className="logo">
                    <img src="logo.png" alt="SERENE HEARTS Logo" />
                </div>

                {/* Center Phone Number */}
                <div className="phone-number">
                    <p>(000)-000-0000</p>
                </div>

                {/* Left Button */}
                <button className="contact-button">Contact Us</button>

            </div>
        </header>
    );
}

export default Header;
