import React, { useState,useEffect } from 'react';
import axios from "axios";
import { connect } from "react-redux"
import { getUsers,login,getExperiences,getSkills,addExperiences,addProjects,getProjects,editProfile,editExperience,deleteExperience,editProjects} from "./action"
// import './Profile.scss';
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
import Modal from '@material-ui/core/Modal';


const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

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
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));

function Profile(props) {
    
  const classes = gridStyles();
  const modal = modalStyles();
  const gridContainer = grid();
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
 
  useEffect(() => {
    props.login()

    console.log(props.match.params.id)
    props.getExperiences(props.match.params.id)
    props.getProjects(props.match.params.id)
    props.getUsers(props.match.params.id)
    props.getSkills(props.match.params.id)

  }, [])
  // setUser(props.users)
console.log(props.users)
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
    localStorage.setItem("id",props.user.id)
    setImage(file.secure_url)
    console.log(file.secure_url)
    setLoading(false)

 
  }
  const [experienceForm, setExperienceForm] = useState({
    "description":"",
    "company":"",
    "date_started":"",
    "date_ended":"",
    "location":"",
    "users_id":"",
    "role":"",
    
  })
  const [editExperience, setEditExperience] = useState({
    "description":"",
    "company":"",
    "date_started":"",
    "date_ended":"",
    "location":"",
    "users_id":"",
    "role":"",
    "id":"",
    
    
  })
  
  const [editProjectForm, setEditProjectForm] = useState({
    "description":"",
    "name":"",
    "date_started":"",
    "date_ended":"",
    "users_id":"",
    "role":"",
    
  })
  const [projectForm, setProjectForm] = useState({
    "description":"",
    "name":"",
    "date_started":"",
    "date_ended":"",
    "users_id":"",
    "role":"",
    
  })

  const [editForm, setEditForm] = useState({
    "first_name":"",
    "last_name":"",
    "email":localStorage.getItem("username"),
    "portfolio":"",
    "current_location":"",
    "birthday":"",
    "high_school":"",
    "college":"",
    "role":"",
    "online":true,
    "gender":"",
    "username":localStorage.getItem("username"),
    "bio":"",
    "picture":"",
    "id":"",
  })

const addExperience = e => {
  e.preventDefault()
  localStorage.setItem("id",props.user.id)
  props.addExperiences(experienceForm,props)
}
const addProject = e => {
  e.preventDefault()
  localStorage.setItem("id",props.user.id)
  props.addProjects(projectForm,props)
}
const editProfile = e => {
  e.preventDefault()
  props.editProfile(editForm,props)
}
const submitEditExperience = e => {
  e.preventDefault()
  localStorage.setItem("id",props.user.id)
  props.editExperience(editExperience,props)
}
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const editProject = e => {
    e.preventDefault()
    localStorage.setItem("id",props.user.id)
    props.editProjects(editProjectForm,props)
  }

  const handleOpen = (prop) => {
    localStorage.setItem("id",props.user.id)
    setExperienceForm({...experienceForm,users_id:props.user.id})
    setProjectForm({...projectForm,users_id:props.user.id})
    setEditForm({...editForm,id:props.user.id})
    setEditForm({...editForm,id:props.user.id,bio:props.user.bio,picture:props.user.picture,first_name:props.user.first_name,last_name:props.user.last_name,email:props.user.email,current_location:props.user.current_location,birthday:props.user.birthday,high_school:props.user.high_school,college:props.user.college,role:props.user.role,gender:props.user.gender,portfolio:props.user.portfolio,company:props.user.company})
    setOpen(true);
    setEditExperience(prop)
    setEditProjectForm(prop)
  };

  const handleClose = () => {
    localStorage.setItem("id",props.user.id)
    setOpen(false);
  };
  const changeExperience = e => {
    localStorage.setItem("id",props.user.id)
    setExperienceForm({...experienceForm,[e.target.name]:e.target.value})
    console.log(experienceForm)
}
const changeProject = e => {
  localStorage.setItem("id",props.user.id)
  setProjectForm({...projectForm,[e.target.name]:e.target.value})
  console.log(projectForm)
}
const changeProfile = e => {
  localStorage.setItem("id",props.user.id)
  setEditForm({...editForm,[e.target.name]:e.target.value})
  console.log(editForm)
}

