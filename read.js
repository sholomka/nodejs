var fs = require('fs');


fs.writeFile('file.tmp', 'data', function(err) {
    if (err) throw err;
    fs.rename('file.tmp', 'new.tmp', function(err) {
        if (err) throw err;

        // fs.unlink('new.tmp', function(err) {
        //     if (err) throw err;
        // });
    });
});


// fs.stat(__filename, function(err, stats) {
//    console.log(stats.isFile());
//    console.log(stats);
// });

//
// fs.readFile("blablabla", {encoding: 'utf-8'}, function(err, data) {
//    if (err) {
//        if (err.code = 'ENOENT') {
//            console.log(err.message);
//        } else {
//            console.log(err);
//        }
//
//
//    } else {
//        console.log(data)
//    }
// });
