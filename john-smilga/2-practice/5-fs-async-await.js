const { readFile, writeFile } = require('fs').promises;

const readWrite = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
    
        console.log(first);
    } catch (error) {
        console.log(error);
    }

}

readWrite();