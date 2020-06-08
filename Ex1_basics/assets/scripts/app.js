// Variables
const defaultResult = 0;
let currentResult = defaultResult;

// Functions

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = "${resultBeforeCalc} ${operator} ${calcNumber}";
  outputResult(currentResult, calcDescription);
}

function add() {
  const enterNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, currentResult);
}

function subtract() {
  const enterNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, currentResult);
}

function multiply() {
  const enterNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", intialResult, currentResult);
}

function divide() {
  const enterNumber = getUserNumberInput();
  const initalResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, currentResult);
}

// currentResult = add(1, 2);
// let calculationDescription = "(${defaultResult} + 10) * 3 / 2 - 1";

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
