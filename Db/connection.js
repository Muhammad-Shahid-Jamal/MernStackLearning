const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
//MONGO_CONNECTION_URL env MONGO_CONNECTION_URL=your connection url
const {MONGO_CONNECTION_URL} = process.env;
async function connectToMongoDb(){
    try {
        await mongoose.connect(MONGO_CONNECTION_URL);
        console.log("connected to Mongodb");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    connectToMongoDb
}