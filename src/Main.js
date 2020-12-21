import './App.css';
import { Component } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Content1 from './Components/Content1';
import Content2 from './Components/Content2';
import Footer from './Components/Footer';


class Main extends Component {
  render() {
    return (
      <div id="wrap">
        <Header />
        <Banner/>
        <Content1></Content1>
        <Content2></Content2>
        <Footer></Footer>
     </div>
    );
  }
}

export default Main;
