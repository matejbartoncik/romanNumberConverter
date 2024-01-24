const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const intputValue = document.getElementById("number");
const romanNumbers = [
  { name: "M", value: 1000 },
  { name: "CM", value: 900 },
  { name: "D", value: 500 },
  { name: "CD", value: 400 },
  { name: "C", value: 100 },
  { name: "XC", value: 90 },
  { name: "L", value: 50 },
  { name: "XL", value: 40 },
  { name: "X", value: 10 },
  { name: "IX", value: 9 },
  { name: "V", value: 5 },
  { name: "IV", value: 4 },
  { name: "I", value: 1 },
];
btn.addEventListener("click", emptyChecker);
function emptyChecker() {
  if (intputValue.value == "") {
    output.innerHTML = "Please enter a valid number";
  } else convertToRoman();
}
function convertToRoman() {
    output.innerHTML = "";
    let value = parseInt(intputValue.value.trim());
    let temp = 0;
  if (intputValue.value.trim() < 0) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (intputValue.value.trim() >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
  }else{
    while (value>0) {
        if(value>=romanNumbers[temp].value){
            value-=romanNumbers[temp].value
            output.innerHTML+=romanNumbers[temp].name;
        }else{
            temp++
        }
      }
  }
  
  
}
