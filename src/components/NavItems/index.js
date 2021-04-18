import React, { useState, useEffect } from "react";
import "./style.css";

const NavItems = ({ activeSection }) => {

    const [aboutActive, setAboutActive] = useState("");
    const [portfActive, setPortfActive] = useState("");
    const [contactActive, setContactActive] = useState("");

    useEffect(() => {

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
        <ul key={activeSection} className="navbar-nav ml-auto">
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
    )
}

export default NavItems
