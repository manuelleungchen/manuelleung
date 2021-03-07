import React from "react";
import { NavLink } from 'react-router-dom';
import "./style.css";
import Logo from "../assets/logo.png";

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand">
                <div className="navbar-header">
                    <a href="./#/">
                        <img src={Logo} alt="logo" id="logo"></img>
                        <h1 className="navbar-brand" id="name">Manuel Leung</h1>
                    </a>
                </div>
              
                <ul className="navbar-nav ml-auto">

                <NavLink
                    exact
                    activeClassName="nav-link-active"
                    className="nav-link"
                    to="/"
                >
                    About
                </NavLink>
                <NavLink
                    activeClassName="nav-link-active"
                    className="nav-link"
                    to="/portfolio"
                >
                    Portfolio
                </NavLink>
                <NavLink
                    activeClassName="nav-link-active"
                    className="nav-link"
                    to="/contact"
                >
                    Contacts
                </NavLink>
                </ul>

                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="./#/about">About</a>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="./#/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="./#/contact">Contact</a>
                        </li>
                    </ul>
                </div> */}
            </nav>
        </header>
    )
}

export default Navbar;