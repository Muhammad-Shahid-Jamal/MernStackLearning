let obj ={
    firstName:'Zeeshan',
    lastName:'Azeem',
    city:'Karachi'
}
obj.Country = 'Pakistan'
console.log(obj);

// inheritance of object
let obj2 = {
    ...obj,
    mobile:'923451234',
    fax:'1234'
}
console.log(obj2);
