/*
Promise API allows us to write the code asynchronously
Callback api allows us to add callbacks
sync api allows us to run the code synchronously
*/
import * as fs from 'fs';

// Creating a directory
fs.mkdirSync("D:\\mern\\test\\demo", {recursive: true});

/*
We can do anything with files using all 3 methods - promises/sync and callback
*/

// Similiary remove directory
// fs.rmdirSync(...)
