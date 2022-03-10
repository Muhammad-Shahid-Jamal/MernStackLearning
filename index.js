const express = require("express");
const app = express();
/**
 * or 
 * const app = require("express")();
 */


app.get("/users",(req,res)=>{
  res.json([
    {
      id:"1"
    },{
      id:"2"
    }
  ]);
});

app.get("/",(req,res)=>{
  res.json({
    message:"I am alive!"
  });
});

app.listen(3000,()=>{
  console.log("server listening to port localhost:3000");
});