const changeEditExperience = e => {
  localStorage.setItem("id",props.user.id)
  setEditExperience({...editExperience,[e.target.name]:e.target.value})
  console.log(editExperience)
}

const changeProjectEdit = e => {
  localStorage.setItem("id",props.user.id)
  setEditProjectForm({...editProjectForm,[e.target.name]:e.target.value})
  console.log(editProjectForm)
}
  const body = (
    <form>
            
      <fieldset>
       
        
        <label for="bio">Description:</label>
          <textarea id="bio" name="description"
          onChange={changeExperience}
          value={experienceForm.description}></textarea>

<label for="name">Company:</label>
        <input type="text" id="name" name="company"
         onChange={changeExperience}
         value={experienceForm.company}/>

         <label for="name">Start Date:</label>
        <input type="text" id="name" name="date_started"
         onChange={changeExperience}
         value={experienceForm.date_started}/>

<label for="name">End Date:</label>
        <input type="text" id="name" name="date_ended"
         onChange={changeExperience}
         value={experienceForm.date_ended}/>

<label for="name">location:</label>
        <input type="text" id="name" name="location"
         onChange={changeExperience}
         value={experienceForm.location}/>

<label for="name">Role:</label>
        <input type="text" id="name" name="role"
         onChange={changeExperience}
         value={experienceForm.role}/>
      </fieldset>

      <button onClick={e => editProfile(e)}>dfrewerh</button>
      
{/* </div> */}
  // )
    {/* //   <button onClick={e => signup(e)}>Sign Up</button> */}
     </form>)
     const projectBody = (
      <form>
              
        <fieldset>
         
          
          <label for="bio">Description:</label>
            <textarea id="bio" name="description"
            onChange={changeProject}
            value={projectForm.description}></textarea>
  
  <label for="name">Name:</label>
          <input type="text" id="name" name="name"
           onChange={changeProject}
           value={projectForm.name}/>
  
           <label for="name">Start Date:</label>
          <input type="text" id="name" name="date_started"
           onChange={changeProject}
           value={projectForm.date_started}/>
  
  <label for="name">End Date:</label>
          <input type="text" id="name" name="date_ended"
           onChange={changeProject}
           value={projectForm.date_ended}/>
  
  
  <label for="name">Role:</label>
          <input type="text" id="name" name="role"
           onChange={changeProject}
           value={projectForm.role}/>
        </fieldset>
        
        
        <button onClick={e => addProject(e)}>dfrewerh</button>
        
  {/* </div> */}
    
      {/* //   <button onClick={e => signup(e)}>Sign Up</button> */}
       </form>)

const editBody = (
  <form>
      
      <h1>Sign Up</h1>
      
      <fieldset>
        <label for="name">First Name:</label>
        <input type="text" id="name" name="first_name"
         onChange={changeProfile}
         value={editForm.first_name}/>
    

        <label for="name">Last Name:</label>
        <input type="text" id="name" name="last_name"
        onChange={changeProfile}
        value={editForm.last_name}/>
        
        <label for="mail">Portfolio:</label>
        <input type="text" id="mail" name="portfolio"
        onChange={changeProfile}
        value={editForm.portfolio}
        />
{/*         
        <label for="password">Location:</label>
        <input type="text" id="password" name="current_location"
        onChange={changeProfile}
        value={editForm.current_location}/>

        <label for="role">Role:</label>
        <input type="text" id="password" name="role"
        onChange={changeProfile}
        value={editForm.role}/>

         <label for="college">College:</label>
        <input type="text" id="password" name="college"
        onChange={changeProfile}
        value={editForm.college}/>

    <label for="college">High School:</label>
        <input type="text" id="password" name="high_school"
        onChange={changeProfile}
        value={editForm.high_school}/>

<label for="college">Birthday:</label>
        <input type="text" id="password" name="birthday"
        onChange={changeProfile}
        value={editForm.birthday}/>
        
        <label for="bio">Biography:</label>
          <textarea id="bio" name="bio"
          onChange={changeProfile}
          value={editForm.bio}></textarea> */}

        <label>Gender:</label>
        <input type="radio" id="under_13" value="Male" name="gender" onChange={changeProfile}/><label for="under_13" class="light">Male</label>
        <input type="radio" id="under_13" value="Female" name="gender" onChange={changeProfile}/><label for="over_13" class="light">Female</label>
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
      <button onClick={e => editProfile(e)}>Sign Up</button>
    </form>)

