const User = require('../models/userModel');
const cookieToken  = require('../utils/cookieToken')

exports.allUsers = async function(req, res, next) {
    try {
        const { searchText } = req.params;
        const searchQuery = searchText ? { $or: [
            { username: { $regex: searchText, $options: 'i' } },
            { email: { $regex: searchText, $options: 'i' } }
        ]} : {};

        const data = await User.find(searchQuery);

        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
};

exports.signup = async function(req,res,next) {
   const{username,email,password,pic} = req.body;
   if(!(email || password || username)){
    return {
        statusCode:400,
        message:"Some fields is missing"
    }
   }

   const user = await User.create({
    username,
    email,
    password,
    pic
   })

   cookieToken(user,res);
}

exports.signin = async function(req,res,next){
    const{email,password} = req.body;
    if(!(email || password)){
        return {
            statusCode:400,
            message:"Some fields is missing"
        }
    }

    const user = await User.findOne({email}).select('+password')
    if(!user){
        return{
            statusCode:404,
            message:"Please Register"
        }
    }

    const isPasswordMatched = await user.IsValidatePassword(password);
    if(!isPasswordMatched){
        return{
            statusCode:401,
            message:"Password does not match"
        }
    }

    cookieToken(user,res);
}

exports.logout = async function(req,res,next){
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true,
    })
    res.status(200).json({
        success:true,
    })
}