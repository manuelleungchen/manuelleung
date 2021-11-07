import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer>
            <div id="contact-social-icons">
                <div>
                    <a href="https://www.linkedin.com/in/manuel-leung-chen/" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin"></i></a>
                </div>
                <div>
                    <a href="https://github.com/manuelleungchen" rel="noreferrer" target="_blank">
                        <i className="fab fa-github"></i></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/mleungc/" rel="noreferrer" target="_blank">
                        <i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <p>&copy; 2021 Copyright</p>
        </footer>
    )
}

export default Footer;