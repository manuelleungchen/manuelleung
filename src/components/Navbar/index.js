import React from "react";
import "./style.css";

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <div className="navbar-header">
                    <a href="./">
                        <h1 className="navbar-brand" id="navbar-header">Manuel Leung</h1>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="./about">About</a>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="./portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="./contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;