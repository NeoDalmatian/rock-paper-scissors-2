function randomNumber (n) {
  return Math.floor(Math.random() * n) + 1;
}

function getComputerChoice () {
  return randomNumber(3) === 1? "ROCK": randomNumber(3) === 2? "PAPER": "SCISSORS";
}

function round (playerSelection, computerSelection = getComputerChoice()) {
  playerSelection = playerSelection.toUpperCase();
  if (playerSelection === computerSelection) {
    return `This round is TIE! ${playerSelection} and ${computerSelection} are equal.`;
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
      playerSelection === "PAPER" && computerSelection === "ROCK" ||
      playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    return `You WON this round! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK" ||
      playerSelection === "ROCK" && computerSelection === "PAPER" ||
      playerSelection === "PAPER" && computerSelection === "SCISSORS"){
    return `You LOST this round! ${playerSelection} loses to ${computerSelection}!`;
  } else {
    return `${playerSelection} in invalid input, please enter either rock, paper or scissors`
  }
}