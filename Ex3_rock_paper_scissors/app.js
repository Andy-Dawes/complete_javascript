const startGameBtn = document.getElementById("start-game-btn");

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const getPlayerChoice = function () {
    const selection = prompt('Choose Rock, Paper or Scissors: ', ' ');
    if (
        selection !== 'ROCK' &&
        selection !== 'PAPER' &&
        selection !== 'SCISSORS'
    ) {
        alert('You made an invalid choice. We chose Rock for you');
    }
}

startGameBtn.addEventListener("click", function startGame() {
    console.log("The game is starting!");
});