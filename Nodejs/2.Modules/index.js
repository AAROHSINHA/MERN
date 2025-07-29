// using exported greet function
const greet = require('./greet'); // now we can use the greet function
// now that ./greet is the filename not the function name
// by this we can use all module.exports from that file name
greet("Aaroh");

// using the exported peoples
const {person1, person2, person3} = require("./peoples"); // object destructuring
greet(person1);
console.log(person1);
console.log(person2);
console.log(person3);

/*
Note that to import and export we can also use conventional
import ABC
export DEF
*/
