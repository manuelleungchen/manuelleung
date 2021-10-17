import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import "./style.css";


const Contactform = ({ successfully }) => {

    const [state, handleSubmit] = useForm("xvodgkky");

    if (state.succeeded) {
        successfully();
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
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
    )
}

export default Contactform
