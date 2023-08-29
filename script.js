const calculator = document.querySelector(".calculator");
const numButtons = document.querySelectorAll(".numberBtn");
const operatorBtns = document.querySelectorAll(".operatorBtn");

const equalsBtn = document.querySelector(".equalsBtn");
const clearBtn = document.querySelector("#clearBtn");
const resetBtn = document.querySelector("#resetBtn");

const display = document.querySelector(".display");

let num1;
let operator;
let num2;
let isNewNumber = false;


numButtons.forEach(btn => btn.addEventListener("click", () => {
    updateDisplay(btn.innerHTML);
}))

operatorBtns.forEach(btn => btn.addEventListener("click", () => {
    operatorPressed(btn);
}))

equalsBtn.addEventListener("click", () => {
    if (operator != undefined) {
        num2 = display.textContent;
        num1 = operate(num1, operator, num2);
        isNewNumber = true;
        updateDisplay(num1);
        num2 = undefined;
        operator = undefined;
    }

})

clearBtn.addEventListener("click", () => {
    display.textContent = "";
})

resetBtn.addEventListener("click", () => {
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    display.textContent = ""; 
})

function updateDisplay(item) {
    if (isNewNumber) {
        display.textContent = item;
        isNewNumber = false;
    } else {
        display.textContent += item;
    }
}

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else {
        alert("Please enter an operator before clicking equals");
    }
}

function operatorPressed(btn) {
    if (num1 === undefined) {
        num1 = display.textContent;
    } else if(operator === undefined) {
        operator = btn.innerHTML;
        num2 = undefined;
    } else if (num2 === undefined) {
        num2 = display.textContent;
        num1 = operate(num1, operator, num2);
        updateDisplay(num1);
        num2 = undefined;
    }
    isNewNumber = true;
    operator = btn.innerHTML;
}