import { login,post,fetchPosts,sendMessages,getUsers,getMessages,getExperiences,addExperiences,addProjects,getProjects,editProfile,editExperience,deleteExperience,editProjects} from "./action"
import { connect } from "react-redux"
import React, { useState,useEffect } from 'react';
import Post from "./post";
// import "./posts.css";

function Posts(props) {
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
    const [form, setForm] = useState({
      note: "",
      users_id: localStorage.getItem("id"),
      likes: 0,
      comments: 0,
      time: new Date().toLocaleTimeString(),
      date: today 
    });
    useEffect(() => {
      props.getUsers()
      props.login()
      props.getMessages()
      props.fetchPosts()
      console.log(props.jobs)
     
    }, [])
    const addPost = e => {
        e.preventDefault()
        props.post(form,props)
      }
      const changeForm = e => {
        setForm({...form,note:e.target.value})
        console.log(form)
      }
    return (
        <>
        <div class="mainDiv">
	<div class="title">
		<p><i class="fa fa-times" aria-hidden="true"></i>
</p>
	</div>
<div id="body">
	<div class="imtcontainer">
		{/* <div class="img">
				<img src="http://themarketmogul.com/wp-content/uploads/avatars/3321/cb72c2d6008ea815d74b7f27d1131a26-bpfull-180x180.jpg"/>
		</div> */}
		<div class="textarea">
			<textarea onChange={changeForm} changeFormonkeyup="InputAdjust(this)" placeholder="what's on you mind?"></textarea>
		</div>
	</div>
<div class="icons">
	 <div class="photos">
  	
  	<a href="#">
     <i class="fa fa-picture-o" aria-hidden="true"></i>
  	Photo/Video</a>
  </div>
  <div class="photos submit">
  <a href="#" onClick={e => addPost(e)}>
  	Submit</a>
  </div>
</div>
</div>
</div>
{props.posts.map(e => 
    <Post post={e}/> 
)}
        </>
    )
}
function mapStateToProps (state){
    return {
    posts:state.posts,
    user:state.user,
  jobs:state.jobs,
  messages:state.messages,
  users:state.users,
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
    sendMessages,
    fetchPosts,
    post
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Posts);