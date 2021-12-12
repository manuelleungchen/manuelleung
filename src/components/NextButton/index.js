import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

const nextButtonVariants = {
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

function nextButton({ nextPage }) {
    let nextPath = `#/${nextPage}`;
    return (
        <section id="nextButtonSection">
            <motion.a href={nextPath} className="btn btn-secondary"
                variants={nextButtonVariants}
                whileHover="hover">
                Go to {nextPage}
            </motion.a>
        </section>
    )
}

export default nextButton;

