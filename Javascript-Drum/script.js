// Javascript file into JavaScript Drum project

let playSound = e => {
  //console.log(e); // Verify
  const audio = document.querySelector( `audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector( `.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // Stop function
  audio.currentTime = 0; // Rewind to the beginning
  audio.play();
  key.classList.add('playing'); // Changing css class of the element
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    return; // Skips if it's not a 'transform'
  }
  //console.log(e); // Verify
  this.classList.remove('playing');
}

// Script keeps an eye on the key, when it's changing its css style
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// A function to gets what happens inside the site's screen
window.addEventListener('keydown', playSound);
