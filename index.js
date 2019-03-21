require('dotenv').config();
const server = require('./api/server');


const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`My example app is listening on port ${port} `);
})