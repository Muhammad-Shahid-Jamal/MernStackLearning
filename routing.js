const express = require('express');
const app = express();


//home page
app.get('/',(req,res)=>{
    res.send('<h2>This is home page</h2>')
})

//about page
app.get('/about',(req,res)=>{
    res.send('<h2>This is about page</h2>')
})

//
app.get('/getValue',(req,res)=>{
    //res.send(req.query ) // object
    res.send(req.query.Name) // name

})


//listener
app.listen(3000,()=>{
    console.log('application started')
})