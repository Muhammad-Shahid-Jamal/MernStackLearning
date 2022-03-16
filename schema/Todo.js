const mongoose = require("mongoose");

const { Schema } = mongoose;

const Todo = new Schema({
    title:{
        type:String,
        required:[true,"Title must be a string!"]
    },
    isComplete:{
        type:Boolean
    },
    description:{
        date:{
            type:Date,
            default:Date.now()
        },
        text:{
            type:String
        }
    }
});

module.exports.TodoModel = mongoose.model("Todo",Todo);