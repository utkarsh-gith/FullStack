let count = 0;

const countElement = document.querySelector("#count");

const incBtn = document.querySelector("#inc");
const dscBtn = document.querySelector("#dsc");

incBtn.addEventListener("click", () => {
    count++;
    countElement.textContent = count;
})

dscBtn.addEventListener("click", () => {
    if(count > 0){
        count--;
    }
    countElement.textContent = count;
})