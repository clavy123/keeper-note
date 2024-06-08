const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const JsonWebTokenError = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },

}, { timestaps: true });

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }

    this.password = await bcrypt.hash(this.password,10);
})

UserSchema.methods.generateJwtToken = function(){
    return JsonWebTokenError.sign({id:this._id},"ABCDE",{expiresIn : '7d'});
}

UserSchema.methods.IsValidatePassword = async function(userPassword){
    return await bcrypt.compare(userPassword,this.password);
}

module.exports = mongoose.model("User", UserSchema);