const editExperienceBody = (
  <form>
            
      <fieldset>
       
        
        <label for="bio">Description:</label>
          <textarea id="bio" name="description"
          onChange={changeEditExperience}
          value={editExperience.description}></textarea>

<label for="name">Company:</label>
        <input type="text" id="name" name="company"
         onChange={changeEditExperience}
         value={editExperience.company}/>

         <label for="name">Start Date:</label>
        <input type="text" id="name" name="date_started"
         onChange={changeEditExperience}
         value={editExperience.date_started}/>

<label for="name">End Date:</label>
        <input type="text" id="name" name="date_ended"
         onChange={changeEditExperience}
         value={editExperience.date_ended}/>

<label for="name">location:</label>
        <input type="text" id="name" name="location"
         onChange={changeEditExperience}
         value={editExperience.location}/>

<label for="name">Role:</label>
        <input type="text" id="name" name="role"
         onChange={changeEditExperience}
         value={editExperience.role}/>
      </fieldset>

      <button onClick={e => submitEditExperience(e)}>dfrewerh</button>
      
{/* </div> */}
  // )
    {/* //   <button onClick={e => signup(e)}>Sign Up</button> */}
     </form>)

const editProjectBody = (
  <form>
          
    <fieldset>
     
      
      <label for="bio">Description:</label>
        <textarea id="bio" name="description"
        onChange={changeProjectEdit}
        value={editProjectForm.description}></textarea>

<label for="name">Name:</label>
      <input type="text" id="name" name="name"
       onChange={changeProjectEdit}
       value={editProjectForm.name}/>

       <label for="name">Start Date:</label>
      <input type="text" id="name" name="date_started"
       onChange={changeProjectEdit}
       value={editProjectForm.date_started}/>

<label for="name">End Date:</label>
      <input type="text" id="name" name="date_ended"
       onChange={changeProjectEdit}
       value={editProjectForm.date_ended}/>


<label for="name">Role:</label>
      <input type="text" id="name" name="role"
       onChange={changeProjectEdit}
       value={editProjectForm.role}/>
    </fieldset>
    
    
    <button onClick={e => editProject(e)}>dfrewerh</button>
    
{/* </div> */}

  {/* //   <button onClick={e => signup(e)}>Sign Up</button> */}
   </form>)
  return (
    <div>
    { !props.users ? 
    <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
       <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
    
    :
<div className="content-wrap">
        <img className="profile-img col-narrow" src={props.users.picture} alt="Erik Robles"/>
        <div className="col-wide">
    <h1>{props.users.first_name} {props.users.last_name}</h1>
        <h2>{props.users.role}</h2>
        <p>{props.users.bio}
        </p>
       </div>
    
    {/* <main> 
        <!-- // Work Experience --> */}
        <section id="work" className="work">
                <div className="content-wrap">
            <h2>Work Experience</h2>
            

            {/* <!-- Job Details: copy this whole block to add more jobs --> */}
            <div className={classes.root}>
      <Grid container spacing={3}>
        {
          props.experiences.map( e => 
            (
              <> 
 <Grid item xs={2}>
 <Paper className={classes.paper}>{e.company}</Paper>
 <br/>
 {e.role}
 <br/>
 {e.date_started} - {e.date_ended}
</Grid>
<Grid item xs={10}>
 <p className={"description"}>{e.description}</p>
</Grid>
</> 
)
          )
        }
       
        </Grid>
        </div>
        </div>
                  </section>
                  
        {/* <!-- // Skills Section Experience --> */}
        <section id="skill" className="skill">
                <div className="content-wrap">
            <h2>Skills</h2>
            

            {/* <!-- Job Details: copy this whole block to add more jobs --> */}
            <div className="col-narrow">
                
                {
          props.skills.map( e => 
            (
              <> 
 <h4>{e.name}</h4>
</> 
)
          )
            }
                
            </div>
            
                    
            {/* <div className="col-wide job-description"> */}
                {/* <h3>Links</h3> */}
                {/* <!-- Add as many paragraphs as you need. --> */}
            {/* <p>
              <a href="https://github.com/ErikRobles">GitHub</a>                
            </p>
                <p>This is the repositories where I house my current Projects.</p>
            <p>
              <a href="https://codepen.io/ErikJamesRobles/">CodePen.io</a>                
            </p>
                <p>This is where I test out code for future projects.</p>
            <p>
              <a href="http://www.rrspark.com/">WordPress Public Blog</a>                
            </p>
                <p>I use this blog to showcase what I have been working on and share my experience as a developer in the making.</p>
               </div> */}
            </div>
                  </section>

        {/* <!-- // Education --> */}
        
        <section id="education" className="education">
            <div className="content-wrap">
                <h2>Education</h2>
            {/* <!-- School details: copy this whole block to add more schools. --> */}
                <h3>North Thurston High School, 1987</h3>
            <p>Graduated</p>
               <h2>Post Graduation</h2>
            {/* <!-- Add as many paragraphs as you need. --> */}
            <p>After Finishing High School, I went into the work force looking for a carreer that suited me. As I am auto-didactic, I concentrated my efforts on learning a trade. I spend a good number of years as the owner of a small carpet and vinyl installation company.</p><br/>
            
            <p>Ready for a carreer change, I removed myself from the installation industry and began to study in order to become an English Teacher. As I have always been intrested in technology, I decided to put my auto-didactic skills to use and learn programming with the hopes of providing an engaging user experience for learners around the world wanting to learn a new language.</p><br/>
                
            <p>I finished my Front-End Development track with Treehouse in December of 2018 and continue to study in order to become the best I can be.</p>
                 </div>
                {/* <!-- End of school details. --> */}
            </section>
        {/* </main> */}
    
    {/* <!-- // Footer & contact info --> */}
    <footer id="contact">
        <div className="content-wrap">
        <h2>I'm looking forward to hearing from you!</h2>
        
        {/* <!-- Social media and contact links. Add or remove any networks. --> */}
        <div className="contact-info">
            <a href="mailto:erobles@openuplanguages.com"><i className="fa fa-envelope-open" area-hidden="true" alt="mail icon"></i></a>
<a href="https://www.linkedin.com/in/erik-james-245067a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BDvm%2Feo5WSNSVPlQJ7mAlng%3D%3D" target="_blank"><i className="fa fa-linkedin" aria-hidden="true" alt="LinkedIn"></i>
<span className="sr-only">Battery level: 50%</span></a>
          <a href="https://github.com/ErikRobles" target="_blank"><i className="fa fa-github" aria-hidden="true" alt="GitHub"></i>
<span className="sr-only">Battery level: 50%</span></a>
          <a href="https://codepen.io/ErikJamesRobles/" target="_blank"><i className="fa fa-codepen" aria-hidden="true" alt="CodePen"></i>
<span className="sr-only">Battery level: 50%</span></a>
        </div>

        <p>Copyright 2018 by Erik Robles</p>
        </div>
        </footer>
        </div>
    }
        </div>

  )
}
function mapStateToProps (state){
    return {
    user:state.user,
    experiences:state.experiences,
    projects:state.projects,
    users:state.users,
    skills:state.skills,
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
    getUsers,
    getSkills,
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Profile);
