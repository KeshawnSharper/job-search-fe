import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link
} from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Job from "./job";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouter from "./ProtectedRouter";
import Jobs from "./jobs"
import Posts from "./posts"
import Register from "./Register";
import Interview from "./interview";
import Friends from "./Friends";
function App(props) {
  console.log(props)
  return (
    <div>
     
    <Router>
   
        {/* <Job/> */}
  
    
    {/* <Route exact path="/item" component={Item} /> */}
    <Route exact path="/" component={Login} />
   
    {/* <Route exact path="/login" component={Login} />
    <Route exact path="/SignUp" component={SignUp} />
    <ProtectedRoute exact path="/delete" component={Search} /> */}

    {/* <ProtectedRoute exact path={`/profile/:username`} component={Profile} /> */}
    <ProtectedRoute exact path="/profile/:id" component={Profile} />
    <ProtectedRouter exact path="/register" component={Register} />
    <ProtectedRouter exact path="/Jobs" component={Jobs} />
    <ProtectedRouter exact path="/posts" component={Posts} />
    <ProtectedRouter exact path="/interview" component={Interview} />
    <ProtectedRouter exact path="/friends" component={Friends} />
    </Router>
  </div>
  );
}

export default App;
