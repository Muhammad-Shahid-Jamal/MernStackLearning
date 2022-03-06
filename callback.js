//Question: What is callback function? 
//Ans: Any function that is passed as an argument is called Call back function


//Example 01: callback
let talk = function(fx){
    fx();
};

var sayHi =function(){
    console.log("Hi there...")
}
talk(sayHi);
//========================================

//Example 02
//========================================
function sum(a,b){
    return a+b;
}

function diff(a,b){
    return a-b;
}

function calc(fx,a,b){
   return fx(a,b);
}
console.log(calc(sum,10,20)); // sum
console.log(calc(diff,10,20));// diff
//======================================== 

//Even and Odd Example 1
//========================================
const isEven = (number, callback) => {
    // super complex math problem
    if (number % 2 === 0) {
        callback(true);
    } else {
        callback(false);
    }
};

isEven(10, result => result ?
    console.log("Yay! it's even") :
    console.log("Meh! it's odd"));
//========================================

//Even and Odd Example 2 : Approach 2
//========================================
function EvenOdd (number) {
    console.log(number)
    // super complex math problem
    if (number % 2 === 0) {
        console.log("Even");
   
    } else {
        console.log("odd");
    }
};

function NumberFinder(num,fx){
    fx(num);
}

NumberFinder(7,EvenOdd);
//========================================
