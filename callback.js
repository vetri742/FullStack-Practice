// callback in js
    // when a function is passed inside another function that is callback
function x(name,callback)
{
    console.log("hello!"+" "+name);
    callback();
}
x("virat",()=>{

    console.log("GOAT of cricket")
})


setTimeout(() => {
    console.log("viratkohli")
    setTimeout(()=>
    {
        console.log('rohit sharma')
        setTimeout(()=>{
            console.log("suresh raina");
              setTimeout(()=>{
            console.log("gayle");

           },1000) 
            
       },1000) 
           
    },1000)
    
}, 1000);
/* 
    here the callback is nested...like a callback inside a callback......
 now when u look at how this things works at the backend that is during execution.. 1st our coding is pushed into the callstack
 in callstack (gec)--->global execution context created and in that gec--> creation phase --> during creation phase a function is
 stored with its full definition.and in execution phase the js sees our code that is settimeout()--> is an webapi so it sends it to the 
 web api and by the time a timer ends it sends the function into the callback stack... the event loop continuoly monitors the call stack
 if callstack is empty it sees the microstack queue and if microstack queue is empty , it looks at the macrotask queue and all callback
 function that are completed its task are pushed into the macrotask queue and the event loop pulls and pushes those into the callstack 
 and it again goes through gec process that  is creation phase and execution phase.


    callbackHELL:
        when there are too many nested callbacks then it creates two problems which is 
                callbackHELL--->when our functions or dependent on each other like user login---->user posts---->post rendering
                callbacks wont work in these areas , because during global execution context phase it executes current function and 
                the its nested functions are again moved to the callback area which makes it hard to execute async functions which are dependant
                on each other (to overcome this problem we have promises and to be more precise we can use async/await in this case) 
                
                Inversion of control---->we are losing the control of a function by providing the full control to another function.
            
            

 */



 


