const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    // modify the HTML tag class
    this.classList.toggle('open')
    // console.log("opened");
    var lastDiv = this.name;
    console.log(lastDiv);
    
}

function toggleActive(e) {
    console.log(e.propertyName);    // Verify the property change
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}
// On click, initiate flex-grow animation
panels.forEach(
    panel => panel.addEventListener('click', toggleOpen)
);
// After the initial animation, bring the upper and lower text
panels.forEach(
    panel => panel.addEventListener('transitionend', toggleActive)
);