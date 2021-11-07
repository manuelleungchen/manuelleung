import './App.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence } from 'framer-motion';



function App() {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <Router>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={About} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </AnimatePresence>
            </Router>
        </>
    );
}

export default App;
