let currentInput = "";
let previousInput = "";
let operator = "";


function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (value === "%") {
        if (previousInput !== "") {
            currentInput = (parseFloat(previousInput) * (parseFloat(currentInput) / 100)).toString();
            display.value = currentInput;

        } else {
            display.value += value;
            currentInput = display.value;
        }
    }
}

// Function to clear the display
function clearDisplay() {
    let display = document.getElementById("display"); display.value = '';
    currentInput = '';
    previousInput = '';
    operator = '';
}


// Function to calculate the result
function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (value === "%") {
        if (previousInput !== "") {
            currentInput = (parseFloat(previousInput) * (parseFloat(currentInput) / 100)).toString();
            display.value = currentInput;

        } else {
            display.value += value;
            currentInput = display.value;
        }
    }
}


function setOperator(value) {
    let display = document.getElementById("display");
    operator = value;
    previousInput = display.value;
    display.value = "";
}

function backSpace() {
    let diplay = document.getElementById("display");
    diplay.value = display.value.slice(0, -1);
}