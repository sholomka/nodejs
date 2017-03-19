const http = require('http');

const server = http.createServer((req, res) => {



    let url = 'http://google.com';


    let body = '<p>Redirecting to <a href="'+ url +'">'+ url +'</a></p>';

    // res.setHeader('Location', url);
    // res.setHeader('Content-Length', body.length);
    // res.setHeader('Content-Type', 'text/html');

    res.statusCode = 302;


    console.log(res.getHeader('Location'));



    res.end(body)
});

server.listen(3000);