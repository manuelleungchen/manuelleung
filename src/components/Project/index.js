import React from "react";
import "./style.css";

function Project() {
    return (
        <section className="row project-section">
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
    )
}

export default Project;