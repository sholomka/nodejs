let fs = require('fs');

let stream = new fs.ReadStream(__filename, {encoding: 'utf-8'});


stream.on('readable', function() {
    let data = stream.read();
    console.log(data.length);
});


stream.on('end', function() {
    console.log('END');
});

stream.on('error', function(err) {
    if (err.code == 'ENOENT') {
        console.log('Нема файла');
    } else {
        console.error(err);
    }
});