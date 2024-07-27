// Klik na dugmad - Update displayvalue
// klik na operator - store display value to num1
// Klik na dugman  - reset displayvalue, update display value
// Klik na jednako - pokrece funkciju num 1 - operator - num2, update display value

let num1;
let num2;
let displayValue = '';
let shouldClearDisplay = false;
let equalsOperation;

function addOperation () {
    return num1 + num2;
}

const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear");

const addButton = document.querySelector("#add");
const equalsButton = document.querySelector("#equals");

numbersButtons.forEach(function(number){

    number.addEventListener("click", function(){
    if (shouldClearDisplay) {
        display.textContent = ''; // Clear the display
        displayValue = ''; // Reset displayValue
        shouldClearDisplay = false; // Reset the flag
        }
    const numberValue = number.textContent;
    displayValue += numberValue;
    const newDisplayValue = document.createTextNode(numberValue);
    display.appendChild(newDisplayValue);
    });

});

addButton.addEventListener("click", function(){
    num1 = Number(displayValue);
    operator = addOperation;
    displayValue = '';
    shouldClearDisplay = true;
})

equalsButton.addEventListener("click", function(){
    num2 = Number(displayValue);
    equalsOperation = num1 + num2;
    displayValue = equalsOperation;
    display.textContent = equalsOperation;
})

clearButton.addEventListener("click", function () {
    display.textContent = " ";
    displayValue = ''; 
});
