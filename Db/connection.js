const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
//MONGO_CONNECTION_URL env MONGO_CONNECTION_URL=your connection url
const {MONGO_CONNECTION_URL} = process.env;
async function connectToMongoDb(){
    await mongoose.connect(MONGO_CONNECTION_URL);
    console.log("connected to Mongodb");
}

module.exports = {
    connectToMongoDb
}