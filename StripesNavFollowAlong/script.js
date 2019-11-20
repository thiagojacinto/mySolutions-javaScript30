// Get elements
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  // console.log('ENTER!');  // verify
  this.classList.add('trigger-enter');
  if (this.classList.contains('trigger-enter')) {
    setInterval(() => this.classList.add('trigger-enter-active'), 200); // using arrow function, 'this' maintain the original value. It does not happen if you use a 'function' call.
  }

  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  console.log(dropdown);  // Verify witch one
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,    // Not the absolute top as standard 
    left: dropdownCoords.left - navCoords.left  // Not the absolute left as standard 
  }

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
  // console.log('LEAVE!');  // verify
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  // this.classList.remove('trigger-enter-active');
  // setInterval(() => this.classList.remove('trigger-enter'), 150);
  background.classList.remove('open');
}

// Listeners
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));