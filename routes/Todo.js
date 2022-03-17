const router = require("express").Router();
/**
 * user router file
 * get user data
 * save user to database
 * update user 
 * delete user
 */
const { TodoModel } = require("../schema/Todo");

router.get("/:id?", async (req, res) => {
    try {
        if (req.params.id) {
            let todo_s = await TodoModel.find({ _id: req.params.id });
            res.json(todo_s);
        } else {
            let todo_s = await TodoModel.find({});
            res.json(todo_s);
        }

    } catch (error) {
        res.status(500).json(error);
    }
});


/**
 * FUNCTION TO INSERT RECORD
 */
router.post("/", async (req, res) => {
    try {
        let todo_body = req.body;
        let todo = new TodoModel(todo_body);
        await todo.save();
        res.json(todo);

    } catch (error) {
        res.status(500).json(error);
    }

});

/**
 * FUNCTION TO UPDATE RECORD
 */
 router.put('/:id', async (req, res) => {
    try {

        const _id = req.params.id;

        const result = await TodoModel.findByIdAndUpdate(_id, req.body);

        if (result) {
            res.json(req.body);
        } else {
            res.status(500).json({
                message: 'Record not updated, received false'
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

/**
 * FUNCTION TO DELETE RECORD
 */

 router.delete('/:id', async (req, res) => {
    try {

        const _id = req.params.id;

        const result = await TodoModel.findByIdAndRemove(_id);

        console.log(result)

        if (result) {
            res.json(result);
        } else {
            res.status(500).json({
                message: 'Record not deleted, received false'
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;