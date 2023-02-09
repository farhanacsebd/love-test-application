const bodyE1 = document.querySelector("body");
const btn = document.getElementById("btn");
const print = document.getElementById("print");
const msg = document.getElementById("msg");


btn.addEventListener('click',()=>{
    const inputField1 = document.getElementById('first').value;
    const inputField2 = document.getElementById('second').value;

    if(inputField1.length == 0 || inputField1.length == 2){
        msg.innerHTML  = "enter any value";
        setTimeout(function(){
            msg.innerHTML = ""
        },7000)
       }
    else if(Number(inputField1)){
        msg.innerHTML  = "you can't enter any number";
        setTimeout(function(){
            msg.innerHTML = ""
        },7000)
       }
    if(inputField2.length == 0 || inputField2.length == 2){
        msg.innerHTML  = "enter any value";
        setTimeout(function(){
            msg.innerHTML = ""
        },7000)
       }
    else if(Number(inputField2)){
        msg.innerHTML  = "you can't enter any number";
        setTimeout(function(){
            msg.innerHTML = ""
        },7000)
       }
})

bodyE1.addEventListener("mousemove",(e) => {
    const xPos = e.offsetX; 
    const yPos = e.offsetY; 
    const spanE1 = document.createElement("span");
    spanE1.style.left = xPos + "px"; 
    spanE1.style.top = yPos + "px"; 

    const size = Math.random() * 100;
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";

    bodyE1.appendChild(spanE1);

    setTimeout(() => {
        spanE1.remove();
    },3000);

})