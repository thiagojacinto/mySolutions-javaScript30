// Get HTML elements
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

const timesUpVideo = document.querySelector('.timesUpVideo');

const buttons = document.querySelectorAll('[data-time]')

// Global variable
let countdown;

function timer(seconds) {
  // Clear any other existing timers
  clearInterval(countdown);

  // EXTRA - Remove video if another time is set
  videoHandling();  

  const now = Date.now();
  const then = now + (seconds * 1000); // Transform in milliseconds
  console.log(now, then);  // Verify time inputs in milliseconds

  // Calling functions
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // Stop counting down when:
    if (secondsLeft < 0) {
      clearInterval(countdown);

      // Start the video  - PART OF EXTRA
      timesUpVideo.innerHTML = `<iframe width="420" height="315"
      src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
      </iframe>`; 

      return;
    }
    // Then display it
    displayTimeLeft(secondsLeft);

  }, 1000);
}

function displayTimeLeft(seconds) {

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  // Organize message
  let display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

  // Changing elements
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  // const adjustedHour = hour > 12 ? hour - 12 : hour;

  let adjustedHour = hour;
  let adjustedAuxiliar = "AM";

  if (hour > 12) {
    adjustedHour = hour - 12;
    adjustedAuxiliar = 'PM';
  }

  const minutes = end.getMinutes();

  // Changing
  endTime.textContent = `Be back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes} ${adjustedAuxiliar}`
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

// EXTRA - video handler

function videoHandling() {
  // Verify if HTML content of that div is null
  if(timesUpVideo.innerHTML != '') {
    // Clears is up
    timesUpVideo.innerHTML = '';
  }
}

// Listeners of buttons
buttons.forEach(button => button.addEventListener('click', startTimer));

// Form dealing
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);  // Verify
  timer(mins * 60);
  this.reset(); // Clear the value

}); 