const express = require('express');
const app = express();

const PORT = 4000;




//< 몽고 db연결
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yuju:1234@cluster0.tstos.mongodb.net/Cluster0?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))
// 몽고디비 연결 끝>





//클라이언트 서버 연동확인하기
// '/api/host'의 경로로 요청을 받으면 'susan'이라는 값을 응답하는 라우터 작성.
//클라이언트에서 서버에 있는 '/api/host'로 보내는 모든 요청은 'susan'이라는 값으로 응답받을 수 있음
app.get('/api/host',(req,res)=>{
    res.send({ host :'susan'});
})

app.listen(PORT,()=>{
    console.log(`!!!Server On : http://localhost:${PORT}/`);
})