// import { Component, Fragment } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {useDispatch} from 'react-redux';
import {loginUser} from '../_actions/user_action';
import React,{Fragment} from 'react';
import {useState} from 'react';
import {withRouter} from 'react-router-dom';



function LoginPage( props){
  const dispatch = useDispatch();

  const [Email,setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
        email: Email,
        password: Password
    }

    dispatch(loginUser(body))
        .then(response => {
            if (response.payload.loginSuccess) {
                props.history.push('/')
            } else {
                alert('아이디와 비밀번호를 확인하세요')
            }
        })
      }

    return (
      <Fragment>
      <Header/>
          <div style={{display:'flex', justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
            <form style = {{display:'flex', flexDirection:'column'}}
              onSubmit={onSubmitHandler}
            >
              
                <label style={{fontFamily:'Jua',width:'180px'}}>Email</label>
                <input style={{width:"300px"}} type = "email" value={Email} onChange={onEmailHandler} />
                <label style={{fontFamily:'Jua'}}>Password</label>
                <input style={{width:"300px"}} type = "password" value={Password} onChange={onPasswordHandler}/>
                <br/>
                <button type="submit">Login</button>
            
            
            </form>
          </div>
          <Footer/>
          </Fragment>
    )
}

export default withRouter(LoginPage)