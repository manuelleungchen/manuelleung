import React from "react";
import "./style.css";

function Project({id, title, image, highlight, description, github, url}) {
    
    return (
        <section className="row project-section">
        <div className="col-sm-12 col-md-6 col-lg-6 project-info">
            <h3 className="project-title">{title}</h3>
            <h4 className="highlight">{highlight}</h4>
            <p>{description}</p>
            <div class="button-div">
                <a href={url} className="link-button" rel="noreferrer" target="_blank">Visit Site</a>
                <a href={github} className="link-button" rel="noreferrer" target="_blank">Check Repo</a>
            </div>
        </div>
        <img src={process.env.PUBLIC_URL + image} alt="Avatar" className="col-sm-12 col-md-6 col-lg-6 project-image"></img>
    </section>
    )
}

export default Project;