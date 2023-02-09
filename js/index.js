const bodyE1 = document.querySelector("body");
const btn = document.getElementById("btn");
const printLove = document.getElementById("print");
const msg = document.getElementById("msg");


btn.addEventListener('click',()=>{
    const inputField1 = document.getElementById('first').value;
    const inputField2 = document.getElementById('second').value;

    
    
    if(Number(inputField1) || inputField1.length == 0 || inputField1.length == 2){
        msg.innerHTML  = "enter at least 3 character value";
        setTimeout(function(){
            msg.innerHTML = ""
        },7000)
       }
    
    if(Number(inputField2) || inputField2.length == 0 || inputField2.length == 2){
        msg.innerHTML  = "enter at least 3 character value";
        setTimeout(function(){
            msg.innerHTML = ""
        },7000)
       }
    else{
        let random = Math.floor(Math.random() * 100);
        printLove.innerHTML = `${inputField2} ${random}% Love ${inputField1}`;
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