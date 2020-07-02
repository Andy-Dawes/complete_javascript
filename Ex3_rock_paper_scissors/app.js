const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
    console.log("The game is starting!");
}

// const person = {
//     greet: function greet() {
//         console.log("Hello there!");
//     }
// };

// person.greet();

// console.log(typeof startGame());

startGameBtn.addEventListener("click", startGame);