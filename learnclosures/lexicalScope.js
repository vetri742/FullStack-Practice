function x(){
    return function y(){
        console.log(a)
    };
    y();

}
x();
var a=10;


/*now the output of this programe is undefined . WHY?

        global memory
        
        creation phase

        name             value
        function(x)     full definition of a function
        var a           undefied (typical var behaviour)

        execution phase

        x()------ is called 
            it returns another function and the moment it returns the function x stops
                the y() is not even executing because when function x sees returns the function stops
*/

function z(){
    return function w(){
        console.log(b)
    };

}
z()();
var b=12;

/* 
        global memory

        creation phase

        name              value

        function(z)     full definition
        var b            undefined


        execution phase

        z()-------- it runs 1st and it returns a new function , the function z stops 
        ();---------this one calls the function w .in function w (console.log(b))
                    it searches b inside its local scope and b is not their inside the local scope
                    and it looks for b in its parent scope which is z()and unfortunately b is not their too.
                    it then goes to the parent scope of x which is the global scope. and in global scope
                    the variable b is undefined (execution for this one yet to happen)
        the output;
             undefined 
*/

function kohli(){
    var v=100
    return function(){
        console.log(v)
    }
}
kohli()();

/* 
  1st global creation phase:
        name           value
    function kohli    full definition of function kohli;
    thats it
 global execution phase
  
 line 1 
 kohli()
     now new creation context created
        creation phase
        goes inside kohli()
            var  v=undefined (hoisted and initializes as undefined)
            return function
        
        execution phase:

        var v = 100
        returns  fucntion.

        now kohli()---- has inner function -- along with the lexical reference of the outer function.
kohli()();
    here we are calling the inner function
     
    line one --- console.log(v)
                    searches for v inside the local scope
                    v not found in the local scope 
                    checks for v in its lexical scope 
                    finds v=100
                    prints (v)
*/

// examples of lexical environment.

function prac(){
    var one=18;
    return function(){
        console.log(one)
        one=45;
        console.log(one)
    }
}
let fn=prac();
fn();


/*  global creation phase.
            name                      value
        function prac              memory created and stored with full reference
        let fn                     hoised  in tdz
        thats it.
    
    execution phase:
        line 1---- let fn=prac()
                    rhs = prac()--- evaluated 1st
                    during evaluation.
                            creates new creation context
                            creation phase
                                var one=undefined;
                                function(){}---object
                            execution phase
                                var one=18
                                returns the inner function to let fn.
                                now let fn= a inner function is returned with the reference of its lexical environment
    when fn()---calls
        new execution phase created.

            inside the inner function
                console.log(one)
                one=45
                console.log(one);
            no variables here.
        execution phase console.log(one)--checks for the variable one no var one found
          note here one is there but thats not an var one.
          so it searches for one in its lexical environment and found one =18;

          next line 
            one=45;
                it looks for variable one in the local scope 
                no var one in local scope
                search in lexical environment founds one=18
                modifies that one , now one=45.
            now in inners memory
             (empty)---- since no variable is there in inner
             (reference)--->outer lexical environment one=45 now.
    */      
   


        

    