import React from "react";
import './Header.css';  // Import the CSS for the Header component

function Header() {
    return (
        <header className="header">
            <div className="header-container">

                {/* Logo */}
                <div className="logo">
                    <img src="/Serene-Hearts-AFH/images/logo1.png" alt="SERENE HEARTS Logo" />
                </div>

                {/* Center Phone Number */}
                <div className="phone-number">
                    <i className="fa-solid fa-phone"></i>
                    <p>206-429-2064</p>
                </div>



            </div>
        </header>
    );
}

export default Header;
