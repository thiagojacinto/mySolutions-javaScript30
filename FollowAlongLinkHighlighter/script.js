// Get all triggers - all 'a' tags = links
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  // console.log('Highlight!');
  // console.log(this); // Verify each element
  const linksCoords = this.getBoundingClientRect();
  console.log(linksCoords);

  // BIGGER HIGHLIGHT
  higherWidth = 30;
  higherHeight = higherWidth / 2;

  // Create a system of coordinates
  const coords = {
    width: linksCoords.width + higherWidth,
    height: linksCoords.height + higherHeight,
    left: linksCoords.left + window.scrollX - higherWidth / 2,
    top: linksCoords.top + window.scrollY - higherHeight / 2 
  };
  // highlight.style.width = `${linksCoords.width}px`;
  // highlight.style.height = `${linksCoords.height}px`;
  // highlight.style.transform = `translate(${linksCoords.left}, ${linksCoords.top})`;
  highlight.style.width = `${coords.width}px`; 
  highlight.style.height = `${coords.height}px`; 
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink)); 