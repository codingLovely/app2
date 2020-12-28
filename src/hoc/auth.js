import React,{useEffect} from 'react';
import Axios from 'axios';
import{useDispatch} from 'react-redux'
import {auth} from '../_actions/user_action'




export default function(SpecificComponent, option, adminRoute= null){


    function AuthenticationCheck(props){
        const dispatch = useDispatch();
        //백엔드에 사람의 정보를 요청한다.
        useEffect(()=>{
            //백엔드에 auth 미들웨어로 가게된다. 쿠키안에 토큰을 넣어놨는데,
            //그 쿠키를 이용해서 로그인한 유저인지, 로그인하지 않은 유저인지를 판단해서 
            //다시 react로 던져주는 route부분

            //페이지가 이동할 때 마다 dispatch가 작동할 것->계속 백엔드에 request줌->response 받기 
            dispatch(auth()).then( response => {
                //response에 백엔드에 있는 정보들이 담겨있을 것
                console.log(response)

                //로그인 하지 않은 상태
                if(!response.payload.isAuth){
                    if(option === true){
                        props.history.push('/login')
                    }

                }else{
                    //로그인한 상태
                    //관리자페이지로 가려할 경우
                    if(adminRoute===true&&!response.payload.isAdmin){
                        props.history.push('/')
                    }else{
                        if(option === false)
                        props.history.push('/')
                    }
                }


            })
            
        },[])

        return(
            <SpecificComponent/>
        )

    }
    return AuthenticationCheck
}