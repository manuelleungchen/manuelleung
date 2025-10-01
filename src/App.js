import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
// import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();
    return (
        <>
            <Navbar />
            <main className="container">
                    <AnimatePresence exitBeforeEnter>
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<About />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            {/* <Route path="/contact" element={<Contact />} /> */}
                        </Routes>
                    </AnimatePresence>
            </main>
            <Footer />
        </>
    );
}

export default App;
