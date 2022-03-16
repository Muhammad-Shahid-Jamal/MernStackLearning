const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        default:null
    },
    last_name:{
        type:String,
        default:null
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model("user",userSchema);