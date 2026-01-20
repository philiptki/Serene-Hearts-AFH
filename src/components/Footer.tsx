import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            {/* logo section */}
            <div className="footer-logo">
                <img src="/Serene-Hearts-AFH/images/logo1.png" alt="SERENE HEARTS Logo"/>
            </div>

            {/* Footer Links */}
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    {/* Sitemap */}
                    <div className='footer-link-items'>
                        <h2>Sitemap</h2>
                        <Link to='/' onClick={() => {window.scrollTo(0,0)}} ><i className="fa-solid fa-caret-right"></i> Home</Link>
                        <a href='#services'><i className="fa-solid fa-caret-right"></i> Services</a>
                        <a href='#about'><i className="fa-solid fa-caret-right"></i> About</a>
                        <a href='#contact'><i className="fa-solid fa-caret-right"></i> Contact</a>
                    </div>


                    {/* Contact Us */}
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <p><i className="fa-solid fa-envelope"></i>sereneheartsAFH@outlook.com</p>
                        <p><i className="fa-solid fa-phone"></i>206-429-2064</p>
                        <p><i className="fa-solid fa-location-dot"></i>22620 24th Ave S, Des Moines, WA 98198</p>
                    </div>
                </div>
            </div>

            <div className='footer-copyright'>
                Copyright © 2024 Serene Hearts AFH LLC. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
