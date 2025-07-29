let person1 = "Shreyas";
let person2 = "Rohit";
let person3 = "Rishabh";

// now suppose we want to use these 3 variables in other files
// we can do this by - 
module.exports = {person1, person2, person3}; // now person 1, 2, 3 will be usable