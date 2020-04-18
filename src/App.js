import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Button from '@material-ui/core/Button';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
            <Button variant="contained" to="/" color="primary">
              <Link to="/">About</Link>
            </Button>
            <Button variant="contained" to="/" color="primary">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button variant="contained" to="/" color="primary">
              <Link to="/projects">Projects</Link>
            </Button>
        </nav>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
