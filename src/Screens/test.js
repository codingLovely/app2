import Header from '../Components/Header';
import Footer from '../Components/Footer';
import React,{Fragment} from 'react';
import axios from 'axios';



function Registerpage( props){

  const onClickHandler = () =>{
    axios.get('/api/users/logout')
    .then(response => {
      if(response.data.success){
        props.history.push("/")
      } else {
        alert('로그아웃에 실패하였습니다.')
      }
    })
  }
    return (
      <Fragment>
      <Header/>
          <div style={{display:'flex', justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
          
               
                <button onClick={onClickHandler}>로그아웃</button>
            
          </div>
          <Footer/>
          </Fragment>
    )
}

export default Registerpage