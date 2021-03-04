import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer>
            <section>
                <a href="https://www.linkedin.com/in/manuel-leung-chen/" rel="noreferrer" target="_blank">
                    <span className="fab fa-linkedin"></span></a>
                <a href="https://github.com/manuelleungchen" rel="noreferrer" target="_blank">
                    <span className="fab fa-github"></span></a>
                <a href="https://www.instagram.com/mleungc/" rel="noreferrer" target="_blank">
                    <span className="fab fa-instagram"></span></a>
                <a href="./assets/Resume.pdf" rel="noreferrer" target="_blank">
                    <span className="far fa-file-pdf"></span></a>
            </section>
            <h6>
                &copy; 2020 Copyright
        </h6>
        </footer>
    )
}

export default Footer;