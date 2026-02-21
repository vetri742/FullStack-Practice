const ar=[1,5,2,7,3,8];
const gt=ar.reduce((acc,curr)=>{
    
if(curr>3){
        acc++
    }
    return acc

},0)
console.log(gt)

// cleaner version

const gt2 = ar.reduce((acc, curr) => curr > 3 ? acc + 1 : acc, 0);

const users = [
 {name:"A", age:20},
 {name:"B", age:30},
 {name:"C", age:20}
]

const b=users.reduce((acc,curr)=>{
    acc[curr.age]=(acc[curr.age] || 0)+1;
    return acc
},{})
console.log(b)

// sum of numbers:
const a = [5,10,15,20];
const r=a.reduce((acc,curr)=>
{
    return acc+curr

},0)
console.log(r);

// product of numbers:
const a2 = [1,2,3,4];
const r2=a2.reduce((acc,curr)=>{
    return acc*curr

},a2[0])
console.log(r2);

// max value
const a3 = [10,5,25,8,30];
const r3=a3.reduce((acc,curr)=>{
    if(curr>acc){
        acc=curr;
    }
    return acc;

},0)
console.log(r3)

// total cart price
const cart = [
 {name:"shirt", price:500},
 {name:"pant", price:1000},
 {name:"shoe", price:1500}
];



const r4=cart.reduce((acc,curr)=>{
    acc=acc+curr.price;
    return acc

},0)
console.log(r4);

// pattern 2 --> frequency

const a5 = [1,2,2,3,1,1,4];
const r5=a5.reduce((acc,curr)=>
{
    acc[curr]=(acc[curr] || 0) + 1;
    return acc

},{})
console.log(r5)


// count char

const str = "aabbbc";
const a6=[...str]
const r6=a6.reduce((acc,curr)=>
{
    acc[curr]=(acc[curr] || 0) + 1;
    return acc

},{})
console.log(r6)


// count users per age
 const users2 = [
 {name:"A", age:20},
 {name:"B", age:30},
 {name:"C", age:20},
 {name:"D", age:30},
 {name:"E", age:30}
];
const r7=users2.reduce((acc,curr)=>
{
    acc[curr.age]=(acc[curr.age] || 0) + 1;
    return acc

},{})
console.log(r7);

// count based on status
const orders = [
 {id:1, status:"pending"},
 {id:2, status:"delivered"},
 {id:3, status:"pending"},
 {id:4, status:"cancelled"}
];
const r8=orders.reduce((acc,curr)=>
{
    acc[curr.status]=(acc[curr.status] || 0)+1;
    return acc

},{})
console.log(r8)
