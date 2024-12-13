import React from "react";
import './About.css';

function About() {
    return (
        <div className="about" id = "about">
            <div className="about-container">

                {/* Right Section */}
                {/*<div className="about-section">*/}
                {/*    <div className="about-image">*/}
                {/*        <img*/}
                {/*            // src="https://via.placeholder.com/600x400" // Replace with your image URL or file path*/}
                {/*            src="/images/contact.jpg"*/}
                {/*            alt="Nurse assisting a patient"*/}
                {/*            // className="contact-image"*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}



                {/* Left Section */}
                <div className="about-section">
                    <div className="about-info">
                        <h3 className="about-title">About Serene Hearts</h3>
                        <h1 className="about-heading">Our mission is to provide the highest quality of personal care in
                                                        a peaceful and calm environment.</h1>
                        <p className="about-description">
                            We are a family owned establishment offering a more personalized approach to care compared
                            to larger facilities like nursing homes. Serene Hearts AFH is owned and operated by a
                            Registered Nurse and CNA duo who have passion and many years of experience in the
                            healthcare field, ensuring the highest level of quality care.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
