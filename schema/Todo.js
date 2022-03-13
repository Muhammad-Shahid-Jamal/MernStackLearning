const mongoose = require("mongoose");

const { Schema } = mongoose;

const Todo = new Schema({
    title:{
        type:String,
        required:true
    },
    isComplete:{
        type:Boolean
    }
});

module.exports.TodoModel = mongoose.model("Todo",Todo);