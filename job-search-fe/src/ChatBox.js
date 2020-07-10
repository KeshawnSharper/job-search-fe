import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux"
import { login,sendMessages,getUsers,getMessages,getExperiences,addExperiences,addProjects,getProjects,editProfile,editExperience,deleteExperience,editProjects} from "./action"
// import './ChatBox.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';


  function ChatBox(props) {
    const [form, setForm] = useState({
      note: "",
      users_id: "",
      read: "",
      sender_id: "",
      time: "",
      date: ""
    });
    useEffect(() => {
      props.getUsers()
      props.login()
      props.getMessages()
      console.log(props.jobs)
     
    }, [])
   
    console.log(props)
  
    const [close, setClose] = useState(false);
    
    const handleChange = e => {
      if (localStorage.getItem("id") === props.messagesList[0].users_id){
        setForm({...form,[e.target.name]:[e.target.value],users_id:props.messagesList[0].users_id,sender_id:props.messagesList[0].sender_id})
      }
      else{
        setForm({...form,[e.target.name]:e.target.value,sender_id:props.messagesList[0].users_id,users_id:props.messagesList[0].sender_id})
      }

      console.log(form)
    }
    const sendMessage = e => {
      e.preventDefault()
      props.sendMessages(form)
    }
    
    

     var first_name =props.messagesList.filter(e => (
      e.id >= 0 === false
    ))[0].first_name
     props.messagesList.filter(e => (
       e.id >= 0 
     ))
     console.log(props.messagesList)
     console.log(props.messagesList.filter(e => (
      e.id >= 0 
    )))
    console.log(props.user.id)
    console.log(props.messagesList[0].users_id)
      return (
        <div>
        {
    <div className="wrapper">
		<div className="chat-box">
      

			<div className="chat-head" onClick={e => setClose(!close)}>
        
				<h2>{first_name}</h2>
			</div>
      {
        !close ? 
			<div className="chat-body">
				<div className="msg-insert">
{props.messagesList.filter(e => (
  e.id >= 0 
)).map(
  e => (
    <div className={Number(props.user.id) === Number(e.users_id) ? "msg-receive" : "msg-send"}> {e.note} </div>
  )
)}
</div>

				<div className="chat-text">
        <form onSubmit={e => sendMessage(e)}>
					<input onChange={handleChange} name="note" value={form.note} type='text'/>
          
          </form>
				</div>
        
			</div>
      : <div> </div>
      }

		</div>
    </div>
                

      }

      </div>
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
    getUsers,
    sendMessages
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ChatBox);
