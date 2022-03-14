const router = require("express").Router();
const checkAuth = require("../middleware/authenticate");
const checkURL = require("../middleware/urlChecker");
/**
 * user router file
 * get user data
 * save user to database
 * update user 
 * delete user
 */

let users = [
    {
        id:1,
        name:"abc",
        email:"abc@abc.com"
    },
    {
        id:2,
        name:"abcasdasd",
        email:"abc@abasc.com"
    },
    {
        id:3,
        name:"abcas",
        email:"abc@abcd.com"
    },
    {
        id:4,
        name:"abcasd",
        email:"abc@abddsc.com"
    }
]

router.get("/",(req,res)=>{
    res.json({
        users
    });
    // res.json({
    //     users:users
    // });
});

//definition of route level middleware

router.get("/testUrl",checkURL,(req,res)=>{
    res.json({
        users
    });
});


router.delete("/:id",checkAuth,(req,res)=>{
    let _id = req.params.id;
    let remainUsers = users.filter(user=>user.id!==_id);
    users = remainUsers;
    res.json({
        success:true
    });
})
module.exports = router;