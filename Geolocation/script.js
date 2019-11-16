// Select tags
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// gets geo data
// TESTED: On Android OS 9, Chrome
//    Was necessary to allow 'locaction' and 'movement sensors' 
navigator.geolocation.watchPosition(data => {
  console.log(data);  // verify
  // Show speed
  speed.textContent = Math.round(data.coords.speed);
  // Rotates the arrow
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.log(err);   // Show the error
  alert('HEY! You need to allow it to happen!')
});