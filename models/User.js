const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;//salt가 몇글자 인지salt를 만들떄 10자리인 salt를 만들어 암호화한다.
const jwt = require('jsonwebtoken');


const UserSchema = mongoose.Schema({
    name :{
        type :String,
        maxlength: 50
    },
    email:{
        type :String,
        trim :true,
        unique : 1
    },
    password:{
        type: String,
        maxlength:150
    },
    role: {
        type: Number,
        default:0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp: {
        type: Number
    }
});



//저장하기전에 무엇을 한다음 다시 server의 save로 간다.
UserSchema.pre('save',function( next ){
    var user = this;
    //비밀번호를 바꿀 때
    if(user.isModified('password')){
         //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds,function(err, salt){
            if(err) return next(err)//에러가 나면 바로 save로 보내기

            bcrypt.hash(user.password,salt,function(err, hash) {
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    }else{
        next()
    }
})



UserSchema.methods.comparePassword = function(plainPassword,cb){
    //plainPassword 123434   암호화된 비밀번호 $2b$10$Zph7Gl6WehT6byuI15FlXuNW/ZzxMjJ0zUpV8YC8PZ1vbbaq51mr
    //두가지가 같아야 한다. 
    //암호화된 비밀번호를 다시 복호화 할수 없기때문에
    //plainPassword를 암호화해서 암호화된 비밀번호와 비교해서확인해야한다.
    bcrypt.compare(plainPassword, this.password, function(err, isMatched){
        if(err) return cb(err);
        cb(null, isMatched);
    }); 
}

UserSchema.methods.generateToken = function(cb){
    var user =this;
    //jsonwebtoken을 이용해서 token을 생성하기 
    var token = jwt.sign(user._id.toHexString(),'secretToken');
    user.token = token;
    user.save(function(err, user){
        if(err) return cb(err)//에러가 있다면 리턴할때 콜백으로 데러를전달
        cb(null, user)//save가잘갔다면 에러는 없고 user정보로 간다.

    })
}

UserSchema.statics.findByToken = function(token, cb){
    var user = this;
    //token decode 토큰 복호화 
    jwt.verify(token,'secretToken', function(err,decoded){
        //유저 아이디를 이용해서 유저를 찾은 다음에
        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
        user.findOne({"_id":decoded,"token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user);
        })

    })
}

//스키마를 모델로 감싸기 
const User = mongoose.model('User', UserSchema);
//다른파일에서도 쓸 수 있게 user를 export해주기 

module.exports = {User}