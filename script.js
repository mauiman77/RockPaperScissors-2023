let playerScore = 0;
let computerScore = 0;

const scoreSection = document.querySelector('#score-section')
const scoreDisplay = document.createElement('div');
scoreSection.appendChild(scoreDisplay);
scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');


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
        scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore += 1}`;
        return "Computer Win"
    }
    else {
        console.log("Player Win")
        scoreDisplay.textContent = `Player: ${playerScore += 1} Computer: ${computerScore}`;
        return "Player Win"
    }
}

const btns = document.querySelectorAll('.buttons button').forEach((item, index) => {
    item.addEventListener('click', () => {
        playRound(item.getAttribute('id'));
    })
});
