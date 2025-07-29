/*
In the last ROUTING part, we saw that we can route and write the html tags in js
But how to actually serve real html pages
We need to serve about.html and index.html
*/
import http from 'http';
import fs from "fs";

// creating a server
const server = http.createServer((req, res)=>{
    // basic routing
    if(req.url === '/'){
        res.writeHead(200, "OK", {"Content-Type": "text/html"})
        fs.readFile("./public/home.html", (error, data) => {
            if(error){
                throw error;
            }
            res.end(data);
        });
    }else if(req.url === '/about'){
        res.writeHead(200, "OK", {"Content-Type": "text/html"})
        fs.readFile("./public/about.html", (error, data) => {
            if(error){
                throw error;
            }
            res.end(data);
        });
    }
})

server.listen(8000, () => {
    console.log("SERVER UP!");
})



