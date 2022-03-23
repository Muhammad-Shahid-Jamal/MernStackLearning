require("dotenv").config();
const {app} = require("./app");

app.listen(3000, () => {
    console.log('application started')
});

// const {init} = require("./service");


// init();
