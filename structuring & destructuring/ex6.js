// real world usecases
// function  parameter destructuring

function show({name,age}){
    console.log(name)
    console.log(age)
}
const obj={
    name:"vetri",
    age:22
}
show(obj)

function show2([name,age]){
    console.log(name)
    console.log(age)
}
const list=["vetri",22]
show2(list)