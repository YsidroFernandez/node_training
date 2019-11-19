var http = require("http");
var fs = require("fs");
var express = require("express");
var mongo =  require("mongodb");
var user =  require("./schema").user;
var bodyParser = require("body-parser");

var app = express();

http.createServer((req,resp)=>{
    fs.readFile(("./views/test.html",(err,html)=>{
        resp.writeHead(200,{"Content-Type":"text/html"});
        resp.write(html);
        resp.end();
    }));

}).listen(8080);

// app.use(bodyParser.json());
// app.set("view engine","jade");
// app.get("/login",(req,resp)=>{
// resp.render("layout");
// });

// var person = new user({name:"Ysidro", lastname:"Fernandez"});
// user.find((err,resp)=>{
//  console.log(resp);
// });