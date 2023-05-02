let playerResult = 0;
let computerResult = 0;
let numberOfRounds = 0;

function randomNumber (n) {
  return Math.floor(Math.random() * n) + 1;
}

function getComputerChoice () {
  let conversion = randomNumber(3);
  return conversion === 1? "ROCK": conversion === 2? "PAPER": "SCISSORS";
}

function round (playerSelection, computerSelection = getComputerChoice()) {
  playerSelection = playerSelection.toUpperCase();
  if (playerSelection === computerSelection) {
    return `This round is TIE! ${playerSelection} and ${computerSelection} are equal.`;
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
      playerSelection === "PAPER" && computerSelection === "ROCK" ||
      playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerResult++;
    return `You WON this round! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK" ||
      playerSelection === "ROCK" && computerSelection === "PAPER" ||
      playerSelection === "PAPER" && computerSelection === "SCISSORS"){
    computerResult++;
    return `You LOST this round! ${playerSelection} loses to ${computerSelection}!`;
  } else {
    numberOfRounds--;
    return `${playerSelection} is invalid input, either enter rock, paper or scissors`
  }
}
 
function game() {
  for (numberOfRounds = 0; numberOfRounds < 5; numberOfRounds++) {
    console.log(round(prompt()));
  }

  if (numberOfRounds === 5) {
    if (playerResult === computerResult) {
      console.log("It's a tie!")
      reset();
    } else if (playerResult > computerResult) {
      console.log("You WON the game!")
      reset();
    } else if (playerResult < computerResult) {
      console.log("You LOST the game!")
      reset();
    }
  }
}

function reset() {
  playerResult = 0;
  computerResult = 0;
  numberOfRounds = 0;
}