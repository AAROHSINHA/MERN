import http from 'http';

// creating a server
// /homepage
// /about
const server = http.createServer((req, res) => {
    // Routing
    if(req.url === '/'){
        // if someone goes to localhost:8000, they initially come to homepage right
        // thats the url / and this is what is displayed to them
        res.writeHead(200, "OK", {"Content-Type": "text/html"});
        res.end("<a hred='/contact'>Contact Page</a>");
    }else if(req.url === "/about"){
        res.writeHead(200, "OK", {"Content-Type": "text/html"});
        res.end("<h2>ABOUT SECTION</h2>");
    }else if(req.url === "/contact"){
        res.writeHead(200, "OK", {"Content-Type": "text/html"});
        res.end("<h3>CONTACT</h3>");
    }else{
        res.writeHead(404, "OK", {"Content-Type": "text/html"});
        res.end("<h1><404 Page Not Found/h1>");
    }
});

server.listen(8000, ()=>{
    console.log("SERVER UP");
});