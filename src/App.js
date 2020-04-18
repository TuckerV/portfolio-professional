import React from "react";
import './App.css';
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
import { green } from "@material-ui/core/colors";

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
    backgroundColor: "green",
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <Navbar style={classes.root}/>
      <AppBar position="static" className={classes.root}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Page One" {...a11yProps(0)} />
          <LinkTab label="Page Two"  {...a11yProps(1)} />
          <LinkTab label="Page Three"  {...a11yProps(2)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0}>
             <Contact />
        </TabPanel>
        <TabPanel value={value} index={1}>
             <Projects />
        </TabPanel>
        <TabPanel value={value} index={2}>
             <About />
        </TabPanel>
    </div>
  );
}

// export default function App() {

  
//   return (
//     <Router>
//       <div>
//         <Navbar />

//         <Grid container >
          
//         <Button variant="contained" color="primary">
//           <Link to="/">About</Link>
//         </Button>
//         <Button variant="contained" color="secondary">
//           <Link to="/contact">Contact</Link>
//         </Button>
//         <Button variant="contained" color="primary">
//           <Link to="/projects">Projects</Link>
//         </Button>

//         <Switch>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//           <Route path="/projects">
//             <Projects />
//           </Route>
//           <Route path="/">
//             <About />
//           </Route>
//         </Switch>
//         </Grid>
//       </div>
//     </Router>
//   );
// }
