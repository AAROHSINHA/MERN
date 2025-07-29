import * as fs from "fs";

// in callback api we can also pass in a callback
// syntax

// suppose to create a file we use mkdir
fs.mkdir("D:\\gamedev-dir", (error) => {
    if(error) throw error;
    console.log('Directory Created');
})

// here we pass in the error as callback
// we can do everything we learned in promise api without try catch block
// we just need to make callback function



