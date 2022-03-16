const express = require("express");
const app = express();
const {connectToMongoDb} = require("./Db/connection");

// database connection
connectToMongoDb();

app.use(express.json());

app.get("*",(req,res)=>{
  res.status(404).send(`<h1>Page Not Found!</h1>`)
});

module.exports.app = app;