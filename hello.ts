import { time, timeStamp } from 'node:console';
import { createServer } from 'node:http';

const hostname: string = '127.0.0.1';
const port: number = 1145;

const server = createServer((req, res) => {
    const { url, method } = req;
    if (url === '/' && method === 'GET')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hey, TypeScript is easy!');
    }
    else if (url === '/hi' && method === 'GET')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hi! Learn TypeScript now!')
    }
    else
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found')
    }
})

server.listen(port, hostname, () => {
    console.log(`Listening on ${port}...`);
})