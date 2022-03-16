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
    try{
        if(req.params.id){
            let todo_s = await TodoModel.find({_id:req.params.id});
            res.json(todo_s);
        }else{
            let todo_s = await TodoModel.find({});
            res.json(todo_s);
        }
    }catch(error){
        res.status(400).send(error.message);
    }
});

router.get("/search/:searchBy",async(req,res)=>{
    try {
        let searchQByDescription = req.params.searchBy;
        let todo = await TodoModel.find({});
        let filterTodo = todo.filter(_todo=>_todo.description.text.indexOf(searchQByDescription) !== -1);
        // console.log(filterTodo);
        res.json(filterTodo);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post("/",async(req,res)=>{
    try{
        let todo_body = req.body;
        let todo = new TodoModel(todo_body);
        await todo.save();
        res.json(todo); 
    }catch(error){
        res.status(400).send(error.message);
    }
});

module.exports = router;