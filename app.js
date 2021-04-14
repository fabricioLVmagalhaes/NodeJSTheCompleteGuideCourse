const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next)=> {
    console.log('in the midleware')
    next();
});
app.use((req, res, next)=> {
    console.log('in the next midleware')
});

const server = http.createServer(app);

server.listen(3000);
