// WORKS ONLY IN CHROME 
window.SpeechRecognition = window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// then let it works while speaking
recognition.interimResults = true;
// Sets the language to be transcripted
recognition.lang = 'pt-BR';

// Creates a paragraph
let p = document.createElement('p');
const words = document.querySelector('.words');
// Inserts 'p' inside '.words' class
words.appendChild(p);

recognition.addEventListener('result', e => {
  // console.log(e);
  if (!off) { // Controlled by the button
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    
    console.log(transcript);  // Verify the sentence
    
    p.textContent = transcript;

    // To add another paragraph every time you stop speeking
    if (e.results[0].isFinal) {
      // console.log('\n Creates another paragraph. \n');
      p = document.createElement('p');
      words.appendChild(p);
    }
  }
})
// To start over after finishing sentences
recognition.addEventListener('end', recognition.start);

recognition.start();

// Step 1 - Create a stop button
const stopListening = document.querySelector('.stop-button button');
let off = false;
stopListening.addEventListener('click', e=> {
  off = !off;
  console.log('Listening? ', off);
});



// Step 2 - Creating a todolist
