// Array of data
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Remove the 'an', 'the', 'a', etc..
function strip(word) {
    return word.replace(/^(a |the |an )/i, '').trim();
}

// Sorting
const ordered = bands.sort((a, b) => {
    // return a > b ? 1 : -1;
    return strip(a) > strip(b) ? 1 : -1;
});

// Grab the bands 'ul'
document.querySelector('#bands').innerHTML = ordered
    // .map(band => `<li>${band}</li>`)
    .map(band => `
        <div class="item">
            <input type="checkbox">
            <p>${band}</p>
        </div>
        `)
    .join('');