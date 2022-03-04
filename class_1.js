/**
    scoping problems

 */
// var a = 1;
// function hello(){
//     a = 2;
// }



/**
 * spread operator
 * 
 */

let person = {
    hair:"red",
    dress:"pentshirt"
};

const {hair,dress} = person;

// console.log(hair);
// console.log(dress);

let person2 = {
    ...person,
    shoes:"joger"
};
// console.log(person);
// console.log(person2);

// let shahid = Object.freeze({
//     name:"shahid"
// });
// let shahid = {
//     name:"shahid"
// }
// shahid.name="zeeshan";
// shahid.hair = "black";
// console.log(shahid);

let num = [1,2,3];
let num2 = [...num,0,...num];
// console.log(num2);

let human = {
    name:"abc",
};

let user = "abc";

// console.log(user && "shahid");

function hello(){
    console.log("hello world");
}

/***
 * anonamous function
 */
// (()=>{
//     console.log("helloworld");
// })();

/**
 * try catch
 */

try{
    //error through
    throw new Error("name");
}catch(error){
    console.log(error.message);
}finally{
    console.log("db disconnect");
}

// console.log(human?.hair);