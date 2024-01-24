const btn = document.getElementById("convert-btn")
const output = document.getElementById("output");
const intputValue = document.getElementById("number");
function emptyChecker() {
    if (intputValue.value = "") {
        output.innerHTML = "Please enter a valid number";
    }
}
btn.addEventListener("click",emptyChecker())