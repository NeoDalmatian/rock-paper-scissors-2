let playerButtons = document.querySelectorAll(".buttons button");
let displayText = document.querySelector("h1");
let resetButton = document.querySelector(".reset");
let displayResult = document.querySelectorAll("h4 span");

let playerResult = 0;
let computerResult = 0;
let numberOfRounds = 0;

// Add event listeners to player buttons
playerButtons.forEach(button => {
  // When player button is clicked, initiate a round with the selected choice
  button.addEventListener("click", () => {
    round(button.textContent);
  });
});

// Add event listener to the reset button
resetButton.addEventListener("click", () => {
  // Reset the game when reset button is clicked
  displayText.textContent = "Play the game!";
  reset();
  resetDisplay(numberOfRounds);
});

// Generate a random choice for the computer
function getComputerChoice () {
  // Generate random number between 1 and 3 and map it to "ROCK", "PAPER", or "SCISSORS"
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber === 1? "ROCK": randomNumber === 2? "PAPER": "SCISSORS";
}

// Perform a round of the game
function round (playerSelection, computerSelection = getComputerChoice()) {
  if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
      playerSelection === "PAPER" && computerSelection === "ROCK" ||
      playerSelection === "SCISSORS" && computerSelection === "PAPER") {
      // Player wins the round
    displayText.textContent =
     `You WON this round! ${playerSelection} beats ${computerSelection}!`;
    numberOfRounds++;
    playerResult++;
    displayResult[1].textContent = numberOfRounds;
    displayResult[0].textContent = " " + playerResult;
  } else if (playerSelection === computerSelection) {
      // Round is a tie
    displayText.textContent =
     `This round is a tie, you both chose ${playerSelection}`;
    numberOfRounds++;
    displayResult[1].textContent = numberOfRounds;
  } else {
      //Computer wins a round
    displayText.textContent =
     `You LOST this round! ${playerSelection} loses to ${computerSelection}!`;
    numberOfRounds++;
    computerResult++;
    displayResult[1].textContent = numberOfRounds;
    displayResult[2].textContent = " " + computerResult;
  }
  result();
  resetDisplay(1);
}

// Determine the final result of the game
function result () {
  if (numberOfRounds === 5) {
    if (playerResult === computerResult) {
      // Game ends in a tie
      displayText.textContent = "It's a tie!"
    } else if (playerResult > computerResult) {
      // Player wins the game
      displayText.textContent = "You WON the game!"
    } else if (playerResult < computerResult) {
      // Player loses the game
      displayText.textContent = "You LOST the game!"
    }
    reset();
  } 
}

// Reset the game state
function reset () {
  numberOfRounds = 0;
  playerResult = 0;
  computerResult = 0;

}

// Reset the display of game state
function resetDisplay (n) {
  if (numberOfRounds === n) {
    displayResult[1].textContent = numberOfRounds;
    displayResult[0].textContent = " " + playerResult;
    displayResult[2].textContent = " " + computerResult;
  }  
}