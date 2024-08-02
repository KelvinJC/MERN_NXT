// EFFICIENT WAY OF SERVING FILE CONTENT OVER NETWORK
// USING A STREAM.

const http = require('http');
const fs = require('fs');


const server = http.createServer();

server.on('request', (req, res)=> {
    // const text = fs.readFileSync('./7-practice-streams/content/big.txt', 'utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('./7-practice-streams/content/big.txt', 'utf-8')
    fileStream.on('open', () => {
        // read data from file and write to response object in chunks
        fileStream.pipe(res); // response object set up as a writeable stream
    })
    fileStream.on('error', (err) => {
        res.end(err);
    })
})

server.listen(5000, () => {
    console.log('Server listening at localhost on port 5000...')
})


