"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_http_1 = require("node:http");
var hostname = '127.0.0.1';
var port = 1145;
var server = (0, node_http_1.createServer)(function (req, res) {
    var url = req.url, method = req.method;
    if (url === '/' && method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hey, TypeScript is easy!');
    }
    else if (url === '/hi' && method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hi! Learn TypeScript now!');
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found');
    }
});
server.listen(port, hostname, function () {
    console.log("Listening on ".concat(port, "..."));
});
