const cb1=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("RCB won their 1st trophy")
    },10000)
});

const cb2=new Promise((resolve,reject)=>

    {
        setTimeout(()=>
        {
            resolve("Another trophy in Virat's cabin ")
        },5000)
    }
);

/*
async function getcb()
{
    console.log("CB1")
    const getcb1=await cb1;
    console.log(getcb1)

}
async function getcb2()
{
    console.log("CB2")
    const getcb2=await cb2;
    console.log(getcb2);
   // console.log("okay")
}
getcb()
getcb2()
*/

async function getter()
{
    console.log("---")
    const p=await cb1;
    console.log(p)
    console.log("resolved the promise")
    const p1=await cb2
    console.log(p1)
    console.log("m")
}
getter();