import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import "./style.css";


const Contact = React.forwardRef((props, ref) => {

    const [state, handleSubmit] = useForm("xvodgkky");
    if (state.succeeded) {
        console.log("Message Sent Successfully!")
    }

    return (

        <article className="contact" id="contact" ref={ref}>
            <div className="row">
                <header className="col-12">
                    <h2>Contact</h2>
                    <hr></hr>
                </header>
                <form className="col-12" onSubmit={handleSubmit}>
                    <section className="form-group"><input type="hidden" name="_subject" value="Contact request from Portfolio" /></section>
                    <section className="form-group">
                        <label htmlFor="fullname">
                            Full Name
                        </label>
                        <input
                            className="form-control"
                            id="fullname"
                            type="text"
                            name="fullname"
                            placeholder="Enter Fullname"
                        />
                        <ValidationError
                            prefix="Fullname"
                            field="fullname"
                            errors={state.errors}
                        />
                    </section>
                    <section className="form-group">
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="form-control"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </section>
                    <section className="form-group">
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Write a Message"
                            rows="5"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </section>
                    <section className="form-button">
                        <button type="submit" disabled={state.submitting} id="submit-btn">
                            Submit
                                </button>
                    </section>
                </form>
            </div>
        </article>
    )
})

export default Contact;