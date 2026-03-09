// REAL WORLD ASYNC / AWAIT USE CASES

const API="https://api.github.com/users/vetri742";
/*async function handlefetch(){
    const data=await fetch(API);
    const jsonvalue=await data.json();
    console.log(jsonvalue);
}
handlefetch();*/

// Error handling

async function handlefetch(){
    try{  const data=await fetch(API);
    const jsonvalue=await data.json();
    console.log(jsonvalue);}
    catch(err){
        console.log(err)

    }}
handlefetch();
