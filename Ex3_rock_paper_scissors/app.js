const startGameBtn = document.getElementById("start-game-btn");

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = function () {
    const selection = prompt('Choose ${ROCK}, ${PAPER} or ${Scissors}: ', ' ').toUpperCase();
    if (
        selection !== 'ROCK' &&
        selection !== 'PAPER' &&
        selection !== 'SCISSORS'
    ) {
        alert('You made an invalid choice. We chose ${DEFAULT_USER_CHOICE} for you');
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

startGameBtn.addEventListener("click", function startGame() {
    console.log("The game is starting!");
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});