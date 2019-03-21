const express = require('express');
const port = process.env.PORT || 3000;

const index = express();

index
    .get('/', function (req, res) {
        res.send(JSON.stringify({ Hello: 'Welcome to my API!' }));
    })

index.listen(port, function () {
    console.log(`My example app is listening on port ${port} `);
})