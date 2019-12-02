window.addEventListener('DOMContentLoaded', function () {
  const speed = document.querySelector('.speed');
  const bar = document.querySelector('.speed-bar');
  const video = document.querySelector('.video-flex');

  const min = 0.2;
  const max = 5;

  function speedUpOrDown(e) {
    // console.log(e); // Verify
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    // console.log(y, percent);  // Verify
    const barHeight = Math.round(percent * 100) + '%';
    console.log(barHeight);
    let playbackRate = percent * (max - min) + min;
    // Add style to the element
    bar.style.height = barHeight;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    // Then manage the video play rate
    video.playbackRate = playbackRate;
  }

  speed.addEventListener('mousedown', speedUpOrDown);

  // EXTRA 

  const button1 = document.querySelector('.button1x');
  const button2 = document.querySelector('.button2x');

  function setSpeed1x() {
    let z = 0.16585365853658537;

    console.log("Clicked, z = default speed");
    let barHeight = Math.round(z * 100) + '%';
    let playbackRate = z * (max - min) + min;

    // Manage speed slider style
    bar.style.height = barHeight;
    bar.textContent = playbackRate.toFixed(2) + 'x';

    // Sets video property
    video.playbackRate = playbackRate;
  }

  function setSpeed2x() {
    let z = 0.375609756097561;
    console.log("Clicked, z = 2x faster");
    let barHeight = Math.round(z * 100) + '%';
    let playbackRate = z * (max - min) + min;

    // Manage speed slider style
    bar.style.height = barHeight;
    bar.textContent = playbackRate.toFixed(2) + 'x';

    // Sets video property
    video.playbackRate = playbackRate;
  }

  // Representing 1x
  button1.addEventListener('click', setSpeed1x);
  // Representing 2x
  button2.addEventListener('click', setSpeed2x); 
});