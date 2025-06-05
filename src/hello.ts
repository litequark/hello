import { createServer } from 'node:http';
import express from 'express';

interface HTTPResponse {
    code: number;
    data: object;
}

const hostname: string = '127.0.0.1';
const port: number = 1145;

const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.removeHeader('X-Powered-By');
    res.end('Hello, world!');
});

app.post('/post', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let j: HTTPResponse = {code: res.statusCode, data: {}};
    res.end(JSON.stringify(j));
});

app.listen(port, hostname, () => {
    console.log(`Listening on ${hostname}:${port}...`);
});