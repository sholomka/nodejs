var db = require('./db');
var log = require('logger')(module);

db.connect();

var User = require('./user');

function run() {
    var vasya = new User('Вася');
    var petya = new User('Петя');

    vasya.hello(petya);

    log( db.getPhrase('Run Successful'));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}



