const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('<h2>This is index page</h2>')
})

app.get('/users',(req,res)=>{

    //res.type('text/html');
    let data = [{
        name:'Zeeshan',
        position:'Trainee'
    },{
        name:'Shahid',
        position:'Senior Engineer'
    }];

    res.json(data);
})

app.listen(3000,()=>{
    console.log('application started')
})