let textBox = document.querySelector(".textBox");
let numberCount = document.querySelector(".count");
let text = document.querySelector(".text");
textBox.addEventListener("input", count);

function count() {
  let number = textBox.value.length;
  numberCount.textContent = number;
  if (number >= 100) {
    text.classList.add("active");
  } else {
    text.classList.remove("active");
  }
}
