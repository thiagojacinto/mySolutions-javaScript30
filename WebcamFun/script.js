// Refer to HTML tags
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
// gets frames from video and apply filters
const ctx = canvas.getContext('2d');

function getVideo() {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  }).then(localMediaStream => {
    console.log(localMediaStream);  // Verify
    // video.src = window.URL.createObjectURL(localMediaStream);  // DEPRECATED
    video.srcObject = localMediaStream;
  
    video.play();
  }).catch(err => {
    console.error(`Cam not authorized. Error: `, err);
  });
}

function paintToCanvas() {
  const width = video.videoWidth/2;
  const height = video.videoHeight/2;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // Take out pixels
    let pixels = ctx.getImageData(0, 0, width, height);
    
    // Apply a red filter
    // pixels = redEffect(pixels);

    // apply a rgbSplit filter
    pixels = rgbSplit(pixels);

    // apply the messing filter
    // pixels = greenScreen(pixels);

    // ghost effect + another filter
    ctx.globalAlpha = 0.12;
    
    // Put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // Play the sound
  snap.currentTime = 0;
  snap.play();

  // Take data out of canvas
  const data = canvas.toDataURL('image/jpeg');
  console.log(data);  // show a image-code style
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  // link.textContent = 'Download image';
  link.innerHTML = `<img src="${data}" alt="Photo from webcam" />`;
  strip.insertBefore(link, strip.firstChild);
  
}

function redEffect(pixels) {  // Turns red 
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] += 200;  // Red
    pixels.data[i + 1] -= 50;   // Green
    pixels.data[i + 2] *= 0.5;   // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {   // Mess with RGB of the image
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i - 0];   // Red
    pixels.data[i + 300] = pixels.data[i - 1];   // Green
    pixels.data[i - 250] = pixels.data[i - 2];   // Blue
  }
  return pixels;
}

// Background messing
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);