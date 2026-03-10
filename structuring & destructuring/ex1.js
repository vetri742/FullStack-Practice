// structuring
    //Structuring means organizing data into structures like arrays or objects.
    // object destructuring
const obj={
    name:"vetri",
    age:22
}
// normal method
// const name = obj.name;
 //const age = obj.age;
 //console.log(name);
 //console.log(age);
 // using destructuring
// Destructuring
    //Destructuring = extracting values from arrays or objects easily
 const  {name,age}=obj;
console.log(name);
 console.log(age);

// Array desturcturing
const arr=[10,20,30,50];

// normal way

//const a=arr[0];
//const b=arr[1];
//const c=arr[2];
//const d=arr[3];
//console.log(a);

// using destructuring 
const [a,b,c,d]=arr;
console.log(a);

