setTimeout(() => {
    const heading = document.querySelector("h1");
    heading.textContent = "Lokesh";

    const parag = document.querySelector("#para");
    const divi = document.querySelector("#div");

    parag.style.color = "green";
    divi.style.fontSize = "24px";

    const elements = document.querySelectorAll(".first");

    elements.forEach((element) => {
        element.style.fontWeight = "bold";
    });
}, 2000);