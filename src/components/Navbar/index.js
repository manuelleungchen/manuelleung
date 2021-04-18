import React from "react";
import NavItems from "../NavItems";
import "./style.css";

function Navbar({ activeSec }) {

    return (
        <header>
            <nav className="navbar navbar-expand">
                <div className="navbar-header">
                    <a href="#about">
                        <img src={process.env.PUBLIC_URL + "/android-chrome-192x192.png"} alt="logo" id="logo"></img>
                        <h1 className="navbar-brand" id="name">anuel Leung Chen</h1>
                    </a>
                </div>
                <NavItems key={activeSec} activeSection={activeSec}></NavItems>
            </nav>
        </header>
    )
}

export default Navbar;