//================================
//Example # 01 : Destructuring 
//================================
let person = {
    firstName: 'Zeeshan',
    lastName: 'Azeem'
};
 //const { firstName, lastName} = person;
 //console.log(firstName , lastName);

//================================
//Example # 02 : Destructuring a null object
//================================
//It’s possible also to separate the declaration and assignment. However, you must surround the variables in parentheses:
({firstName, lastName} = person);
console.log(firstName , lastName);

//================================
//Example # 03 : Destructuring a null object
//================================
//ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables:
//Explaination: In this example, the firstName and lastName properties are assigned to the fName and lName variables respectively.//
//The identifier before the colon (:) is the property of the object and the identifier after the colon is the variable.
//let { property1: variable1, property2: variable2 } = object;
let { firstName: a, lastName: b } = person;
console.log(a , b);



//================================
//Example # 04 :Destructuring a null object
//================================
function getPerson() {
    return null;
}
let { aa, bb } = getPerson() || {};;
console.log(aa ?? '', bb ?? '');