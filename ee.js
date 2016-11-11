var EventEmmiter = require('events').EventEmitter;

var server = new EventEmmiter;


server.on('request', function(request) {
    request.approved = true;
});

server.on('request', function(request) {
   console.log(request);
});


server.on('error', function(err) {
    console.log(err);
});



server.emit('request', {from: "Клиент"});

server.emit('request', {from: "Еще клиент"});


server.emit('error', new Error('Серверная ошибка'));