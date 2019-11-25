const slider = document.querySelector('.items');
// Flag when clicking or not
let isDown = false;
let startX;
let scrollLeft;

// Functions

// Function when mouse is clicked
function mouseIsDown(e) {
  isDown = true
  slider.classList.add('active');
  console.log(e.pageX);   // verify the pageX
  // Calculates the scroll in x-axis
  startX = e.pageX - slider.offsetLeft;
  console.log(startX);    // Verify startX value
  scrollLeft = slider.scrollLeft;
  
}

// Function mouse leaves
function mouseIsLeaving() {
  isDown = false;
  slider.classList.remove('active');
}

// Function mouse is up
function mouseIsUp() {
  isDown = false;
  slider.classList.remove('active');
}

// Function: mouse moviments
function mouseMoving(e) {
  if (!isDown) return;  // Stops the function
  // console.count(isDown);  // Verify 'isDown'
  e.preventDefault();   // Stops browser refresh and others things
  const x = e.pageX - slider.offsetLeft;
  console.log({x, startX});   // Verify
  const walk = (x - startX) * 4;  // How far is from start value (when mouse is first clicked)
  slider.scrollLeft = scrollLeft - walk;

}
// Event listeners
slider.addEventListener('mousedown', (e) => mouseIsDown(e));

slider.addEventListener('mouseleave', () => mouseIsLeaving);

slider.addEventListener('click', () => mouseIsUp);

slider.addEventListener('mousemove', (e) => mouseMoving(e));