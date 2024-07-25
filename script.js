// let num1 = prompt("Enter number 1");
// let num2 = prompt("Enter number 2");
// let operator;

// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function operate (num1, num2, operator) {

// }

const numbersButtons = document.querySelectorAll(".number")
const displayValue = document.querySelector("#displayValue");
const clearButton = document.querySelector("#clear");

const add = document.querySelector("#add");

numbersButtons.forEach(function(number){

    number.addEventListener("click", function(){
    const numberValue = number.textContent;
    const newDisplayValue = document.createTextNode(numberValue);
    displayValue.appendChild(newDisplayValue);

    });

});

clearButton.addEventListener("click", function () {
    displayValue.textContent = " ";
})