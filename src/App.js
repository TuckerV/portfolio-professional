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
import Navbar from "./components/Navbar";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
            <Navbar />
            <Grid container spacing={4}>
              <Grid item>
                <Button variant="contained" color="primary">
                  <Link to="/">About</Link>
                </Button>
              </Grid>
              
              <Grid item>
                <Button variant="contained" color="secondary">
                  <Link to="/contact">Contact</Link>
                </Button>
              </Grid>
              
              <Grid item>
                <Button variant="contained" color="danger">
                  <Link to="/contact">Projects</Link>
                </Button>
              </Grid>
            </Grid>
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
