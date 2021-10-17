import React from "react";
import "./style.css";
import Resume from "../../assets/pdf/Resume.pdf"
import { motion } from "framer-motion";

function About(){

    return (
    <article id="about">
        <div className="row">
            <section className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
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
            <section className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
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
                <div id="social">
                    <a href="https://www.linkedin.com/in/manuel-leung-chen/" rel="noreferrer" target="_blank">
                        <span className="fab fa-linkedin"></span></a>
                    <a href="https://github.com/manuelleungchen" rel="noreferrer" target="_blank">
                        <span className="fab fa-github"></span></a>
                    <a href="https://www.instagram.com/mleungc/" rel="noreferrer" target="_blank">
                        <span className="fab fa-instagram"></span></a>
                    <a href={Resume} rel="noreferrer" target="_blank">
                        <span className="far fa-file-pdf"></span></a>
                </div>
            </section>
            <section className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div id="skills">
                    <h3>SKILLS</h3>
                    <div id="skill-icons">
                        <div><i class="fab fa-html5"></i><p>HTML 5</p></div>
                        <div><i class="fab fa-css3-alt"></i><p>CSS</p></div>
                        <div><i class="fab fa-js-square"></i><p>JavaScript</p></div>
                        <div><i class="fab fa-node-js"></i><p>Node.js</p></div>
                        <div><i class="fab fa-npm"></i><p>NPM</p></div>
                        <div><i class="fab fa-react"></i><p>React.js</p></div>
                        <div><i class="fas fa-universal-access"></i><p>Accessability</p></div>
                        <div><i class="fab fa-github"></i><p>Github</p></div>
                        {/* <div><i class="fal fa-phone-laptop"></i><p>Responsive</p></div> */}
                        <div><svg height="45" width="45" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="m15.9.087.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z" stroke="currentColor" fill="currentColor"/><path d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z" stroke="currentColor" fill="currentColor" /><path d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" stroke="currentColor" fill="currentColor" /></svg><p>MongoDB</p></div>
                        {/* <div><p>MySQL</p></div> */}
                        {/* <div><p>NEXT.js</p></div> */}
                        <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" height="45" width="45" viewBox="0 0 25 25" class="icons" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"></path></svg><p>Heroku</p></div>
                        {/* <div><p>CLI</p></div> */}
                    </div>
                </div>
            </section>
        </div>
    </article>
)}

export default About;