import React from "react";
import "./style.css";

function Project({ id, title, image, highlight, description, github, url }) {

    return (
        <div className="row project-info">
            <section className="col-sm-12 col-md-6 col-lg-6">
                <h3 className="project-title">{title}</h3>
                <h4 className="highlight">{highlight}</h4>
                <p>{description}</p>
                <div className="button-div">
                    <a href={url} className="link-button" rel="noreferrer" target="_blank">Visit Site</a>
                    <a href={github} className="link-button" rel="noreferrer" target="_blank">Check Repo</a>
                </div>
            </section>
            <section className="col-sm-12 col-md-6 col-lg-6">
                <img src={process.env.PUBLIC_URL + image} className="project-image" alt="Avatar"></img>
            </section>
        </div>
    )
}

export default Project;