import { exec } from "child_process";
import * as fs from "fs/promises";

// Create and write files
// try{
//     await fs.writeFile('README.md', 'Hello nodejs'); // this adds in the same directory
//     // [filename, filecontent]
// }catch(error){
//     console.log(error);
// }

// Read files
try{
    const data = await fs.readFile("README.md", "utf-8");
    // without utf-8 it returns buffer
    console.log(data);
}catch(error){
    console.log(error);
}

// Append data
try{
    await fs.appendFile("README.md", "Nodejs is is is is best");
}catch(error){
    console.log(error);
}