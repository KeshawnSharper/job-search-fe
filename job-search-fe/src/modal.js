  import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Jobs from "./job";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRouter from "./ProtectedRouter";

import Register from "./Register";

function Modal() {
  return (
    <div id="myModal" class="modal">

<div class="modal-content">
  <span class="close">&times;</span>
  <p>Some text in the Modal..</p>
</div>
  </div>
  );
}

export default Modal;

  