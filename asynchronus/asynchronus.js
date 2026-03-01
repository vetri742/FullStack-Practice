// Async function will always return a promise
async function getd(){
    return "virat"
}
// now it will wrap the virat inside a promise then it will return it
const data=getd()
// now inside this data we have a promise since async always returns a promise
//console.log(data);
//Promise { 'virat' }-- output (the data variable has a promise, since async always returns a promise)
data.then((res)=> console.log(res));
/* output-->virat...  .then()registers a callback function  when the promise is resolved , and 
it takes the resolved value as its argument, it also returns a promise , Enabling callback Chain*/
// now lets create a promise and then return that promise inside async

const pro=new Promise((resolve,reject)=>
    resolve("The GOAT virat")
);
async function getter()
{
    return pro
};
const pro2=getter();
pro2.then((res)=>console.log(res));
/* lets go though from the gec engine to till the end result
    creation phase
        NAME            DATA
        pro             Hoisted in TDZ
        getter          stored with full definition
        pro2            Hoisted  in TDZ
    Execution phase
        const pro=new promise(())
            rhs runs 1st
                new promise object created --> initially {promise:pending},
                new promise((resolve,reject))--> runs immidiately and the promise is  already resolved here
                so now the const pro has the resolved promise
            now const pro={fulfilled:the GOAT virat}
        next line async function getter(){},
            nothing to execute here.
        next line const pro2=getter()
            rhs--> runs 1st 
                new execution phase created
                    creation phase
                        nothing to create 
                    execution phase
                        returns pro
            now const pro2===pro
        next line pro2.then((res)=>console.log(res));
         HERE .then registers a callback function
            and the promise is already resolved so it resolved and sends to the microstack queue
            event loops looks at the callstack and it is empty
                now it looks at the microstack queue and sends the callback then to the callstack
                and prints the result
*/
// ASYNC AND AWAIT USED TO HANDLE PROMISES:

const p=new Promise((resolve,reject)=>
resolve("Virat the KING")
);
async function print(){
     const v= await p;
     console.log(v)
    
}
      
print();
// await can only be used inside a async  function
// when function sees await it pauses the execution and pushes the remaining code into the microstack queue

