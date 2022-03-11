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

app.get('/', (req, res) => {
    res.send('<h2>This is index page</h2>')
});

// Insert
app.post("/user", (req, res) => {
    // get user data from request and save to file
    const user = req.body;
    fs.writeFileSync(`${path_dir}/db/user.txt`, JSON.stringify(user));
    res.json({
        success: true
    });
});


//Get File
app.get("/user/:id", (req, res) => {
    // get user by id from text file
    const user = fs.readFileSync(`${path_dir}/db/user.txt`);
    const userJson = JSON.parse(user);
    res.json({
        user: {
            ...userJson,
            id: req.params.id
        }
    })
});

//update file
app.put("/user/update", (req, res) => {
    //check if response is coming from postman
    //console.log(req.body)
   
    const user = req.body;
    fs.appendFileSync(`${path_dir}/db/user.txt`, JSON.stringify(user), (err) =>{
        if(err){
            res.json({ result: "Operation Failed" });
            return;
        }
    });  
    res.json({
        success: true
    });     
});

//Delete file
app.delete("/user/update", (req, res) => {
    //check if response is coming from postman
    //console.log(req.body)
   
    const user = req.body;
    fs.unlinkSync(`${path_dir}/db/user.txt`)
    res.json({
        success: true
    });     
});


app.listen(3000, () => {
    console.log('application started')
})
