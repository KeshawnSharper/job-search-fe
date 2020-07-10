import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux"
import { login,getUsers,getMessages,getExperiences,addExperiences,addProjects,getProjects,editProfile,editExperience,deleteExperience,editProjects} from "./action"
// import './inbox.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ChatBox from './ChatBox'

const buttonStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width:'20%',
        marginLeft: '60%',
        
      },
    },
  }));
  const menuStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const modalStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      padding: theme.spacing(2, 4, 3),
    },
  }));

  function Inbox(props) {
    useEffect(() => {
      props.getUsers()
      props.getMessages()
      props.login()
      console.log(props.jobs)
  
    }, [])
    const button = buttonStyles();
    const modal = modalStyles();
    const menu = menuStyles();
    const [open, setOpen] = useState(false)
    const [messagesList, setMessagesList] = useState({})
    const [openMessages, setOpenMessages] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const handleOpenMessages = (e) => {
      setOpenMessages(true)
      setMessagesList(e)
      };
      
      const handleOpen = () => {
        setOpenModal(true);
      };
      const handleClose = () => {
        setOpenModal(false);
      };
      var inboxMessages = []
      var arr = []
      var c 
      var messages = props.messages
      var q = 0 
      var d = {}
      for (var q = 0;q <= messages.length - 1; q++ ) {
        if (q === 0){
          if (Number(messages[q].users_id) === Number(localStorage.getItem("id"))){
          c = messages[q].sender_id
          }
          else if (Number(messages[q].sender_id) === Number(localStorage.getItem("id"))){
            
            c = messages[q].users_id
          }
        }
        d = props.users.filter(e => (
          e.id === c
        ))[0]
        console.log(d)
        inboxMessages.push(messages.filter(e => (
          e.users_id === c || e.sender_id === c
        )))
        inboxMessages[inboxMessages.length - 1].push({first_name:d.first_name, picture:d.picture})
        messages = messages.filter(e => (
          e.users_id !== c && e.sender_id !== c
        ))
        q = -1
      }
      console.log(inboxMessages)
      console.log(openMessages)
      return (
        <> 
<div className={"button"} >
     <Button onClick={e => setOpen(!open)} variant="contained" color="primary">
     Primary
   </Button>
  
   {!open ? <div> 
    </div>
    :
    




<List  className={menu.root}>
  {inboxMessages.map(
    e => (
      <ListItem  alignItems="flex-start" onClick={c => handleOpenMessages(e)}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={menu.inline}
              color="textPrimary"
              onClick={e => handleOpen()}
            >
              {e[e.length - 1].first_name}
            </Typography>
            <br></br>
            {e[e.length - 2].note}
          </React.Fragment>
        }
      />
    </ListItem>
    )
  )}
     
    </List>
   }
   {
   <div>
      {openMessages ? <ChatBox messagesList={messagesList} /> : <div> </div>}
      </div>
      }
    </div>
      
       }
  
   
   
 
   </> 
      )
  }
  function mapStateToProps (state){
    return {
    user:state.user,
    users:state.users,
    experiences:state.experiences,
    projects:state.projects,
    messages:state.messages
    }
  }
  const mapDispatchToProps = {
    login,
    getExperiences,
    addExperiences,
    addProjects,
    getProjects,
    editProfile,
    editExperience,
    deleteExperience,
    editProjects,
    getMessages,
    getUsers
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Inbox);
