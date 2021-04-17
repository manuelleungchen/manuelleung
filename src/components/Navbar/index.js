import React, { useState, useEffect } from "react";
// import { NavLink } from 'react-router-dom';
import "./style.css";
// import Logo from "../assets/logo.png";

function Navbar({activeSection}) {

    const [aboutActive, setAboutActive] = useState("");
    const [portfActive, setPortfActive] = useState("");
    const [contactActive, setContactActive] = useState("");

    useEffect(() => {

        // console.log(`Ooko ${activeSection}` )
        switch (activeSection) {
            case 'about':
                setAboutActive("active");
                break;
            case 'portfolio':
                setPortfActive("active");
                break;
            case 'contact':
                setContactActive("active");
                break;
            default:
                break;
        }
        
    }, [activeSection])
   
    return (
        <header>
            <nav className="navbar navbar-expand">
                <div className="navbar-header">
                    <a href="#about">
                        <img src={process.env.PUBLIC_URL + "/android-chrome-192x192.png"} alt="logo" id="logo"></img>
                        <h1 className="navbar-brand" id="name">anuel Leung Chen</h1>
                    </a>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <a className={`nav-link ${aboutActive}`} href="#about">About Me</a>
                    </li>
                    <li>
                        <a className={`nav-link ${portfActive}`} href="#portfolio-hr">Portfolio</a>
                    </li>
                    <li>
                        <a className={`nav-link ${contactActive}`} href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;