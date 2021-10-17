import React from "react";
import "./style.css";
import Project from "../../Project";
import data from "../../assets/json/projects.json";
import NextButton from "../../nextButton";

function Portfolio (){
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
        <article id="portfolio">
            <div className="row">
                <section className="col-12">
                    <h2 id="portfolio-header">PROJECTS</h2>
                    <hr></hr>
                </section>
            </div>
            {projects}
            <section className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <NextButton nextPage="contact" ></NextButton>
            </section>
        </article>
    )
}

export default Portfolio;