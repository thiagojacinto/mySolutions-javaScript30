// Selecting all checkboxes from HTML
var checkboxes = document.querySelectorAll(
    '.inbox input[type="checkbox"]'
    );

let lastChecked= null;    // This will be reassigned frequently

function handleCheck(e) {
    // console.log(e); // Verify what event was triggered
    // Check if the SHIFT ky is down & checkbox was checked
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        // Loop over every checkbox:
        checkboxes.forEach(cb => {
            // console.log(cb); // Verify
            // Checks the first clicked and the last one
            if (cb === this || cb === lastChecked)  {
                inBetween = !inBetween;
                console.log(cb);
                // console.log('Starting to check the inbetween!');
                cb === this ? console.log("Finish checking.") : cb === lastChecked ? console.log("Start to check") : "";
            }
            // When in between is TRUE, check the checkbox
            if (inBetween) {
                cb.checked = true;
            }
        });
    }
    lastChecked = this;
}

// When clicked, fires the function 'handleCheck'
checkboxes.forEach(cb => cb.addEventListener(
     'click', handleCheck
)); 

// Clear selection button
var clear = document.querySelector('.buttondiv button'); 

function handleClear() {
    // Loops for every checkbox
    checkboxes.forEach(cb => {
        // Verify if its checked or not
        if(cb.checked) {
            // if it is, uncheck it!
            cb.checked = false;
            // console.log("Unchecked!");      // Verify
            console.count("Unchecked!");       // Count how many were unchecked
        }
    });
}

// When clicked, button clears selection
clear.addEventListener('click', handleClear);