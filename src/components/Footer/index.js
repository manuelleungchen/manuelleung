import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-center py-3 px-2 my-3 mx-3 border-top">
                <div className="d-flex align-items-center">
                    <span className="text-muted">&copy; 2021 Copyright</span>
                </div>
                <ul className="nav justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/manuel-leung-chen/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://github.com/manuelleungchen" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://discord.com/users/834973242548027403" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-discord" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/mleungc/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-instagram" /></a></li>
                </ul>
            </div>
         </footer>
    )
}

export default Footer;