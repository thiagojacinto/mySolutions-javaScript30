// Selecting HTML items
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

// Function to add
function addItem(e) {
    // console.log('Hello'); // Verify
    e.preventDefault(); // All client-side
    let text = (this.querySelector('[name=item]')).value;
    let item = {
        text: text,
        done: false
    };
    // console.log(item);  // Verify the object
    // Add to the array
    items.push(item);   
    // Re-render the HTML
    populateList(items, itemsList);
    // Set items array to local storage:

    localStorage.setItem(
        'items',
        JSON.stringify(items)
    );

    // clean the text-area
    this.reset();       
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index = ${i} id = "item${i}" ${plate.done ? 'checked' : ''} />
                <label for="">${plate.text}</label>
            </li>
        `;
    }).join('');
}

// Saves the 'done' state of the  item's objects
function toggleDone(e) {
    // console.log(e.target);  // Verify where it clicks
    // This skips until it's an input
    if (!e.target.matches('input')) return;
    let element = e.target;             // Element (input) that has been clicked one
    let index = element.dataset.index;  // Gets the index from data-index
    items[index].done = !items[index].done; // Inverts it when clicked
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

// From form, listen for 'submit' = hits enter
addItems.addEventListener('submit', addItem);
addItems.addEventListener('submit', toggleDone);

populateList(items, itemsList);