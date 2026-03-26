let button=document.getElementById("btn")
let p=document.getElementById("one")
button.addEventListener("click",(()=>
{
    p.innerHTML="Button Clicked"
    alert("DOM MANIPULATED")
}
))
