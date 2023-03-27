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

function addScore(winner) {
    if (winner === "Player Win") {
        return playerScore += 1
    }
    else if (winner === "Computer Win") {
        return computerScore += 1;
    }
    else {
        return;
    }
}

function getWinner() {
    if (computerScore === 5) {
        alert("You lose!");
    }
    else {
        alert("You win!");
    }
    
}


function playRound(player) {
    const computerChoice = getComputerChoice();
    const playerChoice = player.charAt(0).toUpperCase() + player.slice(1);
    console.log("Player " + playerChoice + " Computer " + computerChoice);
    if (computerChoice == playerChoice) {
        console.log("Draw")
        return
    }
    else if (computerChoice === "Rock" && playerChoice === "Scissors" || computerChoice === "Paper" && playerChoice === "Rock" || computerChoice === "Scissors" && playerChoice === "Paper") {
        console.log("Computer Win")
        addScore("Computer Win")
    }
    else {
        console.log("Player Win")
        addScore("Player Win")
    }

    if (playerScore === 5 || computerScore === 5) {
        getWinner();
    }

    scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    return;
}

const btns = document.querySelectorAll('.buttons button').forEach((item, index) => {
    item.addEventListener('click', () => {
        playRound(item.getAttribute('id'));
    })
});
