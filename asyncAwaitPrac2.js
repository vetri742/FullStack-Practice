function getuser(){
    return new Promise((resolve)=>{
    setTimeout(()=>
    {
        resolve({id:1,name:"vetri"})
    },2000)
})
}
function getposts(userid){
    return new Promise((resolve)=>{
    setTimeout(()=>{resolve(["post1","post2","post3"])},2000)
    
})
}
async function getuserandpost() {
    try{
        let user=await getuser()
        console.log("user:",user)
        let post=await getposts(user.id)
        console.log("posts:",post)

    }
    catch(err)
    {
        console.log("")
    }

    
}
getuserandpost()