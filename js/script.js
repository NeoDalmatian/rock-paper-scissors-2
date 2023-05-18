let playerButtons = document.querySelectorAll(".buttons button");
let displayText = document.querySelector("h1");
let resetButton = document.querySelector(".reset");
// add UI for counters
let playerResult = 0;
let computerResult = 0;
let numberOfRounds = 0;

playerButtons.forEach(button => {
  button.addEventListener("click", () => {
    round(button.textContent);
  });
});

resetButton.addEventListener("click", () => {
  displayText.textContent = "Play the game!";
  reset();
});

function getComputerChoice () {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber === 1? "ROCK": randomNumber === 2? "PAPER": "SCISSORS";
}

function round (playerSelection, computerSelection = getComputerChoice()) {
  if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
      playerSelection === "PAPER" && computerSelection === "ROCK" ||
      playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    displayText.textContent =
     `You WON this round! ${playerSelection} beats ${computerSelection}!`;
    numberOfRounds++;
    playerResult++;
  } else if (playerSelection === computerSelection) {
    displayText.textContent =
     `This round is a tie, you both chose ${playerSelection}`;
    numberOfRounds++;
  } else {
    displayText.textContent =
     `You LOST this round! ${playerSelection} loses to ${computerSelection}!`;
    numberOfRounds++;
    computerResult
  }
  result();
}

function result () {
  if (numberOfRounds === 5) {
    if (playerResult === computerResult) {
      displayText.textContent = "It's a tie!"
    } else if (playerResult > computerResult) {
      displayText.textContent = "You WON the game!"
    } else if (playerResult < computerResult) {
      displayText.textContent = "You LOST the game!"
    }
    reset();
  } 
}

function reset () {
  numberOfRounds = 0;
  playerResult = 0;
  computerResult = 0;
}