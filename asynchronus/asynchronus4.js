const sto1=new Promise((resolve, reject)=>
{
    setTimeout(() => {
        resolve("VETRI THE WEBDEVELOPER")
    },10000);
})

const sto2=new Promise((resolve,reject)=>
{
    setTimeout(() => {
        resolve("VETRI THE JS MASTERY")
        
    },5000);
})

// here we created two const variables and assigned 2 new promises to it.

// lets create async  function for it.

/*async function get1()
{
    console.log("The following is the 1st promise")
    const g=await sto1;
    console.log(g);
    console.log("The following is the 2nd promise")
    const g2=await(sto2)
    console.log(g2)
};
get1();*/

async function get1()
{
    const g=await sto1;
    console.log(g)
}
async function get2()
{
    const g1=await sto2;
    console.log(g1);
}
get1();
get2();

