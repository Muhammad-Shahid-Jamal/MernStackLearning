console.log('Execution Started...');

//============================
// implementing promises by passing parameter in resolve function
//============================

let promiseData = () => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        let name = 'I want to be a supercoder';
        console.log(name);
        resolve('Execution finished');
    }, 3000)    
})
}

promiseData.then((message)=>{
    console.log(message);
});