const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}
    // Regular
    console.log('Regular log: ');
    console.log('regular log @ console');
    
    // Interpolated
    console.log('Interpolated log: ');
    console.log('Hello I am a %s string!', 'coconut');
    // console.log('Hello I am a ${var} string!');

    // Styled
    console.log('Styled log: ');
    console.log('%c I am some great text.', 
    'font-size:50px; background:blue; text-shadow: 10px 10px 0 black;');
    
    // warning!
    console.log('Warning log: ');
    console.warn('OH NO! Look at this');
    // Error :|
    console.log('Error log: ');
    console.error('Error!');
    // Info
    console.log('Info log: ');
    const p = document.querySelector('p');
    console.info(p)
    // Testing
    let condition = false;
    console.assert(condition, 'If you see this, the condition is false.')
    // clearing
    console.log('to clear the console: console.clear()');
    // console.clear(); // Just for clear the console

    // Viewing DOM Elements
    console.log('Log the DOM elements: ');
    console.log(p);
    console.dir(p);
    
    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    })
    // counting
    console.log('Counting on log: ');
    console.count('Yes'); 
    console.count('No');
    console.count('Yes');
    console.count('Yes');
    // timing
    console.time('counting time');
    fetch('http://api.github.com/users/thiagojacinto')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('counting time');
            console.log(data);
        });
    // Table format
    console.table(dogs);