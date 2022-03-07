
 
const {employees} = require('./data')

//console.log(employees)
let result = employees.find(i => i.id === 1007);
console.log('get employee with id 1007:', result);

//get all hobbies of employee 1007
console.log('get hobbies with id 1007:', result.hobbies);

//get all hobbies at position[1] of employee 1007
console.log('get hobbies with id 1007:', result.hobbies[1]);