let inputs = document.getElementById("inps");
let text = document.querySelector(".newtasks");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter a Task")
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);

        function remove() {
            newEle.remove()
        }
    }
}