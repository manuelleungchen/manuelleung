import React from "react";
import "./style.css";
import Project from "../../Project";
import data from "../../assets/json/projects.json";

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
       
            <main id="portfolio-container">
                <div className="row">
                    <header className="col-12">
                        <h2>PROJECTS</h2>
                        <hr></hr>
                    </header>
                    {projects}
                </div>
            </main>
           
    )
}

export default Portfolio;