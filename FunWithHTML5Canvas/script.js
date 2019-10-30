// Selecting 'draw' id from HTML
const canvas = document.querySelector('#draw');
const stroke = canvas.getContext('2d');
// Making the 'draw' element the size of the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Configuring the stroke
// stroke.strokeStyle = '#BADASS';
stroke.lineJoin = 'round';
stroke.lineCap = 'round';
// stroke.lineWidth = 100;
// Flag to draw or not (just while clicking)
let isDrawing = false;
// Ending coordinates to the drawing
let lastX = 0; 
let lastY = 0;
let hue = 0;
let direction = true;;

function draw(e) {
    if(!isDrawing) return; // Stop the function from running
    console.log(e);
    // Style the stroke
    stroke.strokeStyle = `hsl(${hue}, 80%, 50%)`;
    hue++;
    // Reseting hue form HSL
    if (hue > 360) {hue = 0;};
    if (stroke.lineWidth >= 100 || stroke.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        stroke.lineWidth++;
    } else {
        stroke.lineWidth--;
    }
    stroke.beginPath();
    // Drawing starts from here:
    stroke.moveTo(lastX, lastY);
    // then goes to:
    stroke.lineTo(e.offsetX, e.offsetY);
    stroke.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
// Events listeners
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);