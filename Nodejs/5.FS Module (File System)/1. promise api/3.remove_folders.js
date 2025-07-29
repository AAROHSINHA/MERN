import { exec } from "child_process";
import * as fs from "fs/promises";

// Read Content
// note to remove a directory it must be empty
try{
    await fs.rmdir("D:\\mern\\courses");
}catch(error){
    console.log(error);
}