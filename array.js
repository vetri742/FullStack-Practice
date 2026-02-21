//let num=[12,44,67,9]
//num.push(38)
//num.pop() 
//num.unshift(22)

//console.log(num.includes(12))
//we use push to add elements at the end
// pop deletes an element at the end
// shift deletes an item at the start
// unshift helps us to add an element at the start 
// includes checks whether thee number exist or not
/*let num=[10,20,30]
num.push(40)
num.shift()
console.log(num)
console.log(num.includes(20))*/
/*let num=[10,20,30]
num.forEach((n,i)=>{
    console.log(`index ${i}=${n}`)
})*/ 
//this foreach helps us to loop through arrays 
/* usually the foreach function calls like this callback(current value,index,array)*/
/*const price=[100,240,500]
let n=0;
price.forEach((p)=>n+=p)
console.log(n)*/
/*let n=[10,20,30]
n.forEach((v,i,arr)=>
{
    arr[i]=v*2
})
console.log(n)*/
/*let cart=[
    {name:"bat",price:4000,qty:1},
    {
    name:"grip",price:1000,qty:2
    }
]
let bill=0
cart.forEach(item=>bill+=item.price*item.qty)
console.log(bill)*/
/*const names=["vetri","virat","dhoni","raina"]
names.map(n=>console.log(`hello welcome ${names}`))*/
/*const nums=[10,20,36]
const r=nums.map((n,i)=>console.log(`${i}-${n}`));*/
/*const num=[2,4,6,8,10]
const result=num.map((n=>n*2))

console.log(result)*/
/*const players=["kohli","abd","smith","root"]
const r=players.map((n)=>n.toUpperCase())
console.log(r)*/
/*const collec=[
    {name:"vetri",age:21},
    {name:"virat",age:36},
    {name:"viv richards",age:71}
]
const r=collec.map((n)=>console.log(n.name))*/

/*const letter=[12,44,76,90]
const strings=letter.map((n,i)=>console.log(`index ${i} has ${n}`))*/

async function vetri() {
    return "virat fan"
    
}
vetri().then((msg)=>console.log(msg))

x();

