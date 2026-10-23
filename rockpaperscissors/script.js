let playerChoice;
let computerChoice;

const rockButtonjs = document.querySelector("#rockButton");
rockButtonjs.addEventListener("click", function () {
  playerChoice = "rock";
  getComputerChoice();
   let result = displayWinner(playerChoice, computerChoice);
console.log(result);
  console.log(playerChoice);
});
const paperButtonjs = document.querySelector("#paperButton");
paperButtonjs.addEventListener("click", function () {
  playerChoice = "paper";
  getComputerChoice();
   let result = displayWinner(playerChoice, computerChoice);
console.log(result);
  console.log(playerChoice);
});
const scissorsButtonjs = document.querySelector("#scissorsButton");
scissorsButtonjs.addEventListener("click", function () {
  playerChoice = "scissors";
  getComputerChoice();
   let result = displayWinner(playerChoice, computerChoice);
console.log(result);
  console.log(playerChoice);
});

function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 0.34) {
    computerChoice = "rock";
  } else if (randomNumber < 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
}
function displayWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
const resultDisplay = document.querySelector("#result");
resultDisplay.textContent = result;