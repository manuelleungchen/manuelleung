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
                    <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/manuel-leung-chen/" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin"></i></a></li>
                    <li class="ms-3"><a class="text-muted" href="https://github.com/manuelleungchen" rel="noreferrer" target="_blank">
                        <i className="fab fa-github"></i></a></li>
                    <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/mleungc/" rel="noreferrer" target="_blank">
                        <i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
         </footer>
    )
}

export default Footer;