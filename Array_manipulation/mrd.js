// map
const value=[21,3,5,7,9]
const double = value.map((n)=>n*2)
console.log(value)
console.log(double)

// filter-- only returns value that are true



 const filteringArray=[8,7,18,45];
 const filteredArray=filteringArray.filter((x)=>x%8);
 console.log(filteredArray);


 //const filteringArray=[8,7,18,45];
// const filteredArray=filteringArray.filter((x)=>x%8==0);
 console.log(filteredArray);


 // reduce 

 const array=[1,4,7,8,9,56,88]
 const op=array.reduce(function(acc,curr){
    acc=acc+curr
    return acc
 },0)
 console.log(op)

 // find the maximum number in an array

 const a2=[23,44,21,67,43,18]

 const max=a2.reduce(function(acc,curr)
{
    if(curr>acc)
    {
        acc=curr
    }
    return acc
},0)

console.log(max)

// to find minimum 

const min=a2.reduce(function(acc,curr)
{
    if(curr<acc)
    {
        acc=curr
    }
    return(acc)
},a2[0])
console.log(min)


// lets perform some task using map , filter and reduce

const arr=[
    {fname:"vetri",lname:"vel",age:22},
    {fname:"virat",lname:"kohli",age:38},
    {fname:"jack",lname:"kallis",age:45},
    {fname:"rohit",lname:"sharma",age:38}


]
// expected op=>{vetrivel,viratkohli,jackkallis,rohtsharma}

//const result=arr.map((n)=>(n.fname+' '+n.lname))
//console.log(result)

const reduceop=arr.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]++
    }
    else{
        acc[curr.age]=1;

    }
    return acc

},{})
console.log(reduceop)


const anotherway=arr.reduce((acc,curr)=>
{
    acc[curr.age]=(acc[curr.age] || 0)+1
},{})