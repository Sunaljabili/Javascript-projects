let asidebar = document.querySelector(".asidebar");
let open = document.querySelector(".btn");
let close = document.querySelector(".icon-area .fa-xmark");

close.addEventListener("click",function(){
    // alert("Salam AZmf201")
    asidebar.classList.add("none");
})

open.addEventListener("click",function(){
    asidebar.classList.remove("none")
})