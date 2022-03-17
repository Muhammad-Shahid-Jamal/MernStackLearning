//calling router object
const router = require("express").Router();

//Invoking Employee Model in api call
const { EmployeeModel } = require("../schema/Employee");

//get all
router.get('/', async (req, res) => {
    try {

        const Employee = await EmployeeModel.find();

        res.json(Employee);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get by id
router.get('/:id', async (req, res) => {
    try {
        const _id = req.params.id;

        const Employee = await EmployeeModel.findById(_id);

        if (Employee) {
            res.json(Employee);
        } else {
            res.status(404).json();
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// FUNCTION TO INSERT RECORD
router.post("/", async (req, res) => {
    try {
        let employee_body = req.body; //{...req.body}

        let employee = new EmployeeModel(employee_body);

        const result = await employee.save();

        res.json(result);

    } catch (error) {
        res.status(500).json(error);
    }

});


//update
router.put('/:id', async (req, res) => {
    try {

        const _id = req.params.id;

        //Approach 01: update record using findByIdAndUpdate()
        //const result = await EmployeeModel.findByIdAndUpdate(_id, req.body);

        //Approach 01: update record using updateOne() function        
        const result = await EmployeeModel.updateOne(
            { _id: req.params.id },
            {
                //$set: req.body // it will update all paramters coming in body object

                $set: {
                    //here you will provide list of columns needs to be updated
                    name: req.body.name,
                    department: req.body.department
                }
            });
        console.log(result);

        if (result.acknowledged && result.modifiedCount>0) {
            res.json(req.body);
        } else {
            res.status(500).json({
                message: 'Update Operation Failed'
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//delete
router.delete('/:id', async (req, res) => {
    try {

        const _id = req.params.id;

        const result = await EmployeeModel.findByIdAndRemove(_id);

        if (result) {
            res.json(result);
        } else {
            res.status(500).json({
                message: 'Deletion Opeartion Failed'
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;