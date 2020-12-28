import './App.css';
import { Component } from 'react';
import Routes from './Routes';
import axios from 'axios';

class App extends Component {
  // //설정해주는 부분들 객체의 속성값들
  // //응답 받은 'susan'이란 값은 다시 setState 함수를 통해 host라는 state에 할당되게 되고 화면을 다시 재랜더 한다. 
  constructor(props){
    super(props);
    this.state={
      host:""
    };
  }

  componentDidMount(){
    axios.get('/api')
    .then(response => {
      this.setState({host: response.data.host})
    })
  }
  
  //만약 서버가 연동되어 있지 않다면 클라이언트는 '/api/host'에 접근할 수 없기 때문에, host라는 state는 빈 값만 가지게 되고, 
  //화면에 "Welcome to Blog!"만을 출력하게 될 것이다.
  //제대로 연동이 되어있다면 "Welcome to susan Blog!"를 출력할 수 있게 된다.
  
  //출력해주는 부분들,화면에 나오는 부분들 
  render() {
    return (
      
      <div id="wrap" >
        <Routes/>
      </div>
    );
  }
}

export default App;
