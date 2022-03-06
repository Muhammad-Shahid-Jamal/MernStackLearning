/**
 * 
 * @param {Number} value_1 
 * @param {Number} value_2
 * @returns {Number} 
 * @description return sum of two numbers 
 */
function add(value_1,value_2){
    return value_1+value_2;
}

/**
 * 
 * @param {Number} value_1 
 * @param {Number} value_2 
 * @returns {Number}
 * @description return diffrence of value
 */
function subtract(value_1,value_2) { 
    return value_1 - value_2;
}

module.exports = {
    add,
    subtract
};