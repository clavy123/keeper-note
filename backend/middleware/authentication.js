const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

exports.Authentication = async function(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return{
            statusCode:401,
            message:"Unauthorized"
        }
    }

    const dcryptToken = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(dcryptToken.id);
    next();
}