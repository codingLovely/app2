import { Component, Fragment } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
class Item extends Component {
    render() {
      return (  
        <Fragment>
          <Header/>
          <h1>ItemPage입니더~~</h1>
          <Footer/>
        </Fragment>
      );
    }
  }
  
  export default Item;