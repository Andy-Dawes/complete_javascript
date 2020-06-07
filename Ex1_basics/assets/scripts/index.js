// Variables
const defaultResult = 0;
let currentResult = defaultResult;

// Function

function add() {
    const enterNumber = parseInt(userInput.value);
    const calcDescription = '${currentResult} + ${enteredNumber}';
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
}

// currentResult = add(1, 2);
// let calculationDescription = "(${defaultResult} + 10) * 3 / 2 - 1";

addBtn.addEventListener("click", add);

