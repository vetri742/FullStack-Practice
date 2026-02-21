"use strict"
/*this is very imp topic


this in global scope

       if we try to log this in global scope it will provide global object.
    console.log(this);
         a global object is different according to where the js is running.
         if we run inside browser it will produce an window object .
 interview question.
  what happens if we log this in global scope.
    ans: it will print a global object , depending upon whe
    re we are running the js */
    

/*
    THIS INSIDE functional scope.*/
    function x(){
        // the value of this depends on strict / non strict mode.
          // if program is in non strict mode then this will print global object
          // if program is in strict mode then value of this is undefined.

    /* WHY it is behaving like that?
         if the value of this is undefined or NULL, then js will replace it with global object,
         and it only happens in non-strict mode. */
        console.log(this);
    };
     x();
    // window.x();

     // the value of this keyword depends on how the function is called().
     // if we simply call this using the function name x(); then it will print undefined in strict mode
     // if we call this with reference like window.x(); then it will print a global object.




//this inside a object method.
 /* first of all
    what is function and what is method,
    a method:
        when u use a function inside an object then it is an method. */
const obj={
    a:20,
    x: function(){
        console.log(this.a)
    }
};
obj.x();

  /* when we use this inside an  object then the value of (this)  beomes an onject (in our example (obj)),
   where the method is present*/
   /* simple here,(const obj={
    a:20,
    x: function(){
        console.log(this)
    }
};
obj.x();   
) the value of this inside the object is (obj). and when we try to log this, this=obj now,
 so when we log it , it present an obj , */

 // SIMPLE here THIS=obj.
 const obj2={
    a:20,
    x: function(){
        console.log(this.a)
    }
};
obj2.x();
/* here the output is 20 becoz the this inside object becomes this=obj2, 
    we are logging (this.a) which is nothing but (obj2.a).*/


// THE MOST IMP CONCEPT IN THIS IS CALL , APPLY AND BIND.
// lets see an example.

const student={
    name:"vetri",
    printName:function (){
        console.log(this.name)// here this=student.
    }
};
student.printName();

const student2={
    name:"hari"
    // note the student2 doesnot have the method called printName.
}
//student2.printName();// it will throw error since the student2 doesnot have any method.
// now how to share the method called printName with the student 2 .thats where call , apply and bind comes to the play

//student.printName.call() // note this call()method carries this keyword inside it.
                                //student.printName.call(this)
                        // currently here this=student.
student.printName.call(student2) // student.printName.call(this=student2).// now here this=student2.
// the value of this can be modified using call,apply and bind.

//how this behave inside arrow function.

// important the arrow function does not have its own this , it gets the value of this from its lexical enclosing context


const z={
    a:77,
    s:()=>{
        console.log(this)
    }
}
z.s();
// here it is printing undefined , WHY? the reason is the arrow function doesnot have their own this
// instead they gets the value of this from their parent scope , here the parent scope is global scope
// parent of our arrow func is [const z] and it is global , so the value of global is (global object)
// and our arrow function asks the value of this to its parent scope[const z] and const z here as global obj 
    // as its this value and gives it to our arrow function.
    
// lets write arrow function inside normal funct.
const w={
    a:22,
    method(){
        return ()=>{
            console.log(this.a)
        }
    
    }
}
w.method()();

// here the arrow function gets the value of this from its lexical scope which is method()
 // and method()'s this=w .
 

