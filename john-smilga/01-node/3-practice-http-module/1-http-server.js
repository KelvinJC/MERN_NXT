const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1 style="color: red; font-size:32px;">Hi Kaizen.</h1>');
        res.write('<h1 style="font-size:42px;">Welcome to our home page.</h1>');
        res.end();
    }
    else if (req.url === '/about') {
        res.end('<h1>Here is our short story.</h1>');
    } else {
        res.end(`
            <h1>Oops!</h1>
            <div style="font-size:42px; font-weight: bold;">
                <p>We can't seem to find the page you are looking for.</p>
                <a href="/">Back home</a>
            </div>
        `);
    }
    // console.log(req)
})

server.listen(5000);