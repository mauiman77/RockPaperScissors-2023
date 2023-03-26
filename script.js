function getComputerChoice() {
    const computerHand = ["Rock", "Paper", "Scissors"];
    return computerHand[Math.floor(Math.random() * computerHand.length)];
}

function getPlayerChoice() {
    const playerHand = prompt("Enter Rock or Paper or Scissors");
    return playerHand;
}

function playRound() {
    const computerChoice = getComputerChoice()
    const playerChoice = getPlayerChoice()
    console.log("Player " + playerChoice + " Computer " + computerChoice)
    if (computerChoice === playerChoice) {
        console.log("Draw")
        return "Draw"
    }
    else if (computerChoice === "Rock" && playerChoice === "Scissors" || computerChoice === "Paper" && playerChoice === "Rock" || computerChoice === "Scissors" && playerChoice === "Paper") {
        console.log("Computer Win")
        return "Computer Win"
    }
    else {
        console.log("Player Win")
        return "Player Win"
    }
}

function playGame() {
    for ()
}

