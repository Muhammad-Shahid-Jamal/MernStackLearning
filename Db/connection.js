const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
//MONGO_CONNECTION_URL env MONGO_CONNECTION_URL=your connection url
const {MONGO_CONNECTION_URL} = process.env;
//const URL = "mongodb+srv://zeeshan_azeem_db:3kg6jONuwyMyphHd@cluster0.dv5a3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//console.log(MONGO_CONNECTION_URL);
async function connectToMongoDb(){
    await mongoose.connect(MONGO_CONNECTION_URL);
    console.log("connected to Mongodb");
}

module.exports = {
    connectToMongoDb
}