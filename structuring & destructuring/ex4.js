// nested destructuring;

const obj={
    name:"vetri",
    qualification:{
        degree:"MCA",
        cgpa:8,
        techstack:"full stack"
    },
    favplayer:"virat"
}

/*const {name,favplayer}=obj
console.log(name)
console.log(favplayer);
*/
const {name,qualification:{cgpa:percentage,degree,techstack}}=obj
console.log(percentage);
console.log(degree);

const arr=[{
    username:"virat",
    usernum:18,
    userRecord:{
        odi:"most hundrends",
        test:"test captain of the decade",
        t2oi:"most player of the tournament"
    
    }
}]
const [{username,usernum , userRecord:{odi,t2oi}}]=arr
console.log(username);
console.log(usernum);
console.log(odi);
console.log(t2oi);
