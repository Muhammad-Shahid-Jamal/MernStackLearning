const express = require("express");
const app = express();
const todoRouter = require("./routes/Todo");
const employeeRouter = require("./routes/Employee");
const {connectToMongoDb} = require("./Db/connection");
connectToMongoDb();

// const checkURL = require("./middleware/urlChecker");


app.use(express.json());

//invoking TODO api
app.use("/v1/api/todo",todoRouter);

//invoking Employee api
app.use("/v1/api/employee",employeeRouter);


//show Page not found if url is not defained
app.get("*",(req,res)=>{
  res.status(404).send(`<h1>Page Not Found!</h1>`)
});

app.listen(3000, () => {
    console.log('application started')
})
