// Function to increment counter
const add = (function () {
    let counter = 0;
    return function () {
        counter += 1; 
        return counter
    }
})();

// console.log(add());
// console.log(add());
// console.log(add());

function* numberGen(){
    yield "red";
    yield "blue";
    yield "green";
    return "black";
}

let valueGen = numberGen();
console.log(valueGen.next());
console.log(valueGen.next());
console.log(valueGen.next());
console.log(valueGen.next());
console.log(valueGen.next());
