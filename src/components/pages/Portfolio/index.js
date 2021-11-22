import React from "react";
import "./style.css";
import Project from "../../Project";
import data from "../../assets/json/projects.json";
import NextButton from "../../NextButton";
import { motion } from "framer-motion";

function Portfolio() {
    let projects = data.map(project => {
        return <Project
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            highlight={project.highlight}
            description={project.description}
            github={project.github}
            url={project.url}
        />
    })

    return (
        <motion.div
            initial={{ opacity: 0, x: 0, y: 200 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: -200 }}
            transition={{ duration: 0.5 }}
        >
            <article id="portfolio">
                <h1>Projects</h1>
                <hr></hr>
                {projects}
                <NextButton nextPage="contact" ></NextButton>
            </article>
        </motion.div>
    )
}

export default Portfolio;