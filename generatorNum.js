//Basic Example of Generator Function
function* numberGen() {
  yield "red";
  yield "blue";
  yield "green";
  return "black";
}
//
let valueGen = numberGen();
/* console.log(valueGen.next());
console.log(valueGen.next());
console.log(valueGen.next());
console.log(valueGen.next());
console.log(valueGen.next()); */

//===============================
//  using while loop
//===============================
/* function* GenerateNumber() {
    let currentVal = 0

    while (true) {
        currentVal = currentVal + 1;
        console.log(currentVal)
        yield currentVal;
    }
}
const result = GenerateNumber() 
for (let i = 0; i < 10; i++) { 
    console.log(result.next()) //print value
}
 */

function* generatorFunction(value) {
  while (true) {
    value = yield value * 10
  }
  return value;
}

// Initiate a generator and seed it with an initial value
const generator = generatorFunction(0)
//console.log(generator.next());
for (let i = 0; i < 10; i++) {
  console.log(generator.next(i), i)
}



