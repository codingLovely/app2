import './App.css';
import { Component } from 'react';
import {Router,Route,Redirect,Switch, Link} from "react-router-dom";
import Write from'./Screens/Write';
import Item from'./Screens/Item';
import LoginPage from './Screens/LoginPage';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Content1 from './Components/Content1';
import Content2 from './Components/Content2';
import Footer from './Components/Footer';

class Home extends Component {
  render() {
    return (
      <div id="wrap">
        <Router>
          <Header>
                <Route path = "/write" component = {Write}/>
                <Route path = "/item" component = {Item}/>
                <Router path = "/LoginPage" component ={LoginPage}/>
          </Header>
        </Router>
        <Banner></Banner>
        <Content1></Content1>
        <Content2></Content2>
        <Footer></Footer>
     </div>
    );
  }
}

export default Home;
