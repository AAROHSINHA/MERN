/*
With nodejs we need to create a server on our own.
Although in realworld projects, we donot create servers directly with nodejs
We might use some sort of libraries/frameworks such as expressjs etc.
*/

// THIS IS THE VANILLA VERSION OF CREATING A SERVER
// Nowadays most servers are created using frameworks such as expressjs
import http from 'http';

// Create our server
/*
params : 
req - what kind of a request the user is making
res - what is the response to it
*/
const server = http.createServer(function(req, res){
    console.log(req);
    // below with server.listen we create a server with portname 8000
    // when the server runs, we console the reg. Means this block executes

    // now we need to send some sort of result res so that user can see
    // -> res.setHeader("Content-Type", "text/html");
    
    res.statusCode = 404;
    res.statusMessage = "BAD";
    res.write("<h1>Hello From Node.js Server</h1>");
    
    // now we will get the server respose - webpage with this h1
})
server.listen(8000, () => {
    console.log("Server Up!");
});
// we need to provide some sort of a port



