import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {useDispatch} from 'react-redux';
import {registerUser} from '../_actions/user_action';
import {withRouter} from 'react-router-dom';


import React,{Fragment} from 'react';
import {useState} from 'react';
import App from './Register.css';


function Registerpage( props){
  const dispatch = useDispatch();

  const [Email,setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Name, setName] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }
  

  const onSubmitHandler = (event) => {
    event.preventDefault();

    //8자리이상비밀번호
    if(Password < 8){
      return alert('8자리 이상의 비밀번호를 입력하세요.')
    }

    //비밀번호-비밀번호 확인이 같아야하니까
    if(Password !== ConfirmPassword){
      return alert('비밀번호가 같지 않습니다.')
    }

    let body = {
        email: Email,
        password: Password,
        name:Name
    }

    dispatch(registerUser(body))
        .then(response => {
            if (response.payload.success) {
                props.history.push('/login')
            } else {
                alert('회원가입에 실패하였습니다.')
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
                <h3 style={{fontFamily:'Jua'}} id = "register" >회원가입</h3>
                <hr style={{margin:'10px'}}></hr>
                <label style={{fontFamily:'Jua',width:'180px'}}>이메일</label>
                <input style={{width:"300px"}} type = "email" value={Email} onChange={onEmailHandler} />

                <label style={{fontFamily:'Jua'}}>이름</label>
                <input style={{width:"300px"}} type = "text" value={Name} onChange={onNameHandler}/>

                <label style={{fontFamily:'Jua'}}>비밀번호</label>
                <input style={{width:"300px"}} type = "password" value={Password} onChange={onPasswordHandler}/>

                <label style={{fontFamily:'Jua'}}>비밀번호확인</label>
                <input style={{width:"300px"}} type = "password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                <br/>
                <button type="submit">Login</button>
            
            
            </form>
          </div>
          <Footer/>
          </Fragment>
    )
}

export default withRouter(Registerpage)