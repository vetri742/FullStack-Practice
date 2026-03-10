// Renaming variable name:

const arr={
    name:"virat",
    age:22,
    role:"full stack developer"
}
//const {name:username}=arr;
//console.log(username)

// default values in objects;

const{name,age,role,experience="fresher"}=arr;
console.log(name);
console.log(age);
console.log(role);
console.log(experience);


