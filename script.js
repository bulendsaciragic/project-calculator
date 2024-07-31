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

// Funkcija unos brojeva

function number(n) {
    displayValue += n;
    const newDisplayValue = document.createTextNode(displayValue);
    display.textContent = ''; 
    display.appendChild(newDisplayValue);
}

// Funkcija za izbor operacije

function setOperator(op) {
    if (num1 === null) {
        num1 = Number(displayValue);
    } else {
        num2 = Number(displayValue);
        num1 = operator(num1, num2);
        display.textContent = num1;
    }
    displayValue = '';  

    switch (op) {
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
}

// Funkcija za izracunavanje

function calculate() {
    if (num1 !== null && operator) {
        num2 = Number(displayValue);
        displayValue = operator(num1, num2);
        display.textContent = operator(num1, num2);
        num1 = null;
        num2 = null;
        operator = null;
        }
}

// Funkcija za ciscenje displeja i resetovanje vrijednosti

function clearDisplay() {
    display.textContent = " ";
    displayValue = ''; 
    num1 = null;
    num2 = null;
    operator = null;
}

// Keyboard support

const keyToFunction = {
    '0': () => number(0),
    '1': () => number(1),
    '2': () => number(2),
    '3': () => number(3),
    '4': () => number(4),
    '5': () => number(5),
    '6': () => number(6),
    '7': () => number(7),
    '8': () => number(8),
    '9': () => number(9),
    '.': () => number('.'),
    ',': () => number('.'),
    '/': () => setOperator('divide'),
    '*': () => setOperator('multiply'),
    '-': () => setOperator('subtract'),
    '+': () => setOperator('add'),
    '=': () => calculate(),
    'Enter': () => calculate(),
    'c': () => clearDisplay()
};

document.addEventListener('keydown', (event) => {
    const func = keyToFunction[event.key];
    if (func) {
        func();
    }
});