function getComputerChoice() {
    const computerHand = ["Rock", "Paper", "Scissors"];
    return computerHand[Math.floor(Math.random() * computerHand.length)];
}

function getPlayerChoice() {
    const playerHand = prompt("Enter Rock or Paper or Scissors");
    return playerHand;
}

const computerChoice = getComputerChoice()
const playerChoice = getPlayerChoice()

if (computerChoice === playerChoice) {
    console.log("Draw")
}
else if (computerChoice === "Rock" && playerChoice === "Scissors" || computerChoice === "Paper" && playerChoice === "Rock" || computerChoice === "Scissors" && playerChoice === "Paper") {
    console.log("Computer Win")
}
else {
    console.log("Player Win")
}

