const express = require("express");
const app = express();
const fs = require("fs");
const userRouter = require("./routes/User");
const path = require("path");
const path_dir = path.join(__dirname);
app.use(express.json());
/**
 * or 
 * const app = require("express")();
 */

app.use("/v1/api/user",userRouter);
app.get("*",(req,res)=>{
  res.status(404).send(`<h1>Page Not Found!</h1>`)
});

app.listen(3000, () => {
    console.log('application started')
})
