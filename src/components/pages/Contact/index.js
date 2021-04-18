import React, { useState } from "react";
import "./style.css";
import Form from "../../Form"
import { Modal } from "react-bootstrap";

const Contact = React.forwardRef((props, ref) => {
    // Modal 
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <article id="contact" ref={ref}>
            <Modal show={showModal} onHide={() => {toggleModal()}} className="contact-modal" id="contact-modal">
                <Modal.Header closeLabel="Close Button" className="modal-header">
                    <Modal.Title>Contact Me</Modal.Title>
                    <button id="close-button" onClick={() => { toggleModal() }}>X</button>
                </Modal.Header>
                <Modal.Body id="modal-body">
                    <Form />
                </Modal.Body>
            </Modal>
            <section id="contact-section">
                <h4>Want to work with me?</h4>
                <button onClick={() => toggleModal()}>Message me</button>
            </section>
        </article>
    )
})

export default Contact;