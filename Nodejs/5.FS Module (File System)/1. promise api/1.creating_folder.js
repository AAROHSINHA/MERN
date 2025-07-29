import * as fs from "fs/promises";

// ==> 1. Creating a directory/ folder
/*
try{
    // as this is a promise api, we use await
    await fs.mkdir('D:\\nodejs'); // creating a nodejs folder inside D drive
    console.log("Folder Created!!");
}catch(error){
    console.log(error);
}
*/

// suppose we want to make subfolders inside the folders we need to use keyword recursive
try{
    await fs.mkdir("D:\\mern\\courses\\reactjs\\jsx", {recursive: true});
    console.log("Folder Created!");
}catch(error){
    console.log(error);
}
