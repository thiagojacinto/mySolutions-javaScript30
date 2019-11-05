// variables and secret word sequence
var pressed = [];   // An array to keep all pressed keys
const secretCode = "jacinto";

// Listen the keypress
window.addEventListener('keyup', (e) => {
    console.log(e.key);     // Verify the pressed key
    pressed.push(e.key);    // Adds the key into the array
    // To trim the pressed size, 
    //      and updates it deleting the first 
    //      and adding a last element
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log(pressed);   // Verify the content of the array
    
    // If the pressed correspond to the secretcode:
    if (pressed.join('').includes(secretCode)) {
        console.log("DING, DING: You found the secret code!");
        cornify_add();
    }
});