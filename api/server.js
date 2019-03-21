const express = require('express');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
        res.send(`
             <h2>Welcome to my API!>/h2</h2>
             <p>It's working!</p>
        `);
    })

module.exports = server;