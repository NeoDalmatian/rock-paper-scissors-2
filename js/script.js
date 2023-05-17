let playerButtons = document.getElementById("buttons").childNodes;
let displayText = document.querySelector("h1");
let resetButton = document.querySelector(".reset");
// add UI for counters
let playerResult = 0;
let computerResult = 0;
let numberOfRounds = 0;

playerButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    round(e.target.attributes.id.value);
  });
});

resetButton.addEventListener("click", () => {
  displayText.textContent = "Play the game!";
  reset();
});

function randomNumber (n) {
  return Math.floor(Math.random() * n) + 1;
}

function getComputerChoice () {
  let conversion = randomNumber(3);
  return conversion === 1? "ROCK": conversion === 2? "PAPER": "SCISSORS";
}
//swap condition of else if to if so it looks neater
function round (playerSelection, computerSelection = getComputerChoice()) {
  if (playerSelection === computerSelection) {
    displayText.textContent =
     `This round is a tie, you both chose ${playerSelection}`;
    numberOfRounds++;
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
             playerSelection === "PAPER" && computerSelection === "ROCK" ||
             playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    displayText.textContent =
     `You WON this round! ${playerSelection} beats ${computerSelection}!`;
     numberOfRounds++;
     playerResult++;
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