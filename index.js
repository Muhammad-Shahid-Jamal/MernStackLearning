const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const path_dir = path.join(__dirname);
app.use(express.json());
/**
 * or 
 * const app = require("express")();
 */

app.get('/',(req,res)=>{
    res.send('<h2>This is index page</h2>')
});

app.post("/user",(req,res)=>{
  // get user data from request and save to file
  const user = req.body;
  fs.writeFileSync(`${path_dir}/db/user.txt`,JSON.stringify(user));
  res.json({
    success:true
  });
});

app.get("/user/:id",(req,res)=>{
  // get user by id from text file
  const user = fs.readFileSync(`${path_dir}/db/user.txt`);
  const userJson = JSON.parse(user);
  res.json({
    user:{
      ...userJson,
      id:req.params.id
    }
  })
});

app.listen(3000,()=>{
    console.log('application started')
})
