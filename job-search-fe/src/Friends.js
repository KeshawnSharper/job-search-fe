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
import Friend from './Friend';
import TextField from '@material-ui/core/TextField';
import {getJobs,addJobs,getMessages,getUsers,login,fetchRequests,fetchFriends} from "./action"
import { connect } from "react-redux"
// import "./Friends.css"
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
        width: '83%',
        marginLeft:'18%',
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
  
  
  function Friends(props) {
    
    useEffect(() => {
      props.getJobs()
      props.getUsers()
      props.login()
      props.getMessages()
      props.fetchRequests()
      props.fetchFriends()
      
  
    }, [])
    const [users, setUsers] = useState(props.users)
   
    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    // };
  
    const searchNames = e => {
      console.log(e.target.name)
      console.log(e.target.value)
      if (users.length > 0){
        setUsers(users.filter(element => (
          element[e.target.name] === e.target.value
        )))
      }
      else{
        setUsers(props.users.filter(element => (
          // console.log(element[e.target.name] === e.target.value)
          element[e.target.name] === e.target.value
        )))
        console.log(users)
      }
      console.log(users)
    };
    console.log(props.users)
return (
  <>
      <div class="request-list">
{props.requests.map(e =>
  <Friend request={e}/>
)}
      </div>
      <hr/>
            <div class="wrapper">
  <div class="material-textfield blue">
    <input onChange={searchNames} className="input"type="text" name={"first_name"} required/>
    <label data-content="Company Name"></label>
  </div>
  
  <div class="material-textfield red">
     <input  name={"company"} type="text" required/>
     <label data-content="City">password</label>
  </div>

  <div class="material-textfield blue">
    <input  name={"state"} type="text" required/>
    <label data-content="Job">username</label>
  </div>
  <div class="material-textfield blue">
    <input  name={"state"} type="text" required/>
    <label data-content="Job">username</label>
  </div>
</div>
<div class="friends-list">
{
  users.length > 0 ?
  users.map(e =>
    <Friend friend={e}/>
  )
  :
  props.users.map(e =>
  <Friend friend={e}/>
)}
</div>
</>
)
}

function mapStateToProps (state){
    return {
        
      user:state.user,
      jobs:state.jobs,
      messages:state.messages,
      users:state.users,
      requests:state.requests,
      friends:state.friends,
      }
    }
    const mapDispatchToProps = {
      getJobs,
      addJobs,
      getMessages,
      getUsers,
      login,
      fetchRequests,
      fetchFriends
     
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Friends)