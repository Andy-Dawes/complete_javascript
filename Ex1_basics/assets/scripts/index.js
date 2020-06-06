// Variables
const defaultResult = 0;
let currentResult = defaultResult;

// Function

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

// currentResult = add(1, 2);
// let calculationDescription = "(${defaultResult} + 10) * 3 / 2 - 1";

addBtn.addEventListener("click", add);

// show current result and description of calculation
outputResult(currentResult, calculationDescription);
