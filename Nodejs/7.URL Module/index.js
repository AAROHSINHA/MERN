/*
From URL modules we can operate on URLs.
Such as finding the hostname, hashname, etc
*/
import {URL} from "url";
const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

// Getting information about the URL
// console.log(myURL.hash); // just gives the hash version
// console.log(myURL.host); // up until portname
// console.log(myURL.hostname); // hostname without port
// console.log(myURL.port) // only portname
// console.log(myURL.href); // returns as link
// console.log(myURL.protocol); // return protocol
