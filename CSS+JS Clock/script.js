// Select the HTML div class and creating variables
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand   = document.querySelector('.hour-hand');

function setDate() {
    // Gets time from cpu
    let now = new Date();

    // Transformes it into seconds
    const seconds = now.getSeconds();
    // console.log(seconds); // Verify
    // Translate 60 seconds to degrees, and plus 90 because css's `tansform: rotate`
    let secondsDegrees = ((seconds / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    // Transform it into minutes
    let minutes = now.getMinutes();
    let minutesDegrees = ((minutes / 60) * 360 + 90);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Transform it into hours
    let hours = now.getHours();
    let hoursDegrees = ((hours / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Run in that interval (1000s):
setInterval(setDate, 1000);