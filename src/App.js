import './App.css';
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useEffect, useState, useRef } from "react";

function App() {

    const [section, setSection] = useState("");

    const aboutRef = React.createRef();
    const portfolioRef = React.createRef();
    const contactRef = React.createRef();

    useEffect(() => {
        const aboutObserver = new IntersectionObserver(
            ([entry]) => {
                // Check if section is intersecting on the view port
                if (entry.isIntersecting) {
                    // Add active section to section state
                    setSection(entry.target.id)
                }
                else {
                    setSection("portfolio")
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.4   // Call Callback function when threshold is passed
            }
        );
        const portfolioObserver = new IntersectionObserver(
            ([entry]) => {
                // Check if section is intersecting on the view port      
                if (entry.isIntersecting) {
                    // Add active section to section state
                    setSection(entry.target.id)
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.2   // Call Callback function when threshold is passed
            }
        );
        const contactObserver = new IntersectionObserver(
            ([entry]) => {
                // Check if section is intersecting on the view port
                if (entry.isIntersecting) {
                    // Add active section to section state
                    setSection(entry.target.id)
                }
                else {
                    setSection("portfolio")
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 1   // Call Callback function when threshold is passed
            }
        );

        aboutObserver.observe(aboutRef.current);
        portfolioObserver.observe(portfolioRef.current);
        contactObserver.observe(contactRef.current);

    }, []);

    return (

        <>
            <Navbar activeSec={section} />
            <main className="container">
                <About ref={aboutRef} />
                <hr></hr>
                <Portfolio ref={portfolioRef} />
                <hr></hr>
                <Contact ref={contactRef} />
            </main>
            <Footer />
        </>
    );
}

export default App;
