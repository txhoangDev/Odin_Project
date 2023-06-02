const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style = 'color: red';

container.appendChild(paragraph);

const heading = document.createElement('h3');
heading.textContent = "Hey I'm blue!";
heading.style = 'color: blue';

container.appendChild(heading);

const pink = document.createElement('div');
pink.style = 'border: 1px solid black; background-color: pink;';
pink.setAttribute('id', 'child');
 
container.appendChild(pink);

const childDiv = document.querySelector('#child');

const h1 = document.createElement('h1');
h1.textContent = "I'm a div";

childDiv.appendChild(h1);

const childP = document.createElement('p');
childP.textContent = "ME TOO!";

childDiv.appendChild(childP);

// adding listener to id button
// problem here is it only has one click function
const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");
// allows multiple event listeners (more flexible and powerful)
// btn.addEventListener('click', () => {
//     alert("Hello World");
// });
// this method has a callback
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

// selects all buttons
const buttons = document.querySelectorAll('button');
// iterate through each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});