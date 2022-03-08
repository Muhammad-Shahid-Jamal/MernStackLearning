

// promise implementation with resolve and reject both


function getMoneyBack(money) {

    return new Promise((resolve, reject) => {

        if (typeof money !== 'number') {
            reject(new Error('money is not a number'))
        } else {
            resolve(money)
        }

    })
}

getMoneyBack(-1).then((money) => {
    console.log(money)
})