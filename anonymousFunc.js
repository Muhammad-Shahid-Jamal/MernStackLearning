
//Syntax
// Anonymous function has no name and it runs only once and flush from memory
(function () {
    console.log('I M Anonymous');
 });


//=====================================
//Immediately invoked function execution
//=====================================
//If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this:
//Call the function by adding the trailing parentheses ()
(function() {
    console.log('I M Anonymous');
})();


 //Example 2
 //An anonymous function is not accessible after its initial creation. Therefore, you often need to assign it to a variable.
 let show = function() {
    console.log('Anonymous function');
};
show();


// Function Definition using arrow function and invoke by adding () parenthesis at the end of function.
(()=>{
    console.log("hello React");
})();


let person = {
    firstName: 'Zeeshan',
    lastName: 'Azeem'
};

(function (person2) {
    console.log(person2.firstName + ' ' + person2.lastName);
})(person);
