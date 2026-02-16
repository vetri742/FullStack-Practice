function getdata(good){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(good)
            {
                resolve("Rcb won trophy")
            }
            else{
                reject("failed yet again")
            }
        },5000)
    })
}
async function show()
{
    try{
        let data=await getdata(true)
        console.log(data)
    }
    catch(err){
        console.log(err)

    }
}
show()