function getComputerChoice() {
    /*Create constant array called computerHand, containting 'Rock' 'Paper' 'Scissors'
    Return a random choice from computerHand*/
    const computerHand = ["Rock", "Paper", "Scissors"];
    return computerHand[Math.floor(Math.random() * computerHand.length)];
}

function getPlayerChoice() {
    const playerHand = prompt("Enter Rock or Paper or Scissors");
    return playerHand;
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return 'Computer Wins'
    }
    else {
        return 'Ok test'
    }
}