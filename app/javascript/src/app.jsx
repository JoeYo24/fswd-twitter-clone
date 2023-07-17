import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home.jsx';
import SignIn from './signIn.jsx';
import SignUp from './signUp.jsx';
import $ from 'jquery';
import FeedRouter from "./feed.jsx";

const App = () => (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users/sign_up' component={SignUp} />
        <Route exact path='/users/sign_in' component={SignIn} />
        <Route path='/feed' component={FeedRouter} />
      </Switch>
    </Router>
  )
  
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <App />,
      document.body.appendChild(document.createElement('div')),
    )
  })
  