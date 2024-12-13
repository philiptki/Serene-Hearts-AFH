import React from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Service from "../components/Service";
import Intro from "../components/Intro";
import About from "../components/About";

function Home() {
    return (
        <div>

            <Intro/>

            <About/>

            <Service/>

            <Contact/>

            <Footer />

        </div>

    )
}

export default Home;