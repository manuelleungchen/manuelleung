import React from "react";
import "./style.css";
import Form from "../../Form";
import Footer from "../../Footer";
import { motion } from "framer-motion";

function Contact() {

    return (
        <motion.div
            initial={{ opacity: 0, x: 0, y: 200 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: -200 }}
            transition={{ duration: 0.5 }}
        >
            <article id="contact">
                <section id="contact-section">
                    <h2>Contact Me</h2>
                    <hr></hr>
                    <Form />
                    <Footer />
                </section>
            </article>
        </motion.div>
    )
}

export default Contact;