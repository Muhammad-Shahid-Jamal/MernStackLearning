


console.log('Execution Started...');

//============================
// implementing promises without passing parameter in resolve function
//============================

//resolve is function
//reject is function

let promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
        let name = 'I want to be a supercoder';
        console.log(name);
        resolve();
    }, 3000)
    
})

promiseData.then(()=>{
    console.log('Execution finished');
});