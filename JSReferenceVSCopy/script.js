// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); // 100, 100
age = 200;      // Does not change the 'age2'
console.log(age, age2); // 200, 100


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
let team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lucy';
console.log(players, team); 
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
let team2 = players.slice();
// one way
// or create a new array and concat the old one in
let team3 = [].concat(players);
// or use the new ES6 Spread
let team4 = [...players];
team4[3] = 'Hyu';
console.log(team4);

let team5 = Array.from(players);
// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};
// and think we make a copy:

let captain = person;
captain.number = 99;    // Changes the original, its a reference

// how do we take a copy instead?

cap2 = Object.assign({}, person);
console.log(cap2);

// We will hopefully soon see the object ...spread
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const thiago = {
    name: 'Thiago',
    age: 30,
    address: { 
        street: 'Rua X',
        cep: '5300000',
        state: 'PE'
    }
};

console.clear();
console.log(thiago);

let dev = Object.assign({}, thiago);    // One level copy only
//  It means that 'address' object inside 'thiago's will be a reference, not a copy

// Performance caution with this solution:
let dev2 = JSON.parse(JSON.stringify(thiago));
// transform to JSON and than back to another object. 