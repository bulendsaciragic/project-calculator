// Osnovne varijable

let num1 = null;
let num2 = null;
let operator = null;
let displayValue = '';

// Funkcije za matematicke operacije

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

// Selektori 

const display = document.querySelector("#display");
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals")

// Funkcija unos brojeva

function number(n) {
    displayValue += n;
    const newDisplayValue = document.createTextNode(displayValue);
    display.textContent = ''; 
    display.appendChild(newDisplayValue);
}

// Funkcija za izbor operacije

operatorButtons.forEach( button => {

    button.addEventListener("click", function(){
        if (num1 === null) {
            num1 = Number(displayValue);
            } else {
                num2 = Number(displayValue);
                num1 = operator(num1, num2);
                display.textContent = num1;
            }

        displayValue = '';  
        // shouldClearDisplay = true;

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

// Funkcija za izracunavanje

equalsButton.addEventListener("click", function(){
    if (num1 !== null && operator) {
        num2 = Number(displayValue);
        displayValue = operator(num1, num2);
        display.textContent = operator(num1, num2);
        num1 = null;
        num2 = null;
        operator = null;
        }
})

// Funkcija za ciscenje displeja i resetovanje vrijednosti

clearButton.addEventListener("click", function () {
    display.textContent = " ";
    displayValue = ''; 
    num1 = null;
    num2 = null;
    operator = null;
});