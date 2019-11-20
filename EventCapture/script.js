// Get all divs
const divs = document.querySelectorAll('div'); 

function logText(e) {
  console.log(this.classList.value);
  // To NOT bubble it up
  e.stopPropagation();
}
// document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,   // Inverts the order. Defalut is FALSE
  once: true        // Only listen to ONCE run.
}));

 // Get the button
 const button = document.querySelector('.btn');
 button.addEventListener('click', function clickMe() {
   console.log('You clicked me!');
 }, {
   once: true
 })