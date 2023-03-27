function getComputerChoice() {
    const computerHand = ["Rock", "Paper", "Scissors"];
    return computerHand[Math.floor(Math.random() * computerHand.length)];
}

function getPlayerChoice() {
    const playerHand = prompt("Enter Rock or Paper or Scissors");
    return playerHand;
}

function playRound(player) {
    const computerChoice = getComputerChoice();
    const playerChoice = player.charAt(0).toUpperCase() + player.slice(1);
    console.log("Player " + playerChoice + " Computer " + computerChoice);
    if (computerChoice == playerChoice) {
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


const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const btns = document.querySelectorAll('.buttons button').forEach((item, index) => {
    item.addEventListener('click', () => {
        playRound(item.getAttribute('id'));
    })
});
