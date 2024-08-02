const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt')

// with extra args:
// - highWaterMark - control size of buffer read
// const stream = createReadStream(
//     './content/big.txt',
//     {highWaterMark: 90000},
// );
// - encoding change output from file from bytes to strings
// const stream = createReadStream(
//     './content/big.txt',
//     {encoding: 'utf8'},
// );


// default size of buffer 64kb
// last buffer - remainder
stream.on('data', (result) => {
    console.log(result);
    console.log(`Received ${result.length} bytes of data.`)
})

stream.on('error', (err) => {
    console.log(err);
} )