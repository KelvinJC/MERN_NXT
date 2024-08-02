const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request event.')
    res.end('Welcome');
})

server.listen(5000, () => {
    console.log("Server listening on port 5000");
    console.log("Open your browser and point at localhost url: 127.0.0.1:5000")
})