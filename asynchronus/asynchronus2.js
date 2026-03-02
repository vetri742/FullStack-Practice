const p=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("VIRAT THE GOAT")
    },5000)
});

async function getdata()
{
    const p2=await p;
    console.log("GREATEST BATSMAN OF ALL TIME");
    console.log(p2);
};
getdata();

/*Gec
Creation phase
Const p= hoisted in tdz
Async function getdata ( stored with full definition)

Execution phase
Const p = new promise(())
Rhs executes 1st
New promise object created { pending},
Promise executor runs immediately
And inside it sees settimeout , js engine cant handle settimeout so it sends it to the webapis ( the times starts ticking )
Call stack --- empty

Now function getdata ( nothing to be executed) stored with full definition already
Getdata()

Now in call stack
Getdata ()
New fec--> function execution context created
in creation phase
Const p2= uninitialised.
Execution phase
Const p2= await p
And by the time js sees the await it pauses the function
Now call stack is empty

Settimeout is ended and it returns the all back function to the macrotask queue
Now event loop pushes this macrotask queue to call stack
Starts executing and while executing resolve
2 things happens
1)promise state changes promise{fullfilled}
2) value=>VIRAT THE GOAT-->sends to the micro task queue

Then IN microtask queue 
the function getdata resumes and
Console.log("GREATEST BATSMAN OF ALL TIME")--- PRINTS
Console.log(p2) prints
*/