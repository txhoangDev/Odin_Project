// adding event listeners
const btns = document.querySelectorAll('#choice');
btns.forEach(btn => btn.addEventListener('click', getWinner))

const div = document.querySelector('#result');
div.style = 'justify-content: center; align-items: center;';
const text = document.querySelector('#text');
const score = document.querySelector('#score'); 

const turn = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return turn[Math.floor(Math.random() * (3))];
}

function reset() {
    playerScore = 0;
    computerScore = 0;
}

function getWinner(e) {
    const player = e.target.textContent.toLowerCase();
    const computer = getComputerChoice();
    if(player === computer) {  
        text.textContent = 'Draw';
    } else if (player === 'rock') {
        switch (computer) {
            case 'paper':
                text.textContent = 'You lose! Paper beats Rock';
                computerScore += 1;
                break;
            case 'scissors':
                text.textContent = 'You Win!';
                playerScore += 1;
                break;
        }
    } else if (player === 'paper') {
        switch (computer) {
            case 'rock':
                text.textContent = 'You Win!';
                playerScore += 1;
                break;
            case 'scissors':
                text.textContent = 'You lose! Scissor beats Paper';
                computerScore += 1;
                break;
        }
    } else if (player === 'scissor') {
        switch (computer) {
            case 'rock':
                text.textContent = 'You lose! Rock beats Scissor';
                computerScore += 1;
                break;
            case 'paper':
                text.textContent = 'You Win!';
                playerScore += 1;
                break;
        }
    }
    if (playerScore === 5 || computerScore === 5) {
        reset();
    }
    score.textContent = `${playerScore} - ${computerScore}`;
}