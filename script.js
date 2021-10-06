// Computer's random choice of RPS
function computerSelection() {
    let computerChoice;
    let computer = Math.floor((Math.random()*3) + 1);
    if (computer == 1) {
        computerChoice = "rock";
    } else if (computer == 2) {
        computerChoice = "paper";
    } else if (computer == 3) {
        computerChoice = "scissors";
    }    
    return computerChoice;
}

// Variables to keep track of scores
let playerWins = 0;
let computerWins = 0;

// DOM 
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const playerScore = document.querySelector('#player-wins');
const computerScore = document.querySelector('#computer-wins');
const reloadBtn = document.querySelector('#reload');

// Single round of RPS
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = 'You are tied!';
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerWins++;
            result.textContent = 'You lose!';
            playerScore.textContent = playerWins;
            computerScore.textContent = computerWins;
        } else if (computerSelection === 'scissors') {
            playerWins++;
            result.textContent = 'You win!';
            playerScore.textContent = playerWins;
            computerScore.textContent = computerWins;
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerWins++;
            result.textContent = 'You lose!';
            playerScore.textContent = playerWins;
            computerScore.textContent = computerWins;
        } else if (computerSelection === 'rock') {
            playerWins++;
            result.textContent = 'You win!';
            playerScore.textContent = playerWins;
            computerScore.textContent = computerWins;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerWins++;
            result.textContent = 'You lose!';
            playerScore.textContent = playerWins;
            computerScore.textContent = computerWins;
        } else if (computerSelection === 'paper') {
            playerWins++;
            result.textContent = 'You win!';
            playerScore.textContent = playerWins;
            computerScore.textContent = computerWins;
        }
    }
}

// 5 games of RPS
function game(playerSelection) {
    playRound(playerSelection, computerSelection());

    if (playerWins > 5 && computerWins < 5) {
        location.reload();
    } else if (playerWins < 5 && computerWins > 5) {
        location.reload();
    }
    else if (playerWins == 5) {
        result.textContent = 'You won 5 games of RPS!';
    } else if (computerWins == 5) {
        result.textContent = 'You lost 5 games of RPS!';
    }
}

// Click event listener of buttons
rock.addEventListener('click', () => {
    game('rock');
});
paper.addEventListener('click', () => {
    game('paper');
});
scissors.addEventListener('click', () => {
    game('scissors');
});

reloadBtn.addEventListener('click', () => {
    location.reload();
});