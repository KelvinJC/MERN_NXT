const { writeFileSync } = require('fs');

// write rows of data to file

for (let i = 0; i < 10000; i++ ) {
    writeFileSync(
        './content/big.txt',
        `hello world ${i}\n`,
        {flag: 'a'},
    )
} 