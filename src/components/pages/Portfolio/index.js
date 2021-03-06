import React from "react";
import "./style.css";
import Bonappvoyage from "../../assets/images/Bonappvoyage.png";
import WeatherDashboard from "../../assets/images/Weather_dashboard.png";
import PasswordGenerator from "../../assets/images/Password_generator.png";
import Youtwitch from "../../assets/images/Youtwitch.png";
import BurgerLogger from "../../assets/images/burger-logger.png";


function Contact() {
    return (
        <main id="portfolio-container">
            <div className="row">
                <header className="col-12">
                    <h2>PROJECTS</h2>
                    <hr></hr>
                </header>

                <section className="row project-section">
                    <div className="col-sm-12 col-md-6 col-lg-6 project-info">
                        <h3 className="project-title">BonAppVoyage</h3>
                        <h4 className="highlight">JavaScript/Bulma</h4>
                        <p>Cooking App that obtains a list of food recipes and points of interest of random cities.</p>
                        <div class="button-div">
                            <a href="https://uoftbootcampgroupproject.github.io/bonAPPvoyage/" className="link-button" rel="noreferrer" target="_blank">Visit Site</a>
                            <a href="https://github.com/UofTbootcampgroupproject/bonAPPvoyage" className="link-button" rel="noreferrer" target="_blank">Check Repo</a>
                        </div>
                    </div>
                    <img src={Bonappvoyage} alt="Avatar" className="col-sm-12 col-md-6 col-lg-6 project-image"></img>
                </section>

                <section className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 project-info">
                        <h3 className="project-title">Weather Dashboard</h3>
                        <h4 className="highlight">JavaScript/JQuery</h4>
                        <p>Weather app that provides current and future weather forecasts in cities.</p>
                        <div class="button-div">
                            <a href="https://manuelleungchen.github.io/Weather-Dashboard/" className="link-button" rel="noreferrer" target="_blank">Visit Site</a>
                            <a href="https://github.com/manuelleungchen/Weather-Dashboard" className="link-button" rel="noreferrer" target="_blank">Check Repo</a>
                        </div>
                    </div>
                    <img src={WeatherDashboard} alt="Avatar" className="col-sm-12 col-md-6 col-lg-6 project-image"></img>
                </section>

                <section className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 project-info">
                        <h3 className="project-title">Password Generator</h3>
                        <h4 className="highlight">JavaScript/BootStrap</h4>
                        <p>Web App that generates a random password based on user criteria.</p>
                        <div class="button-div">
                            <a href="https://manuelleungchen.github.io/Password-Generator/" className="link-button" rel="noreferrer" target="_blank">Visit Site</a>
                            <a href="https://github.com/manuelleungchen/Password-Generator" className="link-button" rel="noreferrer" target="_blank">Check Repo</a>
                        </div>
                    </div>
                    <img src={PasswordGenerator} alt="Avatar" className="col-sm-12 col-md-6 col-lg-6 project-image"></img>
                </section>

                <section className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 project-info">
                        <h3 className="project-title">YouTwitch</h3>
                        <h4 className="highlight">Node.js/Handlebars/Materialize</h4>
                        <p>Video Sharing platform that combines content from Youtube and Twitch.</p>
                        <div class="button-div">
                            <a href="https://enigmatic-stream-39845.herokuapp.com/" className="link-button" rel="noreferrer" target="_blank">Visit Site</a>
                            <a href="https://github.com/manuelleungchen/YouTwitch" className="link-button" rel="noreferrer" target="_blank">Check Repo</a>
                        </div>
                    </div>
                    <img src={Youtwitch} alt="Avatar" className="col-sm-12 col-md-6 col-lg-6 project-image"></img>
                </section>

                <section className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 project-info">
                        <h3 className="project-title">Burger Logger</h3>
                        <h4 className="highlight">Heroku/Node.js</h4>
                        <p>Burger Logger Web Application that keeps track of Burgers.</p>
                        <div class="button-div">
                            <a href="https://stark-falls-45223.herokuapp.com/" className="link-button" rel="noreferrer" target="_blank">Visit Site</a>
                            <a href="https://github.com/manuelleungchen/Burger-Logger" className="link-button" rel="noreferrer" target="_blank">Check Repo</a>
                        </div>
                    </div>
                    <img src={BurgerLogger} alt="Avatar" className="col-sm-12 col-md-6 col-lg-6 project-image"></img>
                </section>
            </div>
        </main>
    )
}

export default Contact;