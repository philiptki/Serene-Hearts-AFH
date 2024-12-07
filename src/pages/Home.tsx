import React from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Service from "../components/Service";

function Home() {
    return (
        <div>
            {/*<div>*/}
            {/*    <h1>Welcome to the Home Page!</h1>*/}
            {/*    <p>This is the homepage of our website.</p>*/}
            {/*</div>*/}

            <Service/>

            <Contact/>

            <Footer />

        </div>

    )
}

export default Home;