import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                {/* <Footer /> */}
            </Router>
        </>
    );
}

export default App;
