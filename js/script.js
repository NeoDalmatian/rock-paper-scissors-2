function randomNumber (n) {
  return Math.floor(Math.random() * n) + 1;
}

function getComputerChoice () {
  return randomNumber(3) === 1? "ROCK": randomNumber(3) === 2? "PAPER": "SCISSORS";
}