// MAP FUNCTION
    // map function is used to transform the array. and creates a new array out of it

    // TO DOUBLE AN ARRAY USING MAP

const a=[1,2,3,4];

function double(x)
{
    return x*2;
}
const b=a.map(binary)
console.log(b);


console.log(a);

function binary(x)
{

    return x.toString(2);
}
  // map always creates new array 
  // now it is not modifying the array a , it is jus creating new array by transforming array a
// ** MAP CREATES NEW ARRAY. USED FOR TRANSFORMATION.

// we can do this using an array function as well.

const c=[1,2,3,4]

const d=c.map((x)=> x*3);
console.log(d);

// FILTER --- filter is used to filter items from an array.
 // we filter items based on some logic

 const filteringArray=[8,7,18,45];
 const filteredArray=filteringArray.filter((x)=>x%8);
 console.log(filteredArray);

 // now we are filtering the items from an array called filtering array by using x>8 logic.
 // note filter also creates a new array like map
 // but map transforms the array and filter select the item from an array that matches the logic

 /* 
    map------>transforms array
    filter-----> selets items from an array(that matches the logic)

    both---> creates new array.

*/

//  REDUCE.

        // reduce is used to take all element from an array and combine them into a single element.
// lets see one example.

const array=[4,6,2,10,16];

// select sum
function isSum(arr)
{
    let sum=0;
    for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}
console.log(isSum(array));

// now we are producing single value as a result by doing sum kind of operations on all the items in an array.
// now lets do the same thing using an reduce

const op=array.reduce(function(acc,curr){
    acc=acc+curr;
    return acc
},0)
console.log(op)
/* here we are creating reduce function , and the reduce function always as two parametre
(acc,curr)---> the reduce functions function iterates through every single value in an object
the curr parametre indicates the current value of an array(where function is iterating)
the acc---> is an accumulater which means gradually collect the result
simply ---> it holds the running result of an reduce function 
---acc= acts as a reduce memory
here 0 is the argument for acc so initially acc=0, and after each iteration it value changes , in our case
--1st iteration (acc=0,curr=4)
{
   acc=0+4
}
during second iteration acc=4. */
// lets find max value from the array

const maxop=array.reduce(function(acc,curr){
    if(curr>acc){
         acc=curr;
    }
    return acc;

},0)
console.log(maxop);

// find min 
const minop=array.reduce(function(acc,curr){
    if(acc>curr){
        acc=curr;
    }
    return acc
},array[0])
console.log(minop)






