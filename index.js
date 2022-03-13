const express = require("express");
const app = express();
const userRouter = require("./routes/User");


const checkURL = require("./middleware/urlChecker");


app.use(express.json());
/**
 * or 
 * const app = require("express")();
 */


//application level middleware
app.use(checkURL);

app.use("/v1/api/user",userRouter);


//show Page not found if url is not defained
app.get("*",(req,res)=>{
  res.status(404).send(`<h1>Page Not Found!</h1>`)
});

app.listen(3000, () => {
    console.log('application started')
})
