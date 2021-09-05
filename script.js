function computerPlay() {
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

function playRound(playerSelection, computerSelection) {
    let result;
    playerSelection = prompt("What is your choice? ");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        result = "You are tied!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You lose! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You lose! Scissors beats paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You lose! Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You win! Paper beats rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You win! Scissors beats paper.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You win! Rock beats scissors.";
    }
    return result;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result.includes("You win")) {
            console.log("You win!");
            playerWins++;
        } else if (result.includes("You lose")) {
            console.log("You lose!");
            computerWins++;
        }
    }
    if (playerWins > computerWins) {
        console.log("Player wins!");
        return ("Player wins!");
    } else if (computerWins > playerWins) {
        console.log("Computer wins!");
        return ("Computer wins!");
    }
}