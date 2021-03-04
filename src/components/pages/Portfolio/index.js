import React from "react";
import "./style.css";

function Contact() {
    return (
        <main id="portfolio-container">
            <div className="row">

                <header className="col-12">
                    <h2>PROJECTS</h2>
                    <hr></hr>
                </header>

                <div className="col-sm-12 col-md-6 col-lg-4 image-container">
                    <img src="./assets/images/Bonappvoyage.png" alt="Avatar" className="project-image"></img>
                    <div className="project-menu"
                        data-descrip="Cooking App that obtains a list of food recipes and points of interest of random cities.">
                        <div className="project-title">BonAppVoyage</div>
                        <div className="highlight">JavaScript/Bulma</div>
                        <button data-github="https://github.com/UofTbootcampgroupproject/bonAPPvoyage"
                            data-url="https://uoftbootcampgroupproject.github.io/bonAPPvoyage/" className="more-button"
                            data-toggle="modal" data-target="#exampleModal">LEARN MORE
                    </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 image-container">
                    <img src="./assets/images/Weather_dashboard.png" alt="Avatar" className="project-image"></img>
                    <div className="project-menu"
                        data-descrip="Weather app that provides current and future weather forecasts in cities.">
                        <div className="project-title">Weather Dashboard</div>
                        <div className="highlight">JavaScript/JQuery</div>
                        <button data-github="https://github.com/manuelleungchen/Weather-Dashboard"
                            data-url="https://manuelleungchen.github.io/Weather-Dashboard/" className="more-button"
                            data-toggle="modal" data-target="#exampleModal">LEARN MORE
                    </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 image-container">
                    <img src="./assets/images/Password_generator.png" alt="Avatar" className="project-image"></img>
                    <div className="project-menu"
                        data-descrip="Web App that generates a random password based on user criteria. ">
                        <div className="project-title">Password Generator</div>
                        <div className="highlight">JavaScript/BootStrap</div>
                        <button data-github="https://github.com/manuelleungchen/Password-Generator"
                            data-url="https://manuelleungchen.github.io/Password-Generator/" className="more-button"
                            data-toggle="modal" data-target="#exampleModal">LEARN MORE
                    </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 image-container">
                    <img src="./assets/images/youtwitch.png" alt="Avatar" className="project-image"></img>
                    <div className="project-menu"
                        data-descrip="Video Sharing platform that combines content from Youtube and Twitch. ">
                        <div className="project-title">YouTwitch</div>
                        <div className="highlight">Node.js/Handlebars/Materialize </div>
                        <button data-github="https://github.com/manuelleungchen/YouTwitch"
                            data-url="https://enigmatic-stream-39845.herokuapp.com/" className="more-button" data-toggle="modal"
                            data-target="#exampleModal">LEARN MORE
                    </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 image-container">
                    <img src="./assets/images/burger-logger.png" alt="Avatar" className="project-image"></img>
                    <div className="project-menu" data-descrip="Burger Logger Web Application that keeps track of Burgers. ">
                        <div className="project-title">Burger Logger</div>
                        <div className="highlight">Heroku/Node.js</div>
                        <button data-github="https://github.com/manuelleungchen/Burger-Logger"
                            data-url="https://stark-falls-45223.herokuapp.com/" className="more-button" data-toggle="modal"
                            data-target="#exampleModal">LEARN MORE
                    </button>
                    </div>
                </div>

            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <img id="modal-img" src="./assets/images/Weather_dashboard.png" alt=""></img>
                        <div className="modal-header">
                            <h5 className="modal-title"></h5>
                        </div>
                        <div className="modal-body">
                            <p id="modal-descrip"></p>
                            <a href="" id="github-button" className="btn btn-secondary">GitHub</a>
                            <a href="" id="url-button" className="btn btn-secondary">Visit Site</a>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Contact;