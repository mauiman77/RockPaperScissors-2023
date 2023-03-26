function getComputerChoice() {
    /*Create constant array called computerHand, containting 'Rock' 'Paper' 'Scissors'
    Return a random choice from computerHand*/
    const computerHand = ["Rock", "Paper", "Scissors"];
    return computerHand[Math.floor(Math.random() * computerHand.length)];
}