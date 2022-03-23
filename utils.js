/**
 * 
 * @param {Number} ms 
 * @returns {Promise}
 * @description set sleep timer for process
 */
function sleep(ms){
    return new Promise((resolve,rej)=>{
        setTimeout(() => {
           resolve(); 
        }, ms);
    });
}

module.exports = {
    sleep
}