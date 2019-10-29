// External source 'cities json source' from Javascript30 example
// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const endpoint = 'https://raw.githubusercontent.com/kelvins/Municipios-Brasileiros/master/json/municipios.json';

// Array to put the cities into:
const cities = [];

fetch(endpoint) // Promise
    .then(blob => blob.json())  // there's a json method in the properties
    .then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
    // Searches the array cities trying to match search input 
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi') // g = global looking for intire array, and i = insensitivity regards upper or lowercase
        // return place.city.match(regex) || place.state.match(regex)   // FOR js30
        return place.nome.match(regex);
    });
}

// function to put points on large numbers (brazillian number ponctuation)
function numberWithPoints(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function displayMatches() {
    // console.log(this.value); // verify
    const matchArray = findMatches(this.value, cities);
    console.log(matchArray);    // verify
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        // const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        // const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        const cityName = place.nome.replace(regex, `<span class="hl">${this.value}</span>`);
        /* return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithPoints(place.population)}</span>
            </li>
        `;
        */
       return `
            <li>
                <span class="name">${cityName}</span>
                <span class="ibgeCode">${place.codigo_ibge}</span>
            </li>
       `;
    }).join('');
    suggestions.innerHTML = html;   // updates the HTML with the suggestions list
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('chage', displayMatches);
searchInput.addEventListener('keyup', displayMatches);