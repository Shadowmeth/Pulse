const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);

app.get('/', (_req, res) => {
    res.send('<h1>Hello world!</h1>');
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

