const express = require('express');
const app = express();

const PORT = 4000;

// 클라이언트 연동
const{ User } = require('../models/User');
const{ auth } = require('../middleware/auth');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');



//bodyParser가 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해주는 것
//application/x-www-form-urlencoded 이런식으로된데이터를 분석해서 가져올수 있게 하는것
app.use(bodyParser.urlencoded({extended:true}));
//application/json json타입으로 된 것을 분석해서 가져올수 있게 해주기 위함임. 
app.use(bodyParser.json());
app.use(cookieParser());



//< 몽고 db연결
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yuju:1234@cluster0.tstos.mongodb.net/Cluster0?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))
// 몽고디비 연결 끝>





//클라이언트 서버 연동확인하기
// '/api/host'의 경로로 요청을 받으면 'susan'이라는 값을 응답하는 라우터 작성.
//클라이언트에서 서버에 있는 '/'로 보내는 모든 요청은 'susan'이라는 값으로 응답받을 수 있음
app.get('/',(req,res)=>{
    console.log('실행');
    res.send(`안녕하세요`); //host :'susan'}
})



//회원가입을 위한 라우터
app.post('/api/users/register',(req,res) => {
    //회원강비할떄 필요한 정보들을 client에서 가져오면 
    //그것들을 데이터 베이스에 넣어준다.
    
    //req.body안에는 {id:"hello",password"123} 식으로 들어있는것 req.body안에 들어올수 있는 이유는 bodyParser가 있기 때문
    const user = new User(req.body);

    //몽고 db에서 오는 메소드
    //save해주면 정보들이 user model에 저장된것임
    //callback function다시기술
    user.save((err,userInfo)=>{
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})



//로그인 기능을 위한라우터
app.post('/api/users/login',(req,res)=>{
    //요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email},(err,user)=>{
        if(!user){
            return res.json({
                loginSuccess:false,
                message:"이메일에 해당하는 유저가 없습니다."
            })
        }
     //요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인
     
     user.comparePassword(req.body.password,(err,isMatch)=>{
        //비밀번호가 틀렸을 경우 isMatch값이 없다면,fales
        if(!isMatch)
         return res.json({loginSuccess: false, message :"비밀번호가 틀렸습니다."})

        //비밀번호까지 맞다면 user를 위한 토큰을 생성하기
        user.generateToken((err, user)=>{
            if(err) return res.status(400).send(err);
            // 토큰을 저장한다.
            res.cookie("x_auth",user.token)//쿠키에 토큰저장
            .status(200)
            .json({loginSuccess: true, userId: user._id})
        })
     })
        
    }) 
   
})

//미들웨어 auth추가 
app.get('/api/users/auth',auth,(req,res)=>{
    //여기까지 미들웨어를 통과해왔다는 이야기는 auth가 true라는 말.
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0? false:true,//일반사용자인지 관리자인지
        isAuth: true,
        email:req.user.email,
        name :req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})

//로그아웃 
app.get('/api/users/logout',auth,(req,res)=>{//로그인된상태임 
    //유저를 찾아서,유저모델을 가져와서 데이터 업데이트
    User.findOneAndUpdate({_id: req.user._id},//찾을때는 아이디로 찾음->auth미들웨어에서 가져옴
        {token:""},(err,user) => {
            if(err) return res.json({success: false,err});
            return res.status(200).send({
                success: true
            })
        })//미들웨어에서 가져와서 

})

app.get('/api/hello',(req,res)  => {
    res.send("안녕하세요 ")
})


app.listen(PORT,()=>{
    console.log(`!!!Server On : http://localhost:${PORT}/`);
})