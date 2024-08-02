
// INEFFICIENT WAY OF SERVING FILES OVER NETWORK
const http = require('http');
const fs = require('fs');


const server = http.createServer();

server.on('request', (req, res)=> {
    const text = fs.readFileSync('./content/big.txt', 'utf-8');
    res.end(text);   
})

server.listen(5000, () => {
    console.log('Server listening at localhost on port 5000...')
})

