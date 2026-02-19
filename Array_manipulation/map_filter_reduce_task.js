// lets perform some task using map , filter and reduce

const arr=[
    {fname:"vetri",lname:"vel",age:22},
    {fname:"virat",lname:"kohli",age:38},
    {fname:"jack",lname:"kallis",age:45},
    {fname:"rohit",lname:"sharma",age:38}


]
// expected op=>{vetrivel,viratkohli,jackkallis,rohtsharma}

const mapop=arr.map((x)=>{
    return x.fname+x.lname
})
console.log(mapop)

// map----> used to transform an array

// reduce.
    // expectedd op----> {22:1,38:2,45:1}

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

const reduceop2=arr.reduce((acc,curr)=>{
     if(acc[curr.age]){
        acc[curr.age]++
    }
    else{
        acc[curr.age]=1;

    }
    return acc
    
},{})

// lets do this in another way.

const arrow=arr.reduce((acc,curr)=>{
    acc[curr.age]=(acc[curr.age]|| 0)+ 1;
    return acc
},{});
console.log(arrow)

/* here whats happening is
    acc[curr.age]=(acc[curr.age]|| 0)+ 1;
    during 1st iteration age=22
    acc[22]=(acc[22]||0)+1
    here in acc{}nothing is there 22 is not found so
    acc[22]=(undefined || 0)+1
    or operator behaviour--> if 1st one is falsy or returns the second value
    here undefined is falsy so 0 is returned 
    acc[22]=0+1
    acc[22]=1;
    now in acc{22:1}
*/
// extract the fname of those whose age is under 40

const a=arr.map((x)=>{
    if(x.age<40)
    {
        return x.fname;
    }
}
)
console.log(a)

// lets do this using both filter and map.
const filter=arr.filter((x)=>x.age<40).map((x)=>x.fname);
console.log(filter)
 /* 
    here the filter filters the object of those whose age is under 40
    filter=[{fname:"vetri",lname="vel",age:22},{fname:"virat",lname:"kohli",age:38},
    {fname:"rohit",lname:"sharma",age:38}]
    from this filter we have to map the fname 
*/

const q=arr.reduce((acc,curr)=>
{
   if(curr.age<40)
   {
     acc.push(curr.fname)
     
   }
   return acc

},[])
console.log(q)

/*
    map----->transforms array
    filter----->filters array (either select or remove)
    reduce----->takes the group of value and produces a single value as a result
*/

