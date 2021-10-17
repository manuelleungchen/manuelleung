import React, { useState } from "react";
import "./style.css";
import Form from "../../Form"
// import { Modal } from "react-bootstrap";
// import { motion } from 'framer-motion';

// const buttonVariants = {
//     hover: {
//         scale: 1.1,
//         textShadow: '0px 0px 8px rgb(255,255,255)',
//         boxShadow: '0px 0px 8px rgb(255,255,255)',
//         transition: {
//             yoyo: Infinity,
//             duration: 0.5
//         }
//     }
// }

function Contact (){
 
    return (
        <article id="contact">
            <section id="contact-section">
                <h4>Contact Me</h4>
                <Form />
            </section>
        </article>
    )
}

export default Contact;