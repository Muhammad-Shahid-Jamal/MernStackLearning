/**
 * callback function
 */

function sendMoneyToClient(amount,alertCallback){
    //api call
    //show data to view
    //alert payment is sent by this function
    setTimeout(() => {
        alertCallback(`payament is success ${amount}`,);
    }, 3000);
    console.log("api called");
}

// sendMoneyToClient(10,(message)=>{
//     console.log(message);
// });

let payment = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("sent!");
        },3000);
    });
}
// (async()=>{
//     let message = await payment();
//     console.log(message);
//     console.log("sending..");
// })();
payment().then(message=>{
    console.log(message);
});
console.log("sending..");