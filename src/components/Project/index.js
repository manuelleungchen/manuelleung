import React from "react";
import "./style.css";
import { motion } from 'framer-motion';

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255,255,255)',
        boxShadow: '0px 0px 8px rgb(255,255,255)',
        transition: {
            yoyo: Infinity,
            duration: 0.5
        }
    }
}

function Project({ title, image, highlight, description, github, url }) {

    return (
        <div className="row project-info">
            <section className="col-sm-12 col-md-6 col-lg-6">
                <h3 className="project-title">{title}</h3>
                <h4 className="highlight">{highlight}</h4>
                <p>{description}</p>
                <div className="button-div">
                    {url !== "" &&
                        <motion.a href={url} className="link-button" rel="noreferrer" target="_blank"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Live Site
                        </motion.a>}
                    <motion.a href={github} className="link-button" rel="noreferrer" target="_blank"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        Github
                    </motion.a>
                </div>
            </section>
            <section className="col-sm-12 col-md-6 col-lg-6">
                <img src={process.env.PUBLIC_URL + image} className="project-image" alt={`${title} mockup`}></img>
            </section>
        </div>
    )
}

export default Project;