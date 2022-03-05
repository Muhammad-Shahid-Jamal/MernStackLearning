/*
Nullish coalescing operator '??'
*/

/* Points of Interest
1. ?? treats null and undefined equally  
2. ?? returns the first argument if it’s not null/undefined
*/
var  a;
var b;
console.warn( a ?? b ?? "I am programmer");

//example 2
let user = null;
console.warn(user ?? "Shahid");// Anonymous (user not defined)


let user2 = "Zeeshan";
console.warn(user2 ?? "Anonymous"); // John (user defined)

//Example 3 
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

//?? shows the first defined value from the list
console.warn(firstName ?? lastName ?? nickName ?? "Zeeshan"); // Zeeshan


/* || operator doesnt distinguish between false, 0, an empty string "" and null/undefineds */
let height = 0;
console.warn(height || 100); // 100
console.warn(height ?? 100); // 0



//===============================================
// P R E C E D E N C E
//===============================================
let h = null;
let w = null;

// important: use parentheses
let area = (h ?? 100) * (w ?? 50);
console.warn(area); // 5000