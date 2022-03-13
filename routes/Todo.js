const router = require("express").Router();
/**
 * user router file
 * get user data
 * save user to database
 * update user 
 * delete user
 */
const {TodoModel} = require("../schema/Todo");

router.get("/:id?",async(req,res)=>{
    if(req.params.id){
        let todo_s = await TodoModel.find({_id:req.params.id});
        res.json(todo_s);
    }else{
        let todo_s = await TodoModel.find({});
        res.json(todo_s);
    }
});

router.post("/",async(req,res)=>{
    let todo_body = req.body;
    let todo = new TodoModel(todo_body);
    await todo.save();
    res.json(todo); 
});

module.exports = router;