let display = document.getElementById("display");


// appends numbers
function appendToDisplay(value) {
    display.value += value;
}

// Function for the c button
function clearDisplay() {
    display.value = "";
}


// function for the backspace button
function backSpace() {
    display.value = display.value.slice(0, -1);
}


// function to calculate the total
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}


// function to handle the percentage calcution
function calculatePercentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = "Error";
    }
}