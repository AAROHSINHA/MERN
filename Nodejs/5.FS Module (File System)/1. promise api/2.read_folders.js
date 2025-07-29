import { exec } from "child_process";
import * as fs from "fs/promises";

// Read Content
try{
    const files = await fs.readdir("d:\\mern\\courses"); // reading the files
    // we need to iterate through all out files in that dir
    for(const file of files){
        console.log(file);
    }
}catch(error){
    console.log(error);
}