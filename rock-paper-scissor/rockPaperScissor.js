const turn = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return turn[Math.floor(Math.random() * (3))];
}