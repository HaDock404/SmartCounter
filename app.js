const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const smartNumber = document.querySelector("h2");
const saveSentence = document.querySelector("h3");

btn1.addEventListener("click", increment);
btn2.addEventListener("click", save);
btn3.addEventListener("click", refresh);

let i = 0;
let count = "";

function increment() {
    i++;

    smartNumber.textContent = i;
}

function save() {
    count += i + " - ";

    saveSentence.style.backgroundColor = "#80f3bd60"
    
    saveSentence.textContent = "Previous count: " + count
    //saveSentence.textContent += i + " - ";
    i = 0;
    smartNumber.textContent = 0;

}

function refresh() {
    saveSentence.textContent = "";
    count = "";
    saveSentence.style.backgroundColor = "#80f3bd00";
}