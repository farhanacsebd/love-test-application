const bodyE1 = document.querySelector("body");
const btn = document.getElementById("btn");
const printLove = document.getElementById("print");
const msg = document.getElementById("msg");
const statement = document.getElementById("statement");

btn.addEventListener("click", () => {
  const input1 = document.getElementById("first");
  const inputField1 = input1.value;
  const input2 = document.getElementById("second");
  const inputField2 = input2.value;

  if (Number(inputField1) || inputField1.length == 0 || inputField1.length == 2) {
    msg.innerHTML = "enter at least 3 character value";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 7000);
  }

  if (Number(inputField2) || inputField2.length == 0 || inputField2.length == 2) {
    msg.innerHTML = "enter at least 3 character value";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 7000);
  }
  
  else {
    let random = Math.floor(Math.random() * 100);
    printLove.innerHTML = `${inputField2} ${random}% Love ${inputField1}`;
    if (random <= 0 || random <= 50) {
      statement.innerHTML = `It's better to let your dear go💔`;
    } else if (random <= 51 || random <= 80) {
      statement.innerHTML = `It's quite good💞`;
    } else if (random <= 81 || random <= 94) {
      statement.innerHTML = `Good Relationship🥰`;
    } else if (random <= 95 || random <= 100) {
      statement.innerHTML = `Lovely Relationship💕`;
    }
  }


  input1.value = "";
  input2.value = "";
});


const clearAll = () =>{
    
}


bodyE1.addEventListener("mousemove", (e) => {
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
  }, 3000);
});