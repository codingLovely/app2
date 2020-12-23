
const{ User } = require('../models/User');

let auth =(req, res, next) => {

    //인증처리를 하는 곳 

    //인증처리하기
    //클라이언트 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth;

    //토크을 복호화 한후 유저를 찾는다.
    User.findByToken(token, (err,user) => {
        if(err) throw err;
        if(!user)return res.json({isAuth:false,error:true})

        req.token = token;
        req.user = user;
        next();//미들웨어에 갇혀있지 않고 서버로 보내주기위해서 
    })
    //유저가 있으면 인증 o
    //유저가 있으면 인증 x

}


module.exports = { auth };