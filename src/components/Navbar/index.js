import React from "react";
import { NavLink } from 'react-router-dom';
import "./style.css";
import { motion } from "framer-motion";

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2.5,
            ease: "easeInOut"
        }
    }
}

function Navbar() {

    return (
        <header>
            <nav className="navbar navbar-expand">
                <div className="navbar-header">
                    <NavLink to="/about">
                        <svg alt="logo" id="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 375 374.999991" version="1.2"
                        >
                            <defs
                            >
                                <g
                                >
                                    <symbol overflow="visible" id="glyph0-0">
                                        <motion.path d="M 72.4375 0 L 8.96875 0 L 8.96875 -130.53125 L 72.4375 -130.53125 Z M 67.59375 -7.53125 L 67.59375 -122.921875 L 43.03125 -65.265625 Z M 13.8125 -121.84375 L 13.8125 -8.609375 L 37.828125 -65.265625 Z M 17.390625 -4.84375 L 63.5625 -4.84375 L 40.4375 -59.171875 Z M 40.4375 -71.359375 L 63.5625 -125.6875 L 17.390625 -125.6875 Z M 40.4375 -71.359375 "
                                            variants={pathVariants}
                                            initial="hidden"
                                            animate="visible"
                                        />
                                    </symbol>
                                    <symbol overflow="visible" id="glyph0-1">
                                        <motion.path d="M 46.796875 -130.53125 L 80.328125 -35.859375 L 113.6875 -130.53125 L 149 -130.53125 L 149 0 L 122.015625 0 L 122.015625 -35.6875 L 124.703125 -97.28125 L 89.46875 0 L 71 0 L 35.859375 -97.1875 L 38.546875 -35.6875 L 38.546875 0 L 11.65625 0 L 11.65625 -130.53125 Z M 46.796875 -130.53125 "
                                            variants={pathVariants}
                                            initial="hidden"
                                            animate="visible"
                                        />
                                    </symbol>
                                </g>
                            </defs>
                            <g id="surface1"
                            >
                                <motion.path d="M 187.5 347.976562 C 144.613281 347.976562 104.300781 331.296875 74.035156 300.964844 C 43.703125 270.636719 27.023438 230.324219 27.023438 187.5 C 27.023438 144.613281 43.703125 104.300781 74.035156 74.035156 C 104.363281 43.703125 144.675781 27.023438 187.5 27.023438 C 230.386719 27.023438 270.699219 43.703125 300.964844 74.035156 C 331.296875 104.363281 347.976562 144.675781 347.976562 187.5 C 347.976562 230.386719 331.296875 270.699219 300.964844 300.964844 C 270.699219 331.296875 230.386719 347.976562 187.5 347.976562 Z M 187.5 39.902344 C 148.089844 39.902344 110.996094 55.230469 83.113281 83.113281 C 55.230469 110.996094 39.902344 148.089844 39.902344 187.5 C 39.902344 226.910156 55.230469 264.003906 83.113281 291.886719 C 110.996094 319.769531 148.089844 335.097656 187.5 335.097656 C 226.910156 335.097656 264.003906 319.769531 291.886719 291.886719 C 319.769531 264.003906 335.097656 226.910156 335.097656 187.5 C 335.097656 148.089844 319.769531 110.996094 291.886719 83.113281 C 264.003906 55.230469 226.910156 39.902344 187.5 39.902344 Z M 187.5 39.902344 "
                                    variants={pathVariants}
                                    initial="hidden"
                                    animate="visible" />
                                <g
                                >
                                    <use xlinkHref="#glyph0-1" x="106.283795" y="252.763608" />
                                </g>
                            </g>
                        </svg>
                        <h1 className="navbar-brand" id="name">anuel Leung Chen</h1>
                    </NavLink>
                </div>
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        activeClassName="nav-link-active"
                        className="nav-link"
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        activeClassName="nav-link-active"
                        className="nav-link"
                        to="/portfolio"
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        activeClassName="nav-link-active"
                        className="nav-link"
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;