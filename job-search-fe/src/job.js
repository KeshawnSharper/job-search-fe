import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import Inbox from './inbox';
import Modal from '@material-ui/core/Modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
// import './job.scss'
import {getJobs,addJobs,getMessages,getUsers,login,} from "./action"
import { connect } from "react-redux"
import Jobs from "./jobs"
import {BrowserRouter as Router,Route,NavLink,Link} from "react-router-dom";

const search = makeStyles((theme) => ({
  root: {
    '& > *': {
        display: 'flex',
    },
  },
}));



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  const tabStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '55%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
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
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
const buttonStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width:'20%',
        marginLeft: '60%',
        bottom: '0',
      },
    },
  }));


function Job(props) {
  
  useEffect(() => {
    props.getJobs()
    props.getUsers()
    props.login()
    props.getMessages()
    console.log(props.jobs)

  }, [])

  const classes = useStyles();
  const tabClasses = tabStyles();
  const [value, setValue] = React.useState(0);
  const searchclasses = search();
  const [jobs, setJobs] = useState(props.jobs)
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const searchCompanies = e => {
    if (jobs.length > 0){
      setJobs(jobs.filter(element => (
        element[e.target.name] === e.target.value
      )))
    }
    else{
      setJobs(props.jobs.filter(element => (
        element[e.target.name] === e.target.value
      )))
    }
    console.log(jobs)
  };
  const searchCities = e => {
    if (jobs.length > 0){
      setJobs(jobs.filter(element => (
        element[e.target.name] === e.target.value
      )))
    }
    else{
      setJobs(props.jobs.filter(element => (
        element[e.target.name] === e.target.value
      )))
    }
    console.log(jobs)
  };
  const searchJobs = e => {
    if (jobs.length > 0){
      setJobs(jobs.filter(element => (
        element[e.target.name] === e.target.value
      )))
    }
    else{
      setJobs(props.jobs.filter(element => (
        element[e.target.name] === e.target.value
      )))
    }
    
    console.log(jobs)
  };
  return (
    
    <div>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
       <img className={"avatar"} alt="Remy Sharp" src={props.user.picture} />
       <h2>{props.user.first_name} {props.user.last_name}</h2>
        <div className={classes.toolbar} />
        <Divider />
      
        <List>
          {['Profile', 'Jobs', 'Friends', 'Posts'].map((text, index) => (
            <Link to={`/${text}`}>
            <ListItem button key={text} >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}
          <NavLink to='/' exact activeClassName="activeLink" activeStyle={{
    fontWeight: "bold",
    color: "red"   }}>
            <ListItem button key='Login' >
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary='Login' />
            </ListItem>
            </NavLink>
        </List>
        <Divider />
        <List>
          {['Log Out'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <Route path="/home/Jobs" component={Jobs} />
    </div>
 
    <Inbox/>
   </div>
   
  );
}
function mapStateToProps (state){
return {
    
  user:state.user,
  jobs:state.jobs,
  messages:state.messages,
  users:state.users,
  }
}
const mapDispatchToProps = {
  getJobs,
  addJobs,
  getMessages,
  getUsers,
  login,
  
 
}

export default connect(mapStateToProps,mapDispatchToProps)(Job)
