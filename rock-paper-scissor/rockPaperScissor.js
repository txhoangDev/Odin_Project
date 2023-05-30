const turn = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return turn[Math.floor(Math.random() * (3))];
}

function getWinner(computerChoice, playerChoice) {
    if(playerChoice == computerChoice) {
        return 'DRAW!';
    } else if (playerChoice == 'rock') {
        switch (computerChoice) {
            case 'paper':
                return 'You lose! Paper beats Rock';
            case 'scissors':
                return 'You Win!';
        }
    } else if (playerChoice == 'paper') {
        switch (computerChoice) {
            case 'rock':
                return 'You Win!';
            case 'scissors':
                return 'You lose! Scissors beats Paper';
        }
    } else if (playerChoice == 'scissors') {
        switch (computerChoice) {
            case 'rock':
                return 'You lose! Rock beats Scissors';
            case 'paper':
                return 'You Win!';
        }
    }
}

function game() {
    for(i = 0; i < 5; i ++) {
        let player = prompt("Choose Rock, Paper, or Scissors.");
        let computer = getComputerChoice();
        console.log(getWinner(player.toLowerCase(), computer));
    }
}