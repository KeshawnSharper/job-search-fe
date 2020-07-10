import logo from './logo.svg';
// import './Login.scss';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import React, { useState,useEffect } from 'react';
import axios from "axios";
import { connect } from "react-redux"
import { login } from "./action"
import { signin } from "./action"


function Login(props) {
  const [signup, setSignup] = useState(false);
    const [signinForm, setSigninForm] = useState({
        username: '',
        password: ''
    })
    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        email: '',
    })
   
    const changeSignin = e => {
        e.preventDefault()
        setSigninForm({...signinForm,[e.target.name]:e.target.value})
        console.log(signinForm)
    }
    const changeRegister = e => {
        e.preventDefault()
        setRegisterForm({...registerForm,[e.target.name]:e.target.value})
        console.log(registerForm)
    }
    
    const register = e => {
        console.log(registerForm)
        axios.post("http://127.0.0.1:8000/auth/users/",registerForm
        // ,

        // {
            // headers: {
            //     'Access-Control-Allow-Origin': '*',
            //     'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            //     Access-Control-Allow-Headers: Content-Type
            // }}
            )
        
       .then(res => {
        //  localStorage.setItem("name",loginForm.userName)
        // signin({
        //     username: registerForm.username,
        //     password: registerForm.password
        // })
        localStorage.setItem("username",registerForm.username)
        localStorage.setItem("email",registerForm.email)
        localStorage.setItem("password",registerForm.password)
        console.log(res.data)
        props.history.push(`/register`)
       })
       .catch(err => console.log(err))
    }
  // useEffect(() => {
  //   if (localStorage.getItem("token")){
  //     props.login()
  //     props.history.push(`/profile`)
  //   }
  
  // }, []);
    
 
  return (
    
         <div>

{localStorage.getItem("token") ? 
<svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
</svg>

:
<div>
<p className="tip">Click on button in image container</p>
<div className={signup ? "cont s--signup" : "cont" }>
  <div className="form sign-in">
  <form>
    <h2>Welcome back,</h2>
    <label>
      <span>Email</span>
      <input
      type='text'
      name='username'
      required
      onChange={changeSignin}
      value={signinForm.username}/>
    </label>
    <label>
      <span>Password</span>
      <input type="password" 
      type='text'
      name='password'
      required
      onChange={changeSignin}
      value={signinForm.password}/>
    </label>
    <p className="forgot-pass">Forgot password?</p>
    <button type="button" className="submit" onClick={() => props.signin(signinForm,props)}>Sign In</button>
    </form>
    <button type="button" className="fb-btn">Connect with <span>facebook</span></button>
  </div>
  <div className="sub-cont">
    <div className="img">
      <div className="img__text m--up">
        <h2>New here?</h2>
        <p>Sign up and discover great amount of new opportunities!</p>
      </div>
      <div className="img__text m--in">
        <h2>One of us?</h2>
        <p>If you already has an account, just sign in. We've missed you!</p>
      </div>
      <div className="img__btn" onClick={() => setSignup(!signup)}>
        <span className="m--up">Sign Up</span>
        <span className="m--in">Sign In</span>
      </div>
    </div>
    <div className="form sign-up">
    <form>
      <h2>Time to feel like home,</h2>
      <label>
        <span>Name</span>
        <input 
        type="text" 
        name='username'
        required
        onChange={changeRegister}
        value={registerForm.username}
        />
      </label>
      <label>
        <span>Email</span>
        <input type="email" 
         name='email'
         required
         onChange={changeRegister}
         value={registerForm.email}/>
      </label>
      <label>
        <span>Password</span>
        <input type="password" 
        name='password'
        required
        onChange={changeRegister}
        value={registerForm.password}/>
      </label>
      <button type="button" className="submit" onClick={register}>Sign Up</button>
      <button type="button" className="fb-btn">Join with <span>facebook</span></button>
      </form>
    </div>
  </div>
  
</div>
</div>

}
         </div>
  )
}
function mapStateToProps (state){
    return {
    user:state.user
    }
  }
  const mapDispatchToProps = {
    login,
    signin
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Login);
