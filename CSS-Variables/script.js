const inputs =
 document.querySelectorAll('.controls input');


function handleUpdate() {
    console.log(this.name);     // property name
    console.log(this.value);    // property value
    console.log(this.dataset);  // list all 'data-' HTML tags
    
    // Suffix added when needed for correct value information
    const suffix = this.dataset.sizing || '';
    // With the value, the current property is refreshed
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    
}
// handleUpdate will run when: change and when mouse moves
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));