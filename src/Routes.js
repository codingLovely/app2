// Components/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Write from'./Screens/Write';
import Item from'./Screens/Item';
import Main from './Main';

export default () => (
  <Router>
        <Route exact path="/" component={Main} />
        <Route path="/write" component={Write} /> 
        <Route path="/item" component={Item} />
  </Router>
)