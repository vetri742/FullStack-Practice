// Destructuring with rest operator

const arr=[1,2,3,4,5,6,7,8];
//const [a,b,c,...rest]=arr;
/*console.log(a);
console.log(b);
console.log(c);
console.log(rest);*/

//rest collects the remaining elements.

const arr2=["vetri","virat","a","b","c","d","e","f","g"];
const[a,b,...rest]=arr2
console.log(a);
console.log(b);
//console.log(c);
console.log(rest);