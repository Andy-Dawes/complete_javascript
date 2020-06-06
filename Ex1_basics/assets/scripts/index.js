// // Variables
// const defaultResult = 0;
// let currentResult = defaultResult;

// // Function

// function add() {
//   currentResult = currentResult + userInput.value;
//   outputResult(currentResult, "");
// }

// // currentResult = add(1, 2);
// // let calculationDescription = "(${defaultResult} + 10) * 3 / 2 - 1";

// addBtn.addEventListener("click", add);

// Assignment - Functions

// 1:

const task3Element = document.getElementByID("task-3");

function dad() {
  alert("This is an alert about my Dad");
}

function mum(name) {
  alert("Hi " + name);
}

task3Element.addEventListener("click", dad);
mum("Wynne");

function stringSentence(first, second, third) {
  const combinedText = "${first} ${second} ${third}";
  return combinedText;
}

const combinedString = combine("This is " + "my sentence " + "for the test.");
alert(combinedString);
