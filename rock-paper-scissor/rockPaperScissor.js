document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    var copyrightFooter = document.getElementById("footer");
    copyrightFooter.innerHTML =
      "Copyright &copy; " + currentYear + " Thuong Hoang";
  });

// adding event listeners
const btns = document.querySelectorAll('#choice');
btns.forEach(btn => btn.addEventListener('click', getWinner))

const div = document.querySelector('#result');
div.style = 'justify-content: center; align-items: center;';
const text = document.querySelector('#text');
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * (3))];
}

function reset() {
    pscore.textContent = '0';
    cscore.textContent = '0';   
}

function getWinner(e) {
    const pscore = document.querySelector('#pscore');
    const cscore = document.querySelector('#cscore');
    const text = document.querySelector('#text');
    let player = e.target.alt;
    if (player == null) {
        player = e.target.querySelector('img').alt;
    }
    const computer = getComputerChoice();
    if (player === computer) {
        typewriterEffect(text, 'Draw!');
    } else if (player === 'rock') {
        switch (computer) {
            case 'paper':
                typewriterEffect(text, 'You lose! Paper beats Rock');
                cscore.textContent = +cscore.textContent + 1;
                break;
            case 'scissors':
                typewriterEffect(text, 'You Win!');
                pscore.textContent = +pscore.textContent + 1;
                break;
        }
    } else if (player === 'paper') {
        switch (computer) {
            case 'rock':
                typewriterEffect(text, 'You Win!');
                pscore.textContent = +pscore.textContent + 1;
                break;
            case 'scissors':
                typewriterEffect(text, 'You lose! Scissor beats Paper');
                cscore.textContent = +cscore.textContent + 1;
                break;
        }
    } else if (player === 'scissor') {
        switch (computer) {
            case 'rock':
                typewriterEffect(text, 'You lose! Rock beats Scissor');
                cscore.textContent = +cscore.textContent + 1;
                break;
            case 'paper':
                typewriterEffect(text, 'You Win!');
                pscore.textContent = +pscore.textContent + 1;
                break;
        }
    }
    if (pscore.textContent == 5 || cscore.textContent == 5) {
        reset();
    }
}

// Function to animate the typewriter effect
function typewriterEffect(element, message) {
    element.textContent = ''; // Clear the element's current content
    const characters = message.split(''); // Split the message into individual characters

    let index = 0;
    const timer = setInterval(() => {
        element.textContent += characters[index];
        index++;
        if (index === characters.length) {
            clearInterval(timer);
        }
    }, 100); // Adjust the typing speed by changing the interval duration (e.g., 100ms)

    element.classList.add('typing'); // Apply the typing animation style
}

