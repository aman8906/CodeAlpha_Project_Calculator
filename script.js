let display = document.getElementById('display');
let currentInput = '';
let operation = '';
let result = 0;

function inputValue(value) {
    // Prevent multiple dots in a number
    if (value === '.' && currentInput.includes('.')) return;
    
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operation = '';
    result = 0;
    display.textContent = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function calculate() {
    try {
        result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
}