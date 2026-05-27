const operatorBtn = document.querySelectorAll("#op");
const numberBtn = document.querySelectorAll("#number");
const display = document.getElementById("display");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let firstNumber = "";
let operator = "";
let secondNumber = "";

numberBtn.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator == "") {
            firstNumber += button.textContent;
            display.textContent = firstNumber;
        } else {
            secondNumber += button.textContent;
            display.textContent = secondNumber;
        }
    });
});

operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator != "" && secondNumber !== "") {
            let result = operate(
                operator,
                Number(firstNumber),
                Number(secondNumber),
            );
            
            if (result === "Gak iso bro") {
                display.textContent = result;
                firstNumber = "";
                secondNumber = "";
                operator = "";
                return; 
            } else {
                result = Math.round(result * 1000) / 1000;
                display.textContent = result;
                firstNumber = result.toString();
                secondNumber = "";
            }
        }
        operator = button.textContent;
    });
});

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "Gak iso bro";
    }
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            return null;
    }
}

equals.addEventListener("click", () => {
    if (operator === "" || secondNumber === "") return;
    
    let result = operate(operator, Number(firstNumber), Number(secondNumber));
    
    if (result === "Gak iso bro") {
        display.textContent = result;
        firstNumber = "";
        secondNumber = "";
        operator = "";
    } else {
        result = Math.round(result * 1000) / 1000;
        display.textContent = result;
        firstNumber = result.toString();
        secondNumber = "";
        operator = "";
    }
});

clear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "0";
});