// Components/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Write from'./Screens/Write';
import Item from'./Screens/Item';
import LoginPage from './Screens/LoginPage';
import Registerpage from './Screens/RegisterPage';
import LandingPage from './Screens/test';
import Main from './Main';
import Auth from './hoc/auth';


export default () => (
  <Router>
   
        <Route exact path="/" component={Auth(Main,null)} />
        <Route path="/write" component={Auth(Write,true)} /> 
        <Route path="/item" component={Auth(Item,null)} />
        <Route path="/login" component={Auth(LoginPage,false)}/>
        <Route path="/counsel" component={Auth(LandingPage,true)}/>
        <Route path="/register" component={Auth(Registerpage,false)}/>
  
  </Router>
)