
//============================
// implementing promises with async await in resolve function
//============================

const func1 = () => {
    return 'I am function 1'
}


const func2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //return 'I am function 2'
            resolve('I am function 2'); //object, array, string
        }, 3000)
    })
}

const func3 = () => {
    return 'I am function 3'
}

const callMe = async () => {

    let valOne = func1();
    console.log(valOne);

    let valTwo = await func2();
    console.log(valTwo);

    let valThree = func3();
    console.log(valThree);
}

callMe();
