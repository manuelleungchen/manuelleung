import React from "react";
import "./style.css";
import Resume from "../../assets/pdf/Resume.pdf"
import { motion } from "framer-motion";
import NextButton from "../../nextButton";

function About(){

    return (
    <article id="about">
        <div className="row">
            <section className="col-12 col-sm-12 col-md-6 col-lg-6">
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
            </section>
            <section className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div id="abouet-me">
                    <h3>ABOUT ME</h3>
                    <hr></hr>
                    <p>
                        I'm Manuel, a Full-stack Developer originally from the Dominican Republic and currently based in Toronto, Canada.  After realizing how computer devices positively changed our lifestyles, I fell in love with technology. That led to an Advanced Diploma in Computer Engineering Technology, and I've now worked in IT for three years.
                    </p>
                    <p>
                        With almost five years in the customer service industry and encountering multiple user errors along the way, I'm now putting together all my experiences and offering thoughtfully designed user-friendly applications and all with a positive attitude.
                    </p>
                    <p>Phone: (647)-704-2246</p>
                    <p>Email: manuel.leungchen@gmail.com</p>
                </div>
                <div className="row" id="social">
                    <div className="col-3">
                    <a href="https://www.linkedin.com/in/manuel-leung-chen/" rel="noreferrer" target="_blank">
                        <span className="fab fa-linkedin"></span></a>
                    </div>
                    <div className="col-3">
                        <a href="https://github.com/manuelleungchen" rel="noreferrer" target="_blank">
                        <span className="fab fa-github"></span></a>
                        </div>
                    <div className="col-3">
                    <a href="https://www.instagram.com/mleungc/" rel="noreferrer" target="_blank">
                        <span className="fab fa-instagram"></span></a>
                    </div>
                    <div className="col-3">
                    <a href={Resume} rel="noreferrer" target="_blank">
                        <span className="far fa-file-pdf"></span></a>
                    </div>

                    
                    
                    
                    
                </div>
            </section>
            <section className="col-12">
                <div id="skills">
                    <h3>SKILLS</h3>
                    <div className="row" id="skill-icons">
                        <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-html5"></i><p>HTML 5</p></div>
                        <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-css3-alt"></i><p>CSS</p></div>
                        <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-js-square"></i><p>JavaScript</p></div>
                        <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-node-js"></i><p>Node.js</p></div>
                        <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-npm"></i><p>NPM</p></div>
                        <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-react"></i><p>React.js</p></div>
                        <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fas fa-universal-access"></i><p>Accessability</p></div>
                        <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fab fa-github"></i><p>Github</p></div>
                        <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fas fa-mobile-alt"></i><p>Responsive</p></div>
                        <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fas fa-database"></i><p>MongoDB</p></div>
                        <div className="col-3 col-md-2 col-lg-2 col-xl-1"><i className="fas fa-database"></i><p>MySQL</p></div>
                    </div>
                </div>
            </section>
            <section className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <NextButton nextPage="portfolio" ></NextButton>
            </section>
        </div>
    </article>
)}

export default About;