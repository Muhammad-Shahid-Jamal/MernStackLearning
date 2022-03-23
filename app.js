const express = require("express");
const app = express();
const {connectToMongoDb} = require("./Db/connection");
const userRouterAuth = require("./routes/auth");
const {init} = require("./service");
// database connection
// connectToMongoDb();

app.use(express.json());
//user managment
// app.use("/v1/api/user",userRouterAuth);
// app.get("/user",(req,res)=>{
//   res.json({user:[]});
// })

// app.get("/user/:id",(req,res)=>{
//   res.status(400).json({error:true});
// });
app.post("/send_email",async (req,res)=>{
    try {
        let _sender = await init(req.body);
        res.json(_sender);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
app.get("*",(req,res)=>{
  res.status(404).send(`<h1>Page Not Found!</h1>`)
});

module.exports.app = app;