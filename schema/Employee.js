const mongoose = require("mongoose");

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    department:{
        type:String 
    }

});


module.exports.EmployeeModel = mongoose.model("Employee",EmployeeSchema);