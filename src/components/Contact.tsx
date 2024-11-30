import React from "react";
import './Contact.css';
import {Button} from "./Button";

function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                {/* Left Section */}
                <div className="contact-section">
                    <div className="contact-info">
                        <h3 className="contact-title">Get Connected</h3>
                        <h1 className="contact-heading">Contact Us Today To Schedule A Tour</h1>
                        <p className="contact-description">
                            Take the first step to joining a community dedicated to making a
                            difference in the lives of your loved ones. Get in touch today to
                            arrange your visit and see what makes Serene Hearts AFH special.
                        </p>

                        <div className="contact-buttons">
                            <Button>
                                <a href="tel:206-429-2064">
                                    <i className="fa-solid fa-phone"></i>206-429-2064
                                </a>
                            </Button>
                            <Button>
                                <a href="mailto:sereneheartsAFH@outlook.com">
                                    <i className="fa-solid fa-envelope"></i>Email us Now
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="contact-section">
                    <div className="contact-image">
                        <img
                            // src="https://via.placeholder.com/600x400" // Replace with your image URL or file path
                            src="/images/contact.jpg"
                            alt="Nurse assisting a patient"
                            // className="contact-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
