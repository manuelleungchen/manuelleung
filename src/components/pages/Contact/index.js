import React, { useState } from "react";
import "./style.css";
import Form from "../../Form"
import { Modal } from "react-bootstrap";
import { motion } from 'framer-motion';

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255,255,255)',
        boxShadow: '0px 0px 8px rgb(255,255,255)',
        transition: {
            yoyo: Infinity,
            duration: 0.5
        }
    }
}

const Contact = React.forwardRef((props, ref) => {
    // Modal 
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <article id="contact" ref={ref}>
            <Modal show={showModal} onHide={() => toggleModal()} className="contact-modal" id="contact-modal">
                <Modal.Header closeLabel="Close Button" className="modal-header">
                    <Modal.Title>Contact Me</Modal.Title>
                    <button id="close-button" onClick={() => toggleModal()}>X</button>
                </Modal.Header>
                <Modal.Body id="modal-body">
                    <Form successfully={() => setShowModal(false)} />
                </Modal.Body>
            </Modal>
            <section id="contact-section">
                <h4>Want to work with me?</h4>
                <motion.button onClick={() => toggleModal()}
                variants={buttonVariants}
                whileHover="hover"
                >
                    Message me
                </motion.button>
            </section>
        </article>
    )
})

export default Contact;