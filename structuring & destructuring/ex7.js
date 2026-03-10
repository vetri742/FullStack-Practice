const user = {
  name: "Vetri",
  age: 22,
  skills: ["JS","Python","CSS"]
}

const {
  name,
  skills:[firstSkill,SecondSkill]
} = user

console.log(name)
console.log(firstSkill)
console.log(SecondSkill)