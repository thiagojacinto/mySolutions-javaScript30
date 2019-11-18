// Using API from browsers to read text.
const msg = new SpeechSynthesisUtterance();
let voices = [];
// Get HTML elements
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
// Add the textarea value to be read
msg.text = document.querySelector('[name="text"]').value;

// Make a drop down of voice choices
function populateVoices() {
  voices = speechSynthesis.getVoices();
  console.log(voices);  //Verify
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (Lang: ${voice.lang})</option>`)
    .join('');
}

// Use the selected voice
function setVoice() {
  // console.log('Changing voices... '); // Verify
  console.log(this.value);
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel(); // Stops execution of speech
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

populateVoices(); // forced execution because the listener was never fired by it self.
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(opt => opt.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));