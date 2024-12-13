import React from "react";
import "./Intro.css"
import {Button} from "./Button";

function Intro() {
    return (

        <div className="intro" id="intro">

            <img src="/images/contact.jpg"/>


            <div className="intro-container">

                <div className="intro-section">
                    <h3 className="intro-title">Discover Serene Hearts Adult Care</h3>
                    <h1 className="intro-heading">A Place of Kindness and Serenity</h1>
                    <Button>
                        <a href="#services">
                            What we offer
                        </a>
                    </Button>
                </div>
            </div>

        </div>

    )
}

export default Intro;