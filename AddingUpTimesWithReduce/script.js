// Get the 'li' elements
const timeNodes = document.querySelectorAll('[data-time]');
// Transform it to an Array
const arrayNodes = Array.from(timeNodes);

// Get in seconds
const seconds = arrayNodes
    .map(node => node.dataset.time) // Gets the dataset 'data-time' values
    .map(timeCode => {          // then, for that value do:
        const [mins, secs] = timeCode
            .split(':')         // Split identifier
            .map(parseFloat);   // Transform String to float number
            return (mins * 60) + secs;
    }).reduce((total, totalSeconds) => total + totalSeconds);
let secondsLeft = seconds;  // 'seconds' now is a number, 'reduced' from the 'arrayNodes'
const hours = Math.trunc(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600    // Gets the mod of that division to obtain 'hours'
const min = Math.trunc(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(hours, min, secondsLeft);

// On button click, shows total time:
const button = document.querySelector('.showButton input');
const anwser = document.querySelector('.result');

function showDuration() {
    // '+=' will make an add to actual '.result' div
    anwser.innerHTML += `   
        <p>${hours} : ${min} : ${secondsLeft}</p>
    `;
}
// When click happns on button, execute 'showDuration'
button.addEventListener('click',showDuration);