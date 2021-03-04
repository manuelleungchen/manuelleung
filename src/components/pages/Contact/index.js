import React from "react";
import "./style.css";

function Contact() {
    return (
        <main id="contact-container">
            <div className="row">
                <article className="col-12">
                    <div className="row">
                        <header className="col-12">
                            <h2>Contact</h2>
                            <hr></hr>
                        </header>
                        <form className="col-12">
                            <section className="form-group">
                                <label for="formInputName">Name</label>
                                <input type="text" class="form-control" id="formInputName" placeholder="Name"></input>
                            </section>
                            <section className="form-group">
                                <label for="formInputEmail">Email</label>
                                <input type="email" className="form-control" id="formInputEmail" placeholder="Email"></input>
                            </section>
                            <section className="form-group">
                                <label for="formInputMessage">Message</label>
                                <textarea rows="5" className="form-control" id="formInputMessage" placeholder="Message"></textarea>
                            </section>
                            <section className="form-button">
                                <button type="submit" id="submit-btn">Submit</button>
                            </section>
                        </form>
                    </div>
                </article>
            </div>
        </main>

    )
}

export default Contact;