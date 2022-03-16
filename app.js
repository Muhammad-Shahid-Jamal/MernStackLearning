const express = require("express");
const app = express();
const {connectToMongoDb} = require("./Db/connection");
const userRouterAuth = require("./routes/auth");

// database connection
connectToMongoDb();

app.use(express.json());
//user managment
app.use("/v1/api/user",userRouterAuth);

app.get("*",(req,res)=>{
  res.status(404).send(`<h1>Page Not Found!</h1>`)
});

module.exports.app = app;