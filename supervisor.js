var http = require('http');
var url = require('url');
var server = http.createServer();

server.on('request', function(req, res) {
    var urlParsed = url.parse(req.url, true);

    debugger;

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.end(urlParsed.query.message + ' message');
        return;
    }

    res.statusCode = 404;
    res.end('Page not found2');
});


server.listen(1337);