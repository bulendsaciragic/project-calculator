// Klik na dugmad - Update displayvalue
// klik na operator - store display value to num1
// Klik na dugman  - reset displayvalue, update display value
// Klik na jednako - pokrece funkciju num 1 - operator - num2, update display value

let num1;
let num2;
let displayValue = '';
let shouldClearDisplay = false;
let equalsOperation;

function addOperation (num1, num2) {
    return num1 + num2;
}

function subtractOperation (num1, num2) {
    return num1 - num2;
}

function multiplyOperation (num1, num2) {
    return num1 * num2;
}

function divideOperation (num1, num2) {
    return num1 / num2;
}

const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll('.operator');
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

operatorsButtons.forEach( button => {
    button.addEventListener("click", function(){
        num1 = Number(displayValue);
        displayValue = '';  
        shouldClearDisplay = true;

        switch (event.target.id) {
            case 'add':
                operator = addOperation;
                break;
            case 'subtract':
                operator = subtractOperation;
                break;
            case 'multiply':
                operator = multiplyOperation;
                break;
            case 'divide':
                operator = divideOperation;
                break;
            default:
                console.log('Unknown operation');
        }
    })
})



equalsButton.addEventListener("click", function(){
    num2 = Number(displayValue);
    displayValue = operator(num1, num2);
    display.textContent = operator(num1, num2);
})

clearButton.addEventListener("click", function () {
    display.textContent = " ";
    displayValue = ''; 
    num1 = null;
    num2 = null;
});
