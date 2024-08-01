const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    const first = result; 
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        const second = result; 
        writeFile(
            './content/result-async.txt', 
            `Here lies the async result typed for ${first} and ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("WRITE result", result);            
            },
        );
    })
})
