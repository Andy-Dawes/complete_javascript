const startGameBtn = document.getElementById("start-game-btn");

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, ' ').toUpperCase();
    if (
        selection !== 'ROCK' &&
        selection !== 'PAPER' &&
        selection !== 'SCISSORS'
    ) {
        alert(`You made an invalid choice. We chose ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerchoice = function () {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

startGameBtn.addEventListener("click", function startGame() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log("The game is starting!");
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
});