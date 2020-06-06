// Variables
const defaultResult = 0;
let currentResult = defaultResult;

// Function

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, "");
}

// currentResult = add(1, 2);
// let calculationDescription = "(${defaultResult} + 10) * 3 / 2 - 1";

addBtn.addEventListener("click", add);
