import React, { useState } from 'react';
import axios from "axios";
import { connect } from "react-redux"
import { login } from "./action"
import './Register.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const grid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
      padding: '2.5rem',
    },
  },
}));
function Register(props) {

  const [registerForm, setRegisterForm] = useState({
    "first_name":"",
    "last_name":"",
    "email":localStorage.getItem("username"),
    "portfolio":"",
    "current_location":"",
    "birthday":"",
    "high_school":"",
    "college":"",
    "role":"",
    "online":false,
    "gender":"",
    "username":localStorage.getItem("username"),
    "bio":"",
    "picture":"",
    
  })
  const changeRegister = e => {
    
    setRegisterForm({...registerForm,[e.target.name]:e.target.value})
    console.log(registerForm)
}
  const signup = e => {
    e.preventDefault()
    axios.post("http://127.0.0.1:8000/",registerForm)
    
   .then(res => {
    //  localStorage.setItem("name",loginForm.userName)
    localStorage.setItem("token",res.data.auth_token)
    props.login({
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password")
    })
    
    // props.history.push(`/profile`)
    console.log(res.data)
   })
   .catch(err => console.log(err))
    // props.history.push(`/profile/${localStorage.getItem("name")}`)
}
const [image, setImage] = useState('')
const [loading, setLoading] = useState(false)
console.log(props.user)
const uploadImage = async e => {
  const files = e.target.files
  const data = new FormData()
  data.append('file', files[0])
  data.append('upload_preset', 'zdtazmlq')
  setLoading(true)
  const res = await fetch(
    'https://api.cloudinary.com/v1_1/di449masi/image/upload',
    {
      method: 'POST',
      body: data
    }
  )
  const file = await res.json()

  setImage(file.secure_url)
  console.log(file.secure_url)
  setRegisterForm({...registerForm,picture:file.secure_url})
  setLoading(false)
}
  return (
    <div>
<form>
      
      <h1>Sign Up</h1>
      
      <fieldset>
        <label for="name">First Name:</label>
        <input type="text" id="name" name="first_name"
         onChange={changeRegister}
         value={registerForm.first_name}/>
    

        <label for="name">Last Name:</label>
        <input type="text" id="name" name="last_name"
        onChange={changeRegister}
        value={registerForm.last_name}/>
        
        <label for="mail">Portfolio:</label>
        <input type="text" id="mail" name="portfolio"
        onChange={changeRegister}
        value={registerForm.portfolio}
        />
        
        <label for="password">Location:</label>
        <input type="text" id="password" name="current_location"
        onChange={changeRegister}
        value={registerForm.current_location}/>

        <label for="role">Role:</label>
        <input type="text" id="password" name="role"
        onChange={changeRegister}
        value={registerForm.role}/>

         <label for="college">College:</label>
        <input type="text" id="password" name="college"
        onChange={changeRegister}
        value={registerForm.college}/>

    <label for="college">High School:</label>
        <input type="text" id="password" name="high_school"
        onChange={changeRegister}
        value={registerForm.high_school}/>

<label for="college">Birthday:</label>
        <input type="text" id="password" name="birthday"
        onChange={changeRegister}
        value={registerForm.birthday}/>
        
        <label for="bio">Biography:</label>
          <textarea id="bio" name="bio"
          onChange={changeRegister}
          value={registerForm.bio}></textarea>

        <label>Gender:</label>
        <input type="radio" id="under_13" value="Male" name="gender" onChange={changeRegister}/><label for="under_13" class="light">Male</label>
        <input type="radio" id="under_13" value="Female" name="gender" onChange={changeRegister}/><label for="over_13" class="light">Female</label>
      </fieldset>
      
<div className="App">
<h1>Upload Image</h1>
<input
  type="file"
  name="file"
  placeholder="Upload an image"
  onChange={uploadImage}
/>
{loading ? (
  <h3>Loading...</h3>
) : (
  <img src={image} style={{ width: '300px' }} />
)}
</div>
  )
      <button onClick={e => signup(e)}>Sign Up</button>
    </form>
    </div>
  )
  }

function mapStateToProps (state){
    return {
    user:state.user
    }
  }
  const mapDispatchToProps = {
    login
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Register);
