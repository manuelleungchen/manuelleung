import React from "react";
import "./style.css";
import Resume from "../../assets/pdf/Resume.pdf"
import { motion } from "framer-motion";
import NextButton from "../../NextButton";


function About() {

    return (<motion.div
        initial={{ opacity: 0, x: 0, y: 200 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: 0, y: -200 }}
        transition={{ duration: 0.5 }}
    >
        <article id="about">
            <div className="row">
                <section className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div id="portrait-container">
                        <motion.div
                            id="motionDivTwo"
                            animate={{ borderRadius: ["38% 68% 32% 62%", "58% 38% 72% 42%", "45% 35% 55% 65%"] }}
                            transition={{
                                duration: 12,
                                yoyo: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <motion.div
                                id="motionDivOne"
                                animate={{ borderRadius: ["38% 68% 32% 62%", "55% 35% 75% 55%", "58% 38% 72% 42%"] }}
                                transition={{
                                    duration: 10,
                                    yoyo: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <motion.img src={process.env.PUBLIC_URL + "/images/bw-portrait.jpg"} alt="Portrait of Manuel" id="portrait-image"
                                    animate={{ borderRadius: ["35% 45% 50% 75%", "38% 68% 32% 62%", "58% 38% 72% 42%"] }}
                                    transition={{
                                        duration: 15,
                                        yoyo: Infinity,
                                        ease: "easeInOut"
                                    }}
                                ></motion.img>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
                <section className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div id="about-me">
                        <h1>About Me</h1>
                        <hr></hr>
                        <p>
                            I'm Manuel, a Full-stack Developer originally from the Dominican Republic and currently based in Toronto, Canada.  After realizing how computer devices positively changed our lifestyles, I fell in love with technology. That led to an Advanced Diploma in Computer Engineering Technology, and I've now worked in IT for three years.
                        </p>
                        <p>
                            With almost five years in the customer service industry and encountering multiple user errors along the way, I'm now putting together all my experiences and offering thoughtfully designed user-friendly applications and all with a positive attitude.
                        </p>
                        <address>Phone: (647)-704-2246</address>
                        <address>Email: manuel.leungchen@gmail.com</address>
                    </div>
                    <div className="row" id="social">
                        <div className="col-3">
                            <a href="https://www.linkedin.com/in/manuel-leung-chen/" rel="noopener noreferrer" target="_blank" title="Connect With Me on Linkedin">
                                <i className="fab fa-linkedin" /></a>
                        </div>
                        <div className="col-3">
                            <a href="https://github.com/manuelleungchen" rel="noopener noreferrer" target="_blank" title="View My Repositories">
                                <i className="fab fa-github" /></a>
                        </div>
                        <div className="col-3">
                            <a href="https://discord.com/users/834973242548027403" rel="noopener noreferrer" target="_blank" title="Message Me on Discord">
                                <i className="fab fa-discord" /></a>
                        </div>
                        <div className="col-3">
                            <a href="https://www.instagram.com/mleungc/" rel="noopener noreferrer" target="_blank" title="Follow Me on Instagram">
                                <i className="fab fa-instagram" /></a>
                        </div>
                        <div className="col-12" id="resume-link-div">
                            <a className="btn btn-secondary" href={Resume} rel="noopener noreferrer" target="_blank" title="View Resume">
                                <i className="far fa-file-pdf" />Resume</a>
                        </div>
                    </div>
                </section>
                <section className="col-12">
                    <hr></hr>
                    <div id="skills">
                        <h2>Skills</h2>
                        <div className="row" id="skill-icons">
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-html5" /><p>HTML 5</p></div>
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-css3-alt" /><p>CSS</p></div>
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-js-square" /><p>JavaScript</p></div>
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-node-js" /><p>Node.js</p></div>
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-npm" /><p>NPM</p></div>
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-react" /><p>React.js</p></div>
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fas fa-universal-access" /><p>Accessability</p></div>
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-github" /><p>Github</p></div>
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fas fa-mobile-alt" /><p>Responsive</p></div>
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fas fa-database" /><p>MongoDB</p></div>
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fas fa-server" /><p>Heroku</p></div>
                            <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fas fa-database" /><p>MySQL</p></div>
                        </div>
                    </div>
                </section>
            </div>
            <NextButton nextPage="portfolio" ></NextButton>
        </article>
    </motion.div>
    )
}

export default About;