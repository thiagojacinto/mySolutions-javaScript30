// Get fullscreenents from HTML
var player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
// -- fullscreen implementation
// Will use 'video' and 'fullscr button'
const fullscreenButton = document.querySelector('.fullscreenButton');

// Functions

function togglePlay() {
    // console.log("toggled");  // Verify
    let method = video.paused ? 'play' : 'pause';
    video[method]();
};

function updateButton() {
    // console.log("button updated"); // Verify
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    // console.log('Skipping!');       // Verifying
    // console.log(this.dataset.skip);
    video.currentTime += parseInt(this.dataset.skip)
}

function handleRangeUpdate() {
    // console.log(this.value);    // Verifying
    // console.log(this.name);
    video[this.name] = this.value;
}

function handleProgress() {
    let percent = (video.currentTime) / (video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function clickOnTime(e) {
    console.log(e);
    let clickTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = clickTime;
    
}
// -- to fullscreen

function handleFullscreen() {
    console.log("Turn it fullscreen!");
    if (document.fullscreenElement == null &&
        player.mozFullScreenElement == null && 
        player.webkitFullscreenElement == null &&
        player.msFullscreenElement == null) {
            console.log("Turn on FS");
            
            if(player.requestFullScreen){
                player.requestFullScreen();
                // Toggle 'player' class to ':fullscreen'
                player.classList.toggle(':fullscreen');
            } else if(player.webkitRequestFullScreen){
                player.webkitRequestFullScreen();
                // Toggle 'player' class to ':fullscreen' in webkit
                player.classList.toggle(':-webkit-full-screen');
            } else if(player.mozRequestFullScreen){
                player.mozRequestFullScreen();
                // Toggle 'player' class to ':fullscreen'
                player.classList.toggle(':fullscreen');
            }
    } else {
        console.log("Turn off FS");
        
        if (document.exitFullscreen) {
            document.exitFullscreen();
            player.classList.toggle(':fullscreen');
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            player.classList.toggle(':fullscreen');
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            player.classList.toggle(':fullscreen');
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            player.classList.toggle(':-webkit-full-screen');
          }
    }
    
}

// Event listeners

// Play:
video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateButton);  // Changes the button
video.addEventListener('play', updateButton);
toggle.addEventListener('click', togglePlay);
// Skip
skipButtons.forEach(button => button.addEventListener('click', skip))
// Ranges
ranges.forEach(range => {
    // Both volume and videoSpeed ;)
    range.addEventListener('change', handleRangeUpdate);
    range.addEventListener('mousedown', handleRangeUpdate);
})
// Progress bar view
video.addEventListener('timeupdate', handleProgress);
// Progress bar click
progress.addEventListener('click', clickOnTime);
progress.addEventListener('mousemove', (e) => mousedown && clickOnTime(e));
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

// Fullscreen tentative
// let isFull = false;
// fullscreen.addEventListener('click', () => isFull ? false : true);
// fullscreen.addEventListener('click', (e) => isFull && handleFullscreen(e));
fullscreenButton.addEventListener('click', handleFullscreen, false);