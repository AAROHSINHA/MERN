/*
If we want to use the greet function in other files in the directory such as in index.js
we can use modules
*/
function greet(username){
    console.log("hello", username);
}

// Tell other files we can use this function
module.exports = greet; // note that the module wrapper also has module and exports as params
// This allows us to use greet in other files. Go check in index.js