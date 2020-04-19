import React from "react";
import './style/App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { AppBar, Tabs, Tab} from '@material-ui/core'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#22533E",
    background: "rgba(76, 175, 80, 0.3)"
    
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="applyAll">
      <Navbar style={classes.root}/>
      <AppBar position="static" id="opChange">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}      
          aria-label="nav tabs example"
        >
          <LinkTab className="titleFont tabSize" label="About" {...a11yProps(0)} />
          <LinkTab className="titleFont tabSize" label="Contact"  {...a11yProps(1)} />
          <LinkTab className="titleFont tabSize" label="Projects"  {...a11yProps(2)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={1}>             
          <Contact />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Projects />
        </TabPanel>
    </div>
  );
}
