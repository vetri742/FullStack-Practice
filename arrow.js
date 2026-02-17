
// how normal function works
// function declaration.

function vetri(){
    return ("hello")
};
console.log(vetri());

// function expression

const greet=function vetri(){
    console.log("fan of virat")
};
greet();

// anonymous function

const greetMsg=function(){
    console.log("admirer of abd")
};
greetMsg();

/*const greetMsg=function(name){
    console.log("admirer of"+ name)
};
greetMsg("abd");*/

 // arrow function

 //const ipl=()=>{console.log("Defending champion rcb")};
 //ipl();
  const ipl=name=>"Defending champion "+name
 console.log(ipl("RCB"));