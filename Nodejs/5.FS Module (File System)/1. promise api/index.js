import { exec } from "child_process";
import * as fs from "fs/promises";

// Copy the file
try{
    await fs.copyFile('README.md', 'info.txt'); //creates
}catch(error){
    console.log(error);
}