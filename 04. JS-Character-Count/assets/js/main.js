let textBox = document.querySelector(".textBox");
let countNum = document.querySelector(".count");
let text = document.querySelector(".text");


textBox.addEventListener("input",count);

function count(){
    let number =textBox.value.length;
    countNum.textContent=number;
    if (number<=100){
        text.classList.remove("active");
    }else{
        text.classList.add("active")
    }
   
}