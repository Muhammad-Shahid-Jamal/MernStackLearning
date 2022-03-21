const router = require("express").Router();
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/userAuth");
const {JWT_SECRET} = process.env;

const User = require("../schema/user");

//registration of user
router.post("/register",async (req,res)=>{
    try{
        let user = req.body;
        if(user.password === ""){
            res.status(400).send("please enter password");
        }
        const encryptedPass = await bycrypt.hash(user.password,10);
        user.password = encryptedPass;
        let newUser = new User(user);
        await newUser.save();
        res.json({user:newUser});
    }catch(error){
        res.status(500).send(error.message);
    }
});

router.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    if(!email && password){
        res.status(400).send("email and password are required field");
    }
    const user = await User.findOne({email});
    console.log(user);
    if(user && (await bycrypt.compare(password,user.password))){
        //create jsontoken
        const token = jwt.sign({
            user_id:user._id,
            email,
        },JWT_SECRET,{
            expiresIn:"60s"
        });
        res.json({token});
    }else{
        res.status(400).send("Invalid credentials");
    }
});

router.get("/",verifyToken,async(req,res)=>{
    try{
        if(req.user){
            const users = await User.find({});
            res.json(users);
        }else{
            res.status(401).send("you must be loged in!");
        }
    }catch(error){
        res.status(500).send(error.message);
    }
});
module.exports = router;