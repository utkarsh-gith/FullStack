const button = document.querySelector("#btn");
const text = document.querySelector("h1");

button.addEventListener("click", function () {
    console.log("Button Clicked");
    text.style.color = "green";
    text.textContent += " Utkarsh!";